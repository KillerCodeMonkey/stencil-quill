import Quill from 'quill';
export class QuillComponent {
    constructor() {
        this.format = 'html';
        this.placeholder = 'Insert text here ...';
        this.strict = true;
        this.styles = {};
        this.customToolbarPosition = 'top';
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
                ['link', 'image', 'video']
            ]
        };
    }
    setEditorContent(value) {
        if (this.format === 'object') {
            this.quillEditor.setContents(value, 'silent');
        }
        else if (this.format === 'html') {
            const contents = this.quillEditor.clipboard.convert(value);
            this.quillEditor.setContents(contents, 'silent');
        }
        else if (this.format === 'text') {
            this.quillEditor.setText(value);
        }
        else if (this.format === 'json') {
            try {
                this.quillEditor.setContents(JSON.parse(value), 'silent');
            }
            catch (e) {
                this.quillEditor.setText(value, 'silent');
            }
        }
        else {
            this.quillEditor.setText(value, 'silent');
        }
    }
    getEditorContent() {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();
        let html = this.editorElement.children[0].innerHTML;
        if (html === '<p><br></p>' || html === '<div><br><div>') {
            html = '';
        }
        if (this.format === 'object') {
            return content;
        }
        else if (this.format === 'html') {
            return html;
        }
        else if (this.format === 'text') {
            this.quillEditor.getText();
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
        let modules = this.modules || this.defaultModules;
        const toolbarElem = this.wrapperElement.querySelector('[slot="quill-toolbar"]');
        if (toolbarElem) {
            modules['toolbar'] = toolbarElem;
        }
        if (this.styles) {
            Object.keys(this.styles).forEach((key) => {
                this.editorElement.style[key] = this.styles[key];
            });
        }
        this.quillEditor = new Quill(this.editorElement, {
            modules: modules,
            placeholder: this.placeholder,
            readOnly: this.readOnly || false,
            theme: this.theme || 'snow',
            formats: this.formats,
            bounds: this.bounds ? (this.bounds === 'self' ? this.editorElement : this.bounds) : document.body,
            strict: this.strict,
            scrollingContainer: this.scrollingContainer
        });
        if (this.content) {
            this.setEditorContent(this.content);
            this.quillEditor['history'].clear();
        }
        this.onInitialised.emit(this.quillEditor);
        this.selectionChangeEvent = this.quillEditor.on('selection-change', (range, oldRange, source) => {
            this.onSelectionChanged.emit({
                editor: this.quillEditor,
                range: range,
                oldRange: oldRange,
                source: source
            });
        });
        this.textChangeEvent = this.quillEditor.on('text-change', (delta, oldDelta, source) => {
            const text = this.quillEditor.getText();
            const content = this.quillEditor.getContents();
            let html = this.editorElement.children[0].innerHTML;
            if (html === '<p><br></p>' || html === '<div><br><div>') {
                html = null;
            }
            this.onContentChanged.emit({
                editor: this.quillEditor,
                content,
                delta,
                html,
                oldDelta,
                source,
                text
            });
        });
    }
    componentDidUnload() {
        if (this.selectionChangeEvent) {
            this.selectionChangeEvent.removeListener('selection-change');
        }
        if (this.textChangeEvent) {
            this.textChangeEvent.removeListener('text-change');
        }
    }
    updateContent(newValue) {
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
        console.log(newValue, oldValue);
        if (!this.quillEditor) {
            return;
        }
        if (oldValue) {
            Object.keys(oldValue).forEach((key) => {
                this.editorElement.style[key] = '';
            });
        }
        if (newValue) {
            Object.keys(newValue).forEach((key) => {
                this.editorElement.style[key] = newValue[key];
            });
        }
    }
    render() {
        const editor = h("div", { "quill-element": true, ref: (el) => this.editorElement = el });
        const elements = [h("slot", { name: "quill-toolbar" })];
        if (this.customToolbarPosition === 'bottom') {
            elements.unshift(editor);
        }
        else {
            elements.push(editor);
        }
        return (elements);
    }
    static get is() { return "quill-component"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return {
        "bounds": {
            "type": String,
            "attr": "bounds"
        },
        "content": {
            "type": String,
            "attr": "content",
            "watchCallbacks": ["updateContent"]
        },
        "customToolbarPosition": {
            "type": String,
            "attr": "custom-toolbar-position"
        },
        "format": {
            "type": String,
            "attr": "format"
        },
        "formats": {
            "type": "Any",
            "attr": "formats"
        },
        "modules": {
            "type": "Any",
            "attr": "modules"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder",
            "watchCallbacks": ["updatePlaceholder"]
        },
        "readOnly": {
            "type": Boolean,
            "attr": "read-only",
            "watchCallbacks": ["updateReadOnly"]
        },
        "scrollingContainer": {
            "type": String,
            "attr": "scrolling-container"
        },
        "strict": {
            "type": Boolean,
            "attr": "strict"
        },
        "styles": {
            "type": "Any",
            "attr": "styles",
            "watchCallbacks": ["updateStyle"]
        },
        "theme": {
            "type": String,
            "attr": "theme"
        },
        "wrapperElement": {
            "elementRef": true
        }
    }; }
    static get events() { return [{
            "name": "onInitialised",
            "method": "onInitialised",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "onContentChanged",
            "method": "onContentChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "onSelectionChanged",
            "method": "onSelectionChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}
