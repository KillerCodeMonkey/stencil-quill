
// QuillComponent: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './quill-component.core.js';
import { COMPONENTS } from './quill-component.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
