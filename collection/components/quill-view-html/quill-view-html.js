import { h } from "@stencil/core";
export class QuillViewHTMLComponent {
    constructor() {
        this.theme = 'snow';
        this.themeClass = 'ql-snow';
    }
    updateTheme(newValue) {
        this.themeClass = `ql-${newValue || 'snow'}`;
    }
    render() {
        const classes = `ql-container ${this.themeClass} quill-view-html`;
        return (h("div", { key: 'a7136b962b0fd69180276ef7add2d89b8389ba3a', class: classes }, h("div", { key: '598a89699ee3255a5406b999b9775f8947a42396', class: "ql-editor", innerHTML: this.content })));
    }
    static get is() { return "quill-view-html"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["./quill-view-html.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["quill-view-html.css"]
        };
    }
    static get properties() {
        return {
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
                "getter": false,
                "setter": false,
                "attribute": "content",
                "reflect": false
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
                "getter": false,
                "setter": false,
                "attribute": "theme",
                "reflect": false,
                "defaultValue": "'snow'"
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "theme",
                "methodName": "updateTheme"
            }];
    }
}
//# sourceMappingURL=quill-view-html.js.map
