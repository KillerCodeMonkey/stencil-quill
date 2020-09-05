import { C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-ac3691aa.js';

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if ( !(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-2bc9d17d.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["quill-editor_3",[[6,"quill-editor",{"format":[1],"bounds":[1],"content":[1],"debug":[1],"formats":[16],"modules":[1],"placeholder":[1],"readOnly":[4,"read-only"],"scrollingContainer":[1,"scrolling-container"],"strict":[4],"styles":[1],"theme":[1],"customToolbarPosition":[1,"custom-toolbar-position"],"preserveWhitespace":[4,"preserve-whitespace"]}],[2,"quill-view",{"format":[1],"content":[1],"debug":[1],"formats":[16],"modules":[1],"strict":[4],"styles":[1],"theme":[1],"preserveWhitespace":[4,"preserve-whitespace"]}],[2,"quill-view-html",{"content":[1],"theme":[1]}]]]], options);
  });
};

export { defineCustomElements };
