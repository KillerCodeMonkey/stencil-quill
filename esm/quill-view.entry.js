import { r as registerInstance, h, g as getElement } from './core-3184f5a2.js';

const QuillViewComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.format = 'html';
        this.debug = 'warn';
        this.strict = true;
        this.styles = '{}';
        this.preserveWhitespace = false;
    }
    setEditorContent(value) {
        if (this.format === 'html') {
            const contents = this.quillEditor.clipboard.convert(value);
            this.quillEditor.setContents(contents, 'api');
        }
        else if (this.format === 'text') {
            this.quillEditor.setText(value);
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
        let modules = this.modules ? JSON.parse(this.modules) : {
            toolbar: false
        };
        if (modules.toolbar) {
            modules.toolbar = false;
        }
        this.quillEditor = new Quill(this.editorElement, {
            debug: this.debug,
            modules: modules,
            readOnly: true,
            theme: this.theme || 'snow',
            formats: this.formats,
            strict: this.strict
        });
        if (this.styles) {
            const styles = JSON.parse(this.styles);
            Object.keys(styles).forEach((key) => {
                this.editorElement.style.setProperty(key, styles[key]);
            });
        }
        this.editorElement.classList.add('quill-view');
        if (this.content) {
            this.setEditorContent(this.content);
            this.quillEditor['history'].clear();
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
    render() {
        return (this.preserveWhitespace ? h("pre", { "quill-element": true, ref: (el) => this.editorElement = el }) : h("div", { "quill-element": true, ref: (el) => this.editorElement = el }));
    }
    get wrapperElement() { return getElement(this); }
    static get watchers() { return {
        "styles": ["updateStyle"],
        "content": ["updateContent"]
    }; }
    static get style() { return ".ql-container.quill-view.sc-quill-view{border:0}"; }
};

export { QuillViewComponent as quill_view };
