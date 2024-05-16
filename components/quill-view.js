import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const quillViewCss = ".ql-container.quill-view.sc-quill-view{border:0}";
const QuillViewStyle0 = quillViewCss;

const QuillViewComponent = /*@__PURE__*/ proxyCustomElement(class QuillViewComponent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.format = 'html';
        this.content = undefined;
        this.debug = 'warn';
        this.formats = undefined;
        this.modules = undefined;
        this.strict = true;
        this.styles = '{}';
        this.theme = 'snow';
        this.defaultEmptyValue = null;
    }
    setEditorContent(value) {
        if (!this.quillEditor) {
            return null;
        }
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
        if (!this.quillEditor) {
            return null;
        }
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();
        let html = this.quillEditor.getSemanticHTML();
        if (this.isEmptyValue(html)) {
            html = this.defaultEmptyValue;
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
        let modules = this.modules
            ? JSON.parse(this.modules)
            : {
                toolbar: false,
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
            strict: this.strict,
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
        if (!this.quillEditor) {
            return null;
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
    isEmptyValue(html) {
        return html === '<p></p>' || html === '<div></div>' || html === '<p><br></p>' || html === '<div><br></div>';
    }
    render() {
        return (h("div", { key: 'b5d966c20180db2d28ee0de2ab8547aa50341bc3', "quill-element": true, ref: (el) => { this.editorElement = el; } }));
    }
    get wrapperElement() { return this; }
    static get watchers() { return {
        "styles": ["updateStyle"],
        "content": ["updateContent"]
    }; }
    static get style() { return QuillViewStyle0; }
}, [2, "quill-view", {
        "format": [1],
        "content": [1],
        "debug": [1],
        "formats": [16],
        "modules": [1],
        "strict": [4],
        "styles": [1],
        "theme": [1],
        "defaultEmptyValue": [8, "default-empty-value"]
    }, undefined, {
        "styles": ["updateStyle"],
        "content": ["updateContent"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["quill-view"];
    components.forEach(tagName => { switch (tagName) {
        case "quill-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, QuillViewComponent);
            }
            break;
    } });
}

const QuillView = QuillViewComponent;
const defineCustomElement = defineCustomElement$1;

export { QuillView, defineCustomElement };

//# sourceMappingURL=quill-view.js.map