"use strict";
// QuillComponent: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var quill_component_core_js_1 = require("./quill-component.core.js");
var quill_component_components_js_1 = require("./quill-component.components.js");
function defineCustomElements(win, opts) {
    return quill_component_core_js_1.defineCustomElement(win, quill_component_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
