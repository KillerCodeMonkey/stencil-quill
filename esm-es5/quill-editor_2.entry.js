import { r as registerInstance, c as createEvent, h, g as getElement } from './chunk-28994abd.js';
var QuillEditorComponent = /** @class */ (function () {
    function QuillEditorComponent(hostRef) {
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
        this.onEditorChanged = createEvent(this, "onEditorChanged", 7);
        this.onContentChanged = createEvent(this, "onContentChanged", 7);
        this.onSelectionChanged = createEvent(this, "onSelectionChanged", 7);
        this.onFocus = createEvent(this, "onFocus", 7);
        this.onBlur = createEvent(this, "onBlur", 7);
    }
    QuillEditorComponent.prototype.setEditorContent = function (value) {
        if (this.format === 'html') {
            var contents = this.quillEditor.clipboard.convert(value);
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
    };
    QuillEditorComponent.prototype.getEditorContent = function () {
        var text = this.quillEditor.getText();
        var content = this.quillEditor.getContents();
        var html = this.editorElement.children[0].innerHTML;
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
    };
    QuillEditorComponent.prototype.componentDidLoad = function () {
        var _this = this;
        var modules = this.modules ? JSON.parse(this.modules) : this.defaultModules;
        var toolbarElem = this.wrapperElement.querySelector('[slot="quill-toolbar"]');
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
            var styles_1 = JSON.parse(this.styles);
            Object.keys(styles_1).forEach(function (key) {
                _this.editorElement.style.setProperty(key, styles_1[key]);
            });
        }
        if (this.content) {
            this.setEditorContent(this.content);
            this.quillEditor['history'].clear();
        }
        this.editorChangeEvent = this.quillEditor.on('editor-change', function (event, current, old, source) {
            // only emit changes emitted by user interactions
            if (event === 'text-change') {
                var text = _this.quillEditor.getText();
                var content = _this.quillEditor.getContents();
                var html = _this.editorElement.querySelector('.ql-editor').innerHTML;
                if (html === '<p><br></p>' || html === '<div><br><div>') {
                    html = null;
                }
                _this.onEditorChanged.emit({
                    content: content,
                    delta: current,
                    editor: _this.quillEditor,
                    event: event,
                    html: html,
                    oldDelta: old,
                    source: source,
                    text: text
                });
            }
            else {
                _this.onEditorChanged.emit({
                    editor: _this.quillEditor,
                    event: event,
                    oldRange: old,
                    range: current,
                    source: source
                });
            }
        });
        this.selectionChangeEvent = this.quillEditor.on('selection-change', function (range, oldRange, source) {
            if (range === null) {
                _this.onBlur.emit({
                    editor: _this.quillEditor,
                    source: source
                });
            }
            else if (oldRange === null) {
                _this.onFocus.emit({
                    editor: _this.quillEditor,
                    source: source
                });
            }
            _this.onSelectionChanged.emit({
                editor: _this.quillEditor,
                range: range,
                oldRange: oldRange,
                source: source
            });
        });
        this.textChangeEvent = this.quillEditor.on('text-change', function (delta, oldDelta, source) {
            var text = _this.quillEditor.getText();
            var content = _this.quillEditor.getContents();
            var html = _this.editorElement.querySelector('.ql-editor').innerHTML;
            if (html === '<p><br></p>' || html === '<div><br><div>') {
                html = null;
            }
            _this.onContentChanged.emit({
                editor: _this.quillEditor,
                content: content,
                delta: delta,
                html: html,
                oldDelta: oldDelta,
                source: source,
                text: text
            });
        });
        this.onInitialised.emit(this.quillEditor);
    };
    QuillEditorComponent.prototype.componentDidUnload = function () {
        if (this.selectionChangeEvent) {
            this.selectionChangeEvent.removeListener('selection-change');
        }
        if (this.textChangeEvent) {
            this.textChangeEvent.removeListener('text-change');
        }
        if (this.editorChangeEvent) {
            this.editorChangeEvent.removeListener('editor-change');
        }
    };
    QuillEditorComponent.prototype.updateContent = function (newValue) {
        var editorContents = this.getEditorContent();
        if (['text', 'html', 'json'].indexOf(this.format) > -1 && newValue === editorContents) {
            return null;
        }
        else {
            var changed = false;
            try {
                var newContentString = JSON.stringify(newValue);
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
    };
    QuillEditorComponent.prototype.updateReadOnly = function (newValue, oldValue) {
        if (!this.quillEditor) {
            return;
        }
        if (newValue !== oldValue) {
            this.quillEditor.enable(!newValue);
        }
    };
    QuillEditorComponent.prototype.updatePlaceholder = function (newValue, oldValue) {
        if (!this.quillEditor) {
            return;
        }
        if (newValue !== oldValue) {
            this.quillEditor.root.dataset.placeholder = newValue;
        }
    };
    QuillEditorComponent.prototype.updateStyle = function (newValue, oldValue) {
        var _this = this;
        if (!this.editorElement) {
            return;
        }
        if (oldValue) {
            var old = JSON.parse(oldValue);
            Object.keys(old).forEach(function (key) {
                _this.editorElement.style.setProperty(key, '');
            });
        }
        if (newValue) {
            var value_1 = JSON.parse(newValue);
            Object.keys(value_1).forEach(function (key) {
                _this.editorElement.style.setProperty(key, value_1[key]);
            });
        }
    };
    QuillEditorComponent.prototype.render = function () {
        var _this = this;
        var editor = this.preserveWhitespace ? h("pre", { "quill-element": true, ref: function (el) { return _this.editorElement = el; } }) : h("div", { "quill-element": true, ref: function (el) { return _this.editorElement = el; } });
        var elements = [h("slot", { name: "quill-toolbar" })];
        if (this.customToolbarPosition === 'bottom') {
            elements.unshift(editor);
        }
        else {
            elements.push(editor);
        }
        return (elements);
    };
    Object.defineProperty(QuillEditorComponent.prototype, "wrapperElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuillEditorComponent, "watchers", {
        get: function () {
            return {
                "content": ["updateContent"],
                "readOnly": ["updateReadOnly"],
                "placeholder": ["updatePlaceholder"],
                "styles": ["updateStyle"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return QuillEditorComponent;
}());
var QuillViewHTMLComponent = /** @class */ (function () {
    function QuillViewHTMLComponent(hostRef) {
        registerInstance(this, hostRef);
        this.theme = 'snow';
        this.themeClass = 'ql-snow';
    }
    QuillViewHTMLComponent.prototype.updateTheme = function (newValue) {
        this.themeClass = "ql-" + (newValue || 'snow');
    };
    QuillViewHTMLComponent.prototype.render = function () {
        var classes = "ql-container " + this.themeClass + " quill-view-html";
        return (h("div", { class: classes }, h("div", { class: "ql-editor", innerHTML: this.content })));
    };
    Object.defineProperty(QuillViewHTMLComponent, "watchers", {
        get: function () {
            return {
                "theme": ["updateTheme"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuillViewHTMLComponent, "style", {
        get: function () { return ".ql-container.quill-view-html.sc-quill-view-html{border:0}"; },
        enumerable: true,
        configurable: true
    });
    return QuillViewHTMLComponent;
}());
export { QuillEditorComponent as quill_editor, QuillViewHTMLComponent as quill_view_html };
