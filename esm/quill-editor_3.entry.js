import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-afe5d14d.js';

const QuillEditorComponent = class {
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
        this.editorInit = createEvent(this, "editorInit", 7);
        this.editorChange = createEvent(this, "editorChange", 7);
        this.editorContentChange = createEvent(this, "editorContentChange", 7);
        this.editorSelectionChange = createEvent(this, "editorSelectionChange", 7);
        this.editorFocus = createEvent(this, "editorFocus", 7);
        this.editorBlur = createEvent(this, "editorBlur", 7);
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
        if (html === '<p><br></p>' || html === '<div><br></div>') {
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
        this.editorElement = this.preserveWhitespace ? document.createElement('div') : document.createElement('p');
        this.editorElement.setAttribute('quill-editor', '');
        let modules = this.modules ? JSON.parse(this.modules) : this.defaultModules;
        const toolbarElem = this.wrapperElement.querySelector('[slot="quill-toolbar"]');
        if (toolbarElem) {
            modules['toolbar'] = toolbarElem;
            if (this.customToolbarPosition === 'bottom') {
                this.wrapperElement.prepend(this.editorElement);
            }
            else {
                this.wrapperElement.append(this.editorElement);
            }
        }
        else {
            this.wrapperElement.append(this.editorElement);
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
        this.editorChangeEvent = this.quillEditor.on('editor-change', (event, current, old, source) => {
            // only emit changes emitted by user interactions
            if (event === 'text-change') {
                const text = this.quillEditor.getText();
                const content = this.quillEditor.getContents();
                let html = this.editorElement.querySelector('.ql-editor').innerHTML;
                if (html === '<p><br></p>' || html === '<div><br></div>') {
                    html = null;
                }
                this.editorChange.emit({
                    content,
                    delta: current,
                    editor: this.quillEditor,
                    event,
                    html,
                    oldDelta: old,
                    source,
                    text
                });
            }
            else {
                this.editorChange.emit({
                    editor: this.quillEditor,
                    event,
                    oldRange: old,
                    range: current,
                    source
                });
            }
        });
        this.selectionChangeEvent = this.quillEditor.on('selection-change', (range, oldRange, source) => {
            if (range === null) {
                this.editorBlur.emit({
                    editor: this.quillEditor,
                    source
                });
            }
            else if (oldRange === null) {
                this.editorFocus.emit({
                    editor: this.quillEditor,
                    source
                });
            }
            this.editorSelectionChange.emit({
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
            if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
            }
            this.editorContentChange.emit({
                editor: this.quillEditor,
                content,
                delta,
                html,
                oldDelta,
                source,
                text
            });
        });
        setTimeout(() => {
            this.editorInit.emit(this.quillEditor);
        });
    }
    componentDidUnload() {
        if (this.selectionChangeEvent) {
            this.selectionChangeEvent.removeListener('selection-change');
        }
        if (this.textChangeEvent) {
            this.textChangeEvent.removeListener('text-change');
        }
        if (this.editorChangeEvent) {
            this.editorChangeEvent.removeListener('editor-change');
        }
    }
    updateContent(newValue) {
        if (!this.quillEditor) {
            return;
        }
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
        h(Host, null, h("slot", { name: "quill-toolbar", "quill-toolbar": "" }));
    }
    get wrapperElement() { return getElement(this); }
    static get watchers() { return {
        "content": ["updateContent"],
        "readOnly": ["updateReadOnly"],
        "placeholder": ["updatePlaceholder"],
        "styles": ["updateStyle"]
    }; }
};

const quillViewCss = ".ql-container.quill-view.sc-quill-view{border:0}";

const QuillViewComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.format = 'html';
        this.debug = 'warn';
        this.strict = true;
        this.styles = '{}';
        this.preserveWhitespace = false;
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
        if (html === '<p><br></p>' || html === '<div><br></div>') {
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
        let modules = this.modules ? JSON.parse(this.modules) : {
            toolbar: false
        };
        if (modules.toolbar) {
            modules.toolbar = false;
        }
        this.quillEditor = new Quill(this.editorElement, {
            debug: this.debug,
            modules: modules,
            readOnly: true,
            theme: this.theme || 'snow',
            formats: this.formats,
            strict: this.strict
        });
        if (this.styles) {
            const styles = JSON.parse(this.styles);
            Object.keys(styles).forEach((key) => {
                this.editorElement.style.setProperty(key, styles[key]);
            });
        }
        this.editorElement.classList.add('quill-view');
        if (this.content) {
            this.setEditorContent(this.content);
            this.quillEditor['history'].clear();
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
    render() {
        return (this.preserveWhitespace ? h("pre", { "quill-element": true, ref: (el) => this.editorElement = el }) : h("div", { "quill-element": true, ref: (el) => this.editorElement = el }));
    }
    get wrapperElement() { return getElement(this); }
    static get watchers() { return {
        "styles": ["updateStyle"],
        "content": ["updateContent"]
    }; }
};
QuillViewComponent.style = quillViewCss;

const quillViewHtmlCss = ".ql-container.quill-view-html.sc-quill-view-html{border:0}";

const QuillViewHTMLComponent = class {
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
};
QuillViewHTMLComponent.style = quillViewHtmlCss;

export { QuillEditorComponent as quill_editor, QuillViewComponent as quill_view, QuillViewHTMLComponent as quill_view_html };