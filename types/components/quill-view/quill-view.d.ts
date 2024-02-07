import { ComponentDidLoad } from '../../stencil-public-runtime';
export declare class QuillViewComponent implements ComponentDidLoad {
    wrapperElement: HTMLElement;
    format: 'html' | 'text' | 'json';
    content: string;
    debug: string;
    formats: string[];
    modules?: string;
    strict: boolean;
    styles: string;
    theme: string;
    preserveWhitespace: boolean;
    quillEditor: any;
    editorElement: HTMLDivElement | HTMLPreElement;
    setEditorContent(value: any): void;
    getEditorContent(): any;
    componentDidLoad(): void;
    updateStyle(newValue: string, oldValue: string): void;
    updateContent(newValue: any): void;
    render(): any;
}
