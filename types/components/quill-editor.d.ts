import { ComponentDidLoad, ComponentDidUnload, EventEmitter } from '../stencil.core';
export declare class QuillEditorComponent implements ComponentDidLoad, ComponentDidUnload {
    editorInit: EventEmitter<any>;
    editorChange: EventEmitter<{
        editor: any;
        event: 'text-change';
        content: any;
        text: string;
        html: string;
        delta: any;
        oldDelta: any;
        source: string;
    } | {
        editor: any;
        event: 'selection-change';
        range: any;
        oldRange: any;
        source: string;
    }>;
    editorContentChange: EventEmitter<{
        editor: any;
        content: any;
        text: string;
        html: string;
        delta: any;
        oldDelta: any;
        source: string;
    }>;
    editorSelectionChange: EventEmitter<{
        editor: any;
        range: any;
        oldRange: any;
        source: string;
    }>;
    editorFocus: EventEmitter<{
        editor: any;
        source: string;
    }>;
    editorBlur: EventEmitter<{
        editor: any;
        source: string;
    }>;
    wrapperElement: HTMLElement;
    format: 'html' | 'text' | 'json';
    bounds: HTMLElement | string;
    content: string;
    debug: string;
    formats: string[];
    modules: string;
    placeholder: string;
    readOnly: boolean;
    scrollingContainer: HTMLElement | string;
    strict: boolean;
    styles: string;
    theme: string;
    customToolbarPosition: 'top' | 'bottom';
    preserveWhitespace: boolean;
    quillEditor: any;
    editorElement: HTMLDivElement | HTMLPreElement;
    private defaultModules;
    selectionChangeEvent: any;
    textChangeEvent: any;
    editorChangeEvent: any;
    setEditorContent(value: any): void;
    getEditorContent(): any;
    componentDidLoad(): void;
    componentDidUnload(): void;
    updateContent(newValue: any): void;
    updateReadOnly(newValue: boolean, oldValue: boolean): void;
    updatePlaceholder(newValue: string, oldValue: string): void;
    updateStyle(newValue: string, oldValue: string): void;
    render(): any[];
}
