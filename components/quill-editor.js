import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const QuillEditorComponent = /*@__PURE__*/ proxyCustomElement(class QuillEditorComponent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.editorInit = createEvent(this, "editorInit", 7);
        this.editorChange = createEvent(this, "editorChange", 7);
        this.editorContentChange = createEvent(this, "editorContentChange", 7);
        this.editorSelectionChange = createEvent(this, "editorSelectionChange", 7);
        this.editorFocus = createEvent(this, "editorFocus", 7);
        this.editorBlur = createEvent(this, "editorBlur", 7);
        this.defaultModules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                ['blockquote', 'code-block'],
                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                [{ direction: 'rtl' }], // text direction
                [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [].slice() }, { background: [].slice() }], // dropdown with defaults from theme
                [{ font: [].slice() }],
                [{ align: [].slice() }],
                ['clean'], // remove formatting button
                ['link', 'image', 'video'], // link and image, video
            ],
        };
        this.format = 'html';
        this.bounds = undefined;
        this.content = undefined;
        this.debug = 'warn';
        this.formats = undefined;
        this.modules = undefined;
        this.placeholder = 'Insert text here ...';
        this.readOnly = undefined;
        this.scrollingContainer = undefined;
        this.strict = true;
        this.styles = '{}';
        this.theme = 'snow';
        this.customToolbarPosition = 'top';
        this.preserveWhitespace = false;
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
            scrollingContainer: this.scrollingContainer,
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
                    text,
                });
            }
            else {
                this.editorChange.emit({
                    editor: this.quillEditor,
                    event,
                    oldRange: old,
                    range: current,
                    source,
                });
            }
        });
        this.selectionChangeEvent = this.quillEditor.on('selection-change', (range, oldRange, source) => {
            if (range === null) {
                this.editorBlur.emit({
                    editor: this.quillEditor,
                    source,
                });
            }
            else if (oldRange === null) {
                this.editorFocus.emit({
                    editor: this.quillEditor,
                    source,
                });
            }
            this.editorSelectionChange.emit({
                editor: this.quillEditor,
                range,
                oldRange,
                source,
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
                text,
            });
        });
        setTimeout(() => {
            this.editorInit.emit(this.quillEditor);
        });
    }
    disconnectedCallback() {
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
        h(Host, null, h("slot", { name: "quill-toolbar", "quill-toolbar": "" }));
    }
    get wrapperElement() { return this; }
    static get watchers() { return {
        "content": ["updateContent"],
        "readOnly": ["updateReadOnly"],
        "placeholder": ["updatePlaceholder"],
        "styles": ["updateStyle"]
    }; }
}, [6, "quill-editor", {
        "format": [1],
        "bounds": [1],
        "content": [1],
        "debug": [1],
        "formats": [16],
        "modules": [1],
        "placeholder": [1],
        "readOnly": [4, "read-only"],
        "scrollingContainer": [1, "scrolling-container"],
        "strict": [4],
        "styles": [1],
        "theme": [1],
        "customToolbarPosition": [1, "custom-toolbar-position"],
        "preserveWhitespace": [4, "preserve-whitespace"]
    }, undefined, {
        "content": ["updateContent"],
        "readOnly": ["updateReadOnly"],
        "placeholder": ["updatePlaceholder"],
        "styles": ["updateStyle"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["quill-editor"];
    components.forEach(tagName => { switch (tagName) {
        case "quill-editor":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, QuillEditorComponent);
            }
            break;
    } });
}

const QuillEditor = QuillEditorComponent;
const defineCustomElement = defineCustomElement$1;

export { QuillEditor, defineCustomElement };

//# sourceMappingURL=quill-editor.js.map