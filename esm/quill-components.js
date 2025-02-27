import { p as promiseResolve, b as bootstrapLazy } from './index-c6a20355.js';
export { s as setNonce } from './index-c6a20355.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.27.1 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["quill-editor_3",[[6,"quill-editor",{"format":[1],"bounds":[1],"content":[1],"debug":[1],"formats":[16],"modules":[1],"placeholder":[1],"readOnly":[4,"read-only"],"styles":[1],"theme":[1],"customToolbarPosition":[1,"custom-toolbar-position"],"defaultEmptyValue":[8,"default-empty-value"]},null,{"content":["updateContent"],"readOnly":["updateReadOnly"],"placeholder":["updatePlaceholder"],"styles":["updateStyle"]}],[2,"quill-view",{"format":[1],"content":[1],"debug":[1],"formats":[16],"modules":[1],"strict":[4],"styles":[1],"theme":[1],"defaultEmptyValue":[8,"default-empty-value"]},null,{"styles":["updateStyle"],"content":["updateContent"]}],[2,"quill-view-html",{"content":[1],"theme":[1]},null,{"theme":["updateTheme"]}]]]], options);
});

//# sourceMappingURL=quill-components.js.map