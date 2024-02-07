import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const quillViewHtmlCss = ".ql-container.quill-view-html.sc-quill-view-html{border:0}";
const QuillViewHtmlStyle0 = quillViewHtmlCss;

const QuillViewHTMLComponent = /*@__PURE__*/ proxyCustomElement(class QuillViewHTMLComponent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.themeClass = 'ql-snow';
        this.content = undefined;
        this.theme = 'snow';
    }
    updateTheme(newValue) {
        this.themeClass = `ql-${newValue || 'snow'}`;
    }
    render() {
        const classes = `ql-container ${this.themeClass} quill-view-html`;
        return (h("div", { key: '91c1b70fd1a72758b8d849e0e53f7e106d688b04', class: classes }, h("div", { key: '6801553e41d3aa0557dc3b5e71583baf046d0980', class: "ql-editor", innerHTML: this.content })));
    }
    static get watchers() { return {
        "theme": ["updateTheme"]
    }; }
    static get style() { return QuillViewHtmlStyle0; }
}, [2, "quill-view-html", {
        "content": [1],
        "theme": [1]
    }, undefined, {
        "theme": ["updateTheme"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["quill-view-html"];
    components.forEach(tagName => { switch (tagName) {
        case "quill-view-html":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, QuillViewHTMLComponent);
            }
            break;
    } });
}

const QuillViewHtml = QuillViewHTMLComponent;
const defineCustomElement = defineCustomElement$1;

export { QuillViewHtml, defineCustomElement };

//# sourceMappingURL=quill-view-html.js.map