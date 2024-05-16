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
    defaultEmptyValue: any;
    quillEditor: any;
    editorElement: HTMLDivElement;
    setEditorContent(value: any): any;
    getEditorContent(): any;
    componentDidLoad(): void;
    updateStyle(newValue: string, oldValue: string): void;
    updateContent(newValue: any): void;
    private isEmptyValue;
    render(): any;
}
