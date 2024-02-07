import type { Components, JSX } from "../types/components";

interface QuillView extends Components.QuillView, HTMLElement {}
export const QuillView: {
    prototype: QuillView;
    new (): QuillView;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
