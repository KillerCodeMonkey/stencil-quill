import type { Components, JSX } from "../types/components";

interface QuillEditor extends Components.QuillEditor, HTMLElement {}
export const QuillEditor: {
  prototype: QuillEditor;
  new (): QuillEditor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
