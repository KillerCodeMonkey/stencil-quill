'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ab2fcd0f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["quill-editor_3.cjs",[[6,"quill-editor",{"format":[1],"bounds":[1],"content":[1],"debug":[1],"formats":[16],"modules":[1],"placeholder":[1],"readOnly":[4,"read-only"],"styles":[1],"theme":[1],"customToolbarPosition":[1,"custom-toolbar-position"],"defaultEmptyValue":[8,"default-empty-value"]},null,{"content":["updateContent"],"readOnly":["updateReadOnly"],"placeholder":["updatePlaceholder"],"styles":["updateStyle"]}],[2,"quill-view",{"format":[1],"content":[1],"debug":[1],"formats":[16],"modules":[1],"strict":[4],"styles":[1],"theme":[1],"defaultEmptyValue":[8,"default-empty-value"]},null,{"styles":["updateStyle"],"content":["updateContent"]}],[2,"quill-view-html",{"content":[1],"theme":[1]},null,{"theme":["updateTheme"]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map