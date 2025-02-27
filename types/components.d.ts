/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface QuillEditor {
        "bounds": HTMLElement | string;
        "content": string;
        "customToolbarPosition": 'top' | 'bottom';
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "custom-toolbar-position"?: 'top' | 'bottom';
        "debug": string;
        "defaultEmptyValue": any;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "default-empty-value"?: any;
        "format": 'html' | 'text' | 'json';
        "formats": string[];
        "modules"?: string;
        "placeholder": string;
        "readOnly": boolean;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "read-only"?: boolean;
        "styles": string;
        "theme": string;
    }
    interface QuillView {
        "content": string;
        "debug": string;
        "defaultEmptyValue": any;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "default-empty-value"?: any;
        "format": 'html' | 'text' | 'json';
        "formats": string[];
        "modules"?: string;
        "strict": boolean;
        "styles": string;
        "theme": string;
    }
    interface QuillViewHtml {
        "content": string;
        "theme": string;
    }
}
export interface QuillEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLQuillEditorElement;
}
declare global {
    interface HTMLQuillEditorElementEventMap {
        "editorInit": any;
        "editorChange": | {
        editor: any;
        event: 'text-change';
        content: any;
        text: string;
        html: string;
        delta: any;
        oldDelta: any;
        source: string;
      }
    | {
        editor: any;
        event: 'selection-change';
        range: any;
        oldRange: any;
        source: string;
      };
        "editorContentChange": {
    editor: any;
    content: any;
    text: string;
    html: string;
    delta: any;
    oldDelta: any;
    source: string;
  };
        "editorSelectionChange": {
    editor: any;
    range: any;
    oldRange: any;
    source: string;
  };
        "editorFocus": {
    editor: any;
    source: string;
  };
        "editorBlur": {
    editor: any;
    source: string;
  };
    }
    interface HTMLQuillEditorElement extends Components.QuillEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLQuillEditorElementEventMap>(type: K, listener: (this: HTMLQuillEditorElement, ev: QuillEditorCustomEvent<HTMLQuillEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLQuillEditorElementEventMap>(type: K, listener: (this: HTMLQuillEditorElement, ev: QuillEditorCustomEvent<HTMLQuillEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLQuillEditorElement: {
        prototype: HTMLQuillEditorElement;
        new (): HTMLQuillEditorElement;
    };
    interface HTMLQuillViewElement extends Components.QuillView, HTMLStencilElement {
    }
    var HTMLQuillViewElement: {
        prototype: HTMLQuillViewElement;
        new (): HTMLQuillViewElement;
    };
    interface HTMLQuillViewHtmlElement extends Components.QuillViewHtml, HTMLStencilElement {
    }
    var HTMLQuillViewHtmlElement: {
        prototype: HTMLQuillViewHtmlElement;
        new (): HTMLQuillViewHtmlElement;
    };
    interface HTMLElementTagNameMap {
        "quill-editor": HTMLQuillEditorElement;
        "quill-view": HTMLQuillViewElement;
        "quill-view-html": HTMLQuillViewHtmlElement;
    }
}
declare namespace LocalJSX {
    interface QuillEditor {
        "bounds"?: HTMLElement | string;
        "content"?: string;
        "customToolbarPosition"?: 'top' | 'bottom';
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "custom-toolbar-position"?: 'top' | 'bottom';
        "debug"?: string;
        "defaultEmptyValue"?: any;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "default-empty-value"?: any;
        "format"?: 'html' | 'text' | 'json';
        "formats"?: string[];
        "modules"?: string;
        "onEditorBlur"?: (event: QuillEditorCustomEvent<{
    editor: any;
    source: string;
  }>) => void;
        "onEditorChange"?: (event: QuillEditorCustomEvent<| {
        editor: any;
        event: 'text-change';
        content: any;
        text: string;
        html: string;
        delta: any;
        oldDelta: any;
        source: string;
      }
    | {
        editor: any;
        event: 'selection-change';
        range: any;
        oldRange: any;
        source: string;
      }>) => void;
        "onEditorContentChange"?: (event: QuillEditorCustomEvent<{
    editor: any;
    content: any;
    text: string;
    html: string;
    delta: any;
    oldDelta: any;
    source: string;
  }>) => void;
        "onEditorFocus"?: (event: QuillEditorCustomEvent<{
    editor: any;
    source: string;
  }>) => void;
        "onEditorInit"?: (event: QuillEditorCustomEvent<any>) => void;
        "onEditorSelectionChange"?: (event: QuillEditorCustomEvent<{
    editor: any;
    range: any;
    oldRange: any;
    source: string;
  }>) => void;
        "placeholder"?: string;
        "readOnly"?: boolean;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "read-only"?: boolean;
        "styles"?: string;
        "theme"?: string;
    }
    interface QuillView {
        "content"?: string;
        "debug"?: string;
        "defaultEmptyValue"?: any;
        /**
         * @deprecated use camelCase instead. Support for dash-casing will be removed in Stencil v5.
         */
        "default-empty-value"?: any;
        "format"?: 'html' | 'text' | 'json';
        "formats"?: string[];
        "modules"?: string;
        "strict"?: boolean;
        "styles"?: string;
        "theme"?: string;
    }
    interface QuillViewHtml {
        "content"?: string;
        "theme"?: string;
    }
    interface IntrinsicElements {
        "quill-editor": QuillEditor;
        "quill-view": QuillView;
        "quill-view-html": QuillViewHtml;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "quill-editor": LocalJSX.QuillEditor & JSXBase.HTMLAttributes<HTMLQuillEditorElement>;
            "quill-view": LocalJSX.QuillView & JSXBase.HTMLAttributes<HTMLQuillViewElement>;
            "quill-view-html": LocalJSX.QuillViewHtml & JSXBase.HTMLAttributes<HTMLQuillViewHtmlElement>;
        }
    }
}
