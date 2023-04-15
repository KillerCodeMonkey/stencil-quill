import type { Components, JSX } from "../types/components";

interface QuillViewHtml extends Components.QuillViewHtml, HTMLElement {}
export const QuillViewHtml: {
  prototype: QuillViewHtml;
  new (): QuillViewHtml;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
