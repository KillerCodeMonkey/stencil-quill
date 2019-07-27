'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-0a02996c.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["quill-editor_2.cjs",[[6,"quill-editor",{"format":[1],"bounds":[1],"content":[1],"debug":[1],"formats":[16],"modules":[1],"placeholder":[1],"readOnly":[4,"read-only"],"scrollingContainer":[1,"scrolling-container"],"strict":[4],"styles":[1],"theme":[1],"customToolbarPosition":[1,"custom-toolbar-position"],"preserveWhitespace":[4,"preserve-whitespace"]}],[2,"quill-view-html",{"content":[1],"theme":[1]}]]],["quill-view.cjs",[[2,"quill-view",{"format":[1],"content":[1],"debug":[1],"formats":[16],"modules":[1],"strict":[4],"styles":[1],"theme":[1],"preserveWhitespace":[4,"preserve-whitespace"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
