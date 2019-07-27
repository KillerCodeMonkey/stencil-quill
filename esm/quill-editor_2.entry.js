import { r as registerInstance, c as createEvent, h, g as getElement } from './chunk-7bdfbad8.js';

class QuillEditorComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.format = 'html';
        this.debug = 'warn';
        this.placeholder = 'Insert text here ...';
        this.strict = true;
        this.styles = '{}';
        this.customToolbarPosition = 'top';
        this.preserveWhitespace = false;
        this.defaultModules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ header: 1 }, { header: 2 }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ direction: 'rtl' }],
                [{ size: ['small', false, 'large', 'huge'] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [
                    { color: [].slice() },
                    { background: [].slice() }
                ],
                [{ font: [].slice() }],
                [{ align: [].slice() }],
                ['clean'],
                ['link', 'image', 'video'] // link and image, video
            ]
        };
        this.onInitialised = createEvent(this, "onInitialised", 7);
        this.onContentChanged = createEvent(this, "onContentChanged", 7);
        this.onSelectionChanged = createEvent(this, "onSelectionChanged", 7);
        this.onFocus = createEvent(this, "onFocus", 7);
        this.onBlur = createEvent(this, "onBlur", 7);
    }
    setEditorContent(value) {
        if (this.format === 'html') {
            const contents = this.quillEditor.clipboard.convert(value);
            this.quillEditor.setContents(contents, 'api');
        }
        else if (this.format === 'text') {
            this.quillEditor.setText(value);
        }
        else if (this.format === 'json') {
            try {
                this.quillEditor.setContents(JSON.parse(value), 'api');
            }
            catch (e) {
                this.quillEditor.setText(value, 'api');
            }
        }
        else {
            this.quillEditor.setText(value, 'api');
        }
    }
    getEditorContent() {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();
        let html = this.editorElement.children[0].innerHTML;
        if (html === '<p><br></p>' || html === '<div><br><div>') {
            html = '';
        }
        if (this.format === 'html') {
            return html;
        }
        else if (this.format === 'text') {
            this.quillEditor.getText();
        }
        else if (this.format === 'json') {
            try {
                return JSON.stringify(content);
            }
            catch (e) {
                return text;
            }
        }
        else {
            return text;
        }
    }
    componentDidLoad() {
        let modules = this.modules ? JSON.parse(this.modules) : this.defaultModules;
        const toolbarElem = this.wrapperElement.querySelector('[slot="quill-toolbar"]');
        if (toolbarElem) {
            modules['toolbar'] = toolbarElem;
        }
        this.quillEditor = new Quill(this.editorElement, {
            debug: this.debug,
            modules: modules,
            placeholder: this.placeholder,
            readOnly: this.readOnly || false,
            theme: this.theme || 'snow',
            formats: this.formats,
            bounds: this.bounds ? (this.bounds === 'self' ? this.editorElement : this.bounds) : document.body,
            strict: this.strict,
            scrollingContainer: this.scrollingContainer
        });
        if (this.styles) {
            const styles = JSON.parse(this.styles);
            Object.keys(styles).forEach((key) => {
                this.editorElement.style.setProperty(key, styles[key]);
            });
        }
        if (this.content) {
            this.setEditorContent(this.content);
            this.quillEditor['history'].clear();
        }
        this.selectionChangeEvent = this.quillEditor.on('selection-change', (range, oldRange, source) => {
            if (range === null) {
                this.onBlur.emit({
                    editor: this.quillEditor,
                    source
                });
            }
            else if (oldRange === null) {
                this.onFocus.emit({
                    editor: this.quillEditor,
                    source
                });
            }
            this.onSelectionChanged.emit({
                editor: this.quillEditor,
                range,
                oldRange,
                source
            });
        });
        this.textChangeEvent = this.quillEditor.on('text-change', (delta, oldDelta, source) => {
            const text = this.quillEditor.getText();
            const content = this.quillEditor.getContents();
            let html = this.editorElement.querySelector('.ql-editor').innerHTML;
            if (html === '<p><br></p>' || html === '<div><br><div>') {
                html = null;
            }
            this.onContentChanged.emit({
                editor: this.quillEditor,
                content,
                delta,
                html,
                oldDelta,
                source,
                text
            });
        });
        this.onInitialised.emit(this.quillEditor);
    }
    componentDidUnload() {
        if (this.selectionChangeEvent) {
            this.selectionChangeEvent.removeListener('selection-change');
        }
        if (this.textChangeEvent) {
            this.textChangeEvent.removeListener('text-change');
        }
    }
    updateContent(newValue) {
        const editorContents = this.getEditorContent();
        if (['text', 'html', 'json'].indexOf(this.format) > -1 && newValue === editorContents) {
            return null;
        }
        else {
            let changed = false;
            try {
                const newContentString = JSON.stringify(newValue);
                changed = JSON.stringify(editorContents) !== newContentString;
            }
            catch (_a) {
                return null;
            }
            if (!changed) {
                return null;
            }
        }
        this.setEditorContent(newValue);
    }
    updateReadOnly(newValue, oldValue) {
        if (!this.quillEditor) {
            return;
        }
        if (newValue !== oldValue) {
            this.quillEditor.enable(!newValue);
        }
    }
    updatePlaceholder(newValue, oldValue) {
        if (!this.quillEditor) {
            return;
        }
        if (newValue !== oldValue) {
            this.quillEditor.root.dataset.placeholder = newValue;
        }
    }
    updateStyle(newValue, oldValue) {
        if (!this.editorElement) {
            return;
        }
        if (oldValue) {
            const old = JSON.parse(oldValue);
            Object.keys(old).forEach((key) => {
                this.editorElement.style.setProperty(key, '');
            });
        }
        if (newValue) {
            const value = JSON.parse(newValue);
            Object.keys(value).forEach((key) => {
                this.editorElement.style.setProperty(key, value[key]);
            });
        }
    }
    render() {
        const editor = this.preserveWhitespace ? h("pre", { "quill-element": true, ref: (el) => this.editorElement = el }) : h("div", { "quill-element": true, ref: (el) => this.editorElement = el });
        const elements = [h("slot", { name: "quill-toolbar" })];
        if (this.customToolbarPosition === 'bottom') {
            elements.unshift(editor);
        }
        else {
            elements.push(editor);
        }
        return (elements);
    }
    get wrapperElement() { return getElement(this); }
    static get watchers() { return {
        "content": ["updateContent"],
        "readOnly": ["updateReadOnly"],
        "placeholder": ["updatePlaceholder"],
        "styles": ["updateStyle"]
    }; }
}

class QuillViewHTMLComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.theme = 'snow';
        this.themeClass = 'ql-snow';
    }
    updateTheme(newValue) {
        this.themeClass = `ql-${newValue || 'snow'}`;
    }
    render() {
        const classes = `ql-container ${this.themeClass} quill-view-html`;
        return (h("div", { class: classes }, h("div", { class: "ql-editor", innerHTML: this.content })));
    }
    static get watchers() { return {
        "theme": ["updateTheme"]
    }; }
    static get style() { return ".ql-container.quill-view-html.sc-quill-view-html{border:0}"; }
}

export { QuillEditorComponent as quill_editor, QuillViewHTMLComponent as quill_view_html };
