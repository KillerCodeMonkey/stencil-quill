import { h, Component, Element, Event, Prop, Watch, Host } from '@stencil/core';
export class QuillEditorComponent {
    constructor() {
        this.format = 'html';
        this.debug = 'warn';
        this.placeholder = 'Insert text here ...';
        this.strict = true;
        this.styles = '{}';
        this.theme = 'snow';
        this.customToolbarPosition = 'top';
        this.preserveWhitespace = false;
        this.defaultModules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ header: 1 }, { header: 2 }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ direction: 'rtl' }],
                [{ size: ['small', false, 'large', 'huge'] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [
                    { color: [].slice() },
                    { background: [].slice() }
                ],
                [{ font: [].slice() }],
                [{ align: [].slice() }],
                ['clean'],
                ['link', 'image', 'video'] // link and image, video
            ]
        };
    }
    setEditorContent(value) {
        if (this.format === 'html') {
            const contents = this.quillEditor.clipboard.convert(value);
            this.quillEditor.setContents(contents, 'api');
        }
        else if (this.format === 'text') {
            this.quillEditor.setText(value, 'api');
        }
        else if (this.format === 'json') {
            try {
                this.quillEditor.setContents(JSON.parse(value), 'api');
            }
            catch (e) {
                this.quillEditor.setText(value, 'api');
            }
        }
        else {
            this.quillEditor.setText(value, 'api');
        }
    }
    getEditorContent() {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();
        let html = this.editorElement.children[0].innerHTML;
        if (html === '<p><br></p>' || html === '<div><br></div>') {
            html = '';
        }
        if (this.format === 'html') {
            return html;
        }
        else if (this.format === 'text') {
            return text;
        }
        else if (this.format === 'json') {
            try {
                return JSON.stringify(content);
            }
            catch (e) {
                return text;
            }
        }
        else {
            return text;
        }
    }
    componentDidLoad() {
        this.editorElement = this.preserveWhitespace ? document.createElement('pre') : document.createElement('div');
        this.editorElement.setAttribute('quill-editor', '');
        let modules = this.modules ? JSON.parse(this.modules) : this.defaultModules;
        const toolbarElem = this.wrapperElement.querySelector('[slot="quill-toolbar"]');
        if (toolbarElem) {
            modules['toolbar'] = toolbarElem;
            if (this.customToolbarPosition === 'bottom') {
                this.wrapperElement.prepend(this.editorElement);
            }
            else {
                this.wrapperElement.append(this.editorElement);
            }
        }
        else {
            this.wrapperElement.append(this.editorElement);
        }
        this.quillEditor = new Quill(this.editorElement, {
            debug: this.debug,
            modules: modules,
            placeholder: this.placeholder,
            readOnly: this.readOnly || false,
            theme: this.theme || 'snow',
            formats: this.formats,
            bounds: this.bounds ? (this.bounds === 'self' ? this.editorElement : this.bounds) : document.body,
            strict: this.strict,
            scrollingContainer: this.scrollingContainer
        });
        if (this.styles) {
            const styles = JSON.parse(this.styles);
            Object.keys(styles).forEach((key) => {
                this.editorElement.style.setProperty(key, styles[key]);
            });
        }
        if (this.content) {
            this.setEditorContent(this.content);
            this.quillEditor['history'].clear();
        }
        this.editorChangeEvent = this.quillEditor.on('editor-change', (event, current, old, source) => {
            // only emit changes emitted by user interactions
            if (event === 'text-change') {
                const text = this.quillEditor.getText();
                const content = this.quillEditor.getContents();
                let html = this.editorElement.querySelector('.ql-editor').innerHTML;
                if (html === '<p><br></p>' || html === '<div><br></div>') {
                    html = null;
                }
                this.editorChange.emit({
                    content,
                    delta: current,
                    editor: this.quillEditor,
                    event,
                    html,
                    oldDelta: old,
                    source,
                    text
                });
            }
            else {
                this.editorChange.emit({
                    editor: this.quillEditor,
                    event,
                    oldRange: old,
                    range: current,
                    source
                });
            }
        });
        this.selectionChangeEvent = this.quillEditor.on('selection-change', (range, oldRange, source) => {
            if (range === null) {
                this.editorBlur.emit({
                    editor: this.quillEditor,
                    source
                });
            }
            else if (oldRange === null) {
                this.editorFocus.emit({
                    editor: this.quillEditor,
                    source
                });
            }
            this.editorSelectionChange.emit({
                editor: this.quillEditor,
                range,
                oldRange,
                source
            });
        });
        this.textChangeEvent = this.quillEditor.on('text-change', (delta, oldDelta, source) => {
            const text = this.quillEditor.getText();
            const content = this.quillEditor.getContents();
            let html = this.editorElement.querySelector('.ql-editor').innerHTML;
            if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
            }
            this.editorContentChange.emit({
                editor: this.quillEditor,
                content,
                delta,
                html,
                oldDelta,
                source,
                text
            });
        });
        setTimeout(() => {
            this.editorInit.emit(this.quillEditor);
        });
    }
    componentDidUnload() {
        if (this.selectionChangeEvent) {
            this.selectionChangeEvent.removeListener('selection-change');
        }
        if (this.textChangeEvent) {
            this.textChangeEvent.removeListener('text-change');
        }
        if (this.editorChangeEvent) {
            this.editorChangeEvent.removeListener('editor-change');
        }
    }
    updateContent(newValue) {
        if (!this.quillEditor) {
            return;
        }
        const editorContents = this.getEditorContent();
        if (['text', 'html', 'json'].indexOf(this.format) > -1 && newValue === editorContents) {
            return null;
        }
        else {
            let changed = false;
            try {
                const newContentString = JSON.stringify(newValue);
                changed = JSON.stringify(editorContents) !== newContentString;
            }
            catch (_a) {
                return null;
            }
            if (!changed) {
                return null;
            }
        }
        this.setEditorContent(newValue);
    }
    updateReadOnly(newValue, oldValue) {
        if (!this.quillEditor) {
            return;
        }
        if (newValue !== oldValue) {
            this.quillEditor.enable(!newValue);
        }
    }
    updatePlaceholder(newValue, oldValue) {
        if (!this.quillEditor) {
            return;
        }
        if (newValue !== oldValue) {
            this.quillEditor.root.dataset.placeholder = newValue;
        }
    }
    updateStyle(newValue, oldValue) {
        if (!this.editorElement) {
            return;
        }
        if (oldValue) {
            const old = JSON.parse(oldValue);
            Object.keys(old).forEach((key) => {
                this.editorElement.style.setProperty(key, '');
            });
        }
        if (newValue) {
            const value = JSON.parse(newValue);
            Object.keys(value).forEach((key) => {
                this.editorElement.style.setProperty(key, value[key]);
            });
        }
    }
    render() {
        h(Host, null,
            h("slot", { name: "quill-toolbar", "quill-toolbar": "" }));
    }
    static get is() { return "quill-editor"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "format": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'html' | 'text' | 'json'",
                "resolved": "\"html\" | \"json\" | \"text\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "format",
            "reflect": false,
            "defaultValue": "'html'"
        },
        "bounds": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement | string",
                "resolved": "HTMLElement | string",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "bounds",
            "reflect": false
        },
        "content": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "content",
            "reflect": false
        },
        "debug": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "debug",
            "reflect": false,
            "defaultValue": "'warn'"
        },
        "formats": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "string[]",
                "resolved": "string[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "modules": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "modules",
            "reflect": false
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false,
            "defaultValue": "'Insert text here ...'"
        },
        "readOnly": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "read-only",
            "reflect": false
        },
        "scrollingContainer": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "HTMLElement | string",
                "resolved": "HTMLElement | string",
                "references": {
                    "HTMLElement": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "scrolling-container",
            "reflect": false
        },
        "strict": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "strict",
            "reflect": false,
            "defaultValue": "true"
        },
        "styles": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "styles",
            "reflect": false,
            "defaultValue": "'{}'"
        },
        "theme": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "theme",
            "reflect": false,
            "defaultValue": "'snow'"
        },
        "customToolbarPosition": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'top' |\u00A0'bottom'",
                "resolved": "\"bottom\" | \"top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "custom-toolbar-position",
            "reflect": false,
            "defaultValue": "'top'"
        },
        "preserveWhitespace": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "preserve-whitespace",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "editorInit",
            "name": "editorInit",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "editorChange",
            "name": "editorChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "{\n    editor: any\n    event: 'text-change',\n    content: any\n    text: string\n    html: string\n    delta: any\n    oldDelta: any\n    source: string\n  } | {\n    editor: any\n    event: 'selection-change',\n    range: any\n    oldRange: any\n    source: string\n  }",
                "resolved": "{ editor: any; event: \"selection-change\"; range: any; oldRange: any; source: string; } | { editor: any; event: \"text-change\"; content: any; text: string; html: string; delta: any; oldDelta: any; source: string; }",
                "references": {}
            }
        }, {
            "method": "editorContentChange",
            "name": "editorContentChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "{\n    editor: any\n    content: any\n    text: string\n    html: string\n    delta: any\n    oldDelta: any\n    source: string\n  }",
                "resolved": "{ editor: any; content: any; text: string; html: string; delta: any; oldDelta: any; source: string; }",
                "references": {}
            }
        }, {
            "method": "editorSelectionChange",
            "name": "editorSelectionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "{\n    editor: any\n    range: any\n    oldRange: any\n    source: string\n  }",
                "resolved": "{ editor: any; range: any; oldRange: any; source: string; }",
                "references": {}
            }
        }, {
            "method": "editorFocus",
            "name": "editorFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "{\n    editor: any\n    source: string\n  }",
                "resolved": "{ editor: any; source: string; }",
                "references": {}
            }
        }, {
            "method": "editorBlur",
            "name": "editorBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "{\n    editor: any\n    source: string\n  }",
                "resolved": "{ editor: any; source: string; }",
                "references": {}
            }
        }]; }
    static get elementRef() { return "wrapperElement"; }
    static get watchers() { return [{
            "propName": "content",
            "methodName": "updateContent"
        }, {
            "propName": "readOnly",
            "methodName": "updateReadOnly"
        }, {
            "propName": "placeholder",
            "methodName": "updatePlaceholder"
        }, {
            "propName": "styles",
            "methodName": "updateStyle"
        }]; }
}
