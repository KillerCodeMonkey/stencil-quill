import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const quillViewHtmlCss = ".ql-container.quill-view-html.sc-quill-view-html{border:0}";

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
    return (h("div", { class: classes }, h("div", { class: "ql-editor", innerHTML: this.content })));
  }
  static get watchers() { return {
    "theme": ["updateTheme"]
  }; }
  static get style() { return quillViewHtmlCss; }
}, [2, "quill-view-html", {
    "content": [1],
    "theme": [1]
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