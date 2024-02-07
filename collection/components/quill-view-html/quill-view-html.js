import { h } from "@stencil/core";
export class QuillViewHTMLComponent {
    constructor() {
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
