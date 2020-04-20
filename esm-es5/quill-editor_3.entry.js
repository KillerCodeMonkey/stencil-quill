import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-c3d09cfa.js';
var QuillEditorComponent = /** @class */ (function () {
    function QuillEditorComponent(hostRef) {
        registerInstance(this, hostRef);
        this.format = 'html';
        this.debug = 'warn';
        this.placeholder = 'Insert text here ...';
        this.strict = true;
        this.styles = '{}';
        this.theme = 'snow';
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
    QuillEditorComponent.prototype.setEditorContent = function (value) {
        if (this.format === 'html') {
            var contents = this.quillEditor.clipboard.convert(value);
            this.quillEditor.setContents(contents, 'api');
        }
        else if (this.format === 'text') {
            this.quillEditor.setText(value, 'api');
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
        if (html === '<p><br></p>' || html === '<div><br></div>') {
            html = '';
        }
        if (this.format === 'html') {
            return html;
        }
        else if (this.format === 'text') {
            return text;
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
        this.editorElement = this.preserveWhitespace ? document.createElement('pre') : document.createElement('div');
        this.editorElement.setAttribute('quill-editor', '');
        var modules = this.modules ? JSON.parse(this.modules) : this.defaultModules;
        var toolbarElem = this.wrapperElement.querySelector('[slot="quill-toolbar"]');
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
                if (html === '<p><br></p>' || html === '<div><br></div>') {
                    html = null;
                }
                _this.editorChange.emit({
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
                _this.editorChange.emit({
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
                _this.editorBlur.emit({
                    editor: _this.quillEditor,
                    source: source
                });
            }
            else if (oldRange === null) {
                _this.editorFocus.emit({
                    editor: _this.quillEditor,
                    source: source
                });
            }
            _this.editorSelectionChange.emit({
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
            if (html === '<p><br></p>' || html === '<div><br></div>') {
                html = null;
            }
            _this.editorContentChange.emit({
                editor: _this.quillEditor,
                content: content,
                delta: delta,
                html: html,
                oldDelta: oldDelta,
                source: source,
                text: text
            });
        });
        setTimeout(function () {
            _this.editorInit.emit(_this.quillEditor);
        });
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
        if (!this.quillEditor) {
            return;
        }
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
        h(Host, null, h("slot", { name: "quill-toolbar", "quill-toolbar": "" }));
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
var quillViewCss = ".ql-container.quill-view.sc-quill-view{border:0}";
var QuillViewComponent = /** @class */ (function () {
    function QuillViewComponent(hostRef) {
        registerInstance(this, hostRef);
        this.format = 'html';
        this.debug = 'warn';
        this.strict = true;
        this.styles = '{}';
        this.theme = 'snow';
        this.preserveWhitespace = false;
    }
    QuillViewComponent.prototype.setEditorContent = function (value) {
        if (this.format === 'html') {
            var contents = this.quillEditor.clipboard.convert(value);
            this.quillEditor.setContents(contents, 'api');
        }
        else if (this.format === 'text') {
            this.quillEditor.setText(value, 'api');
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
    QuillViewComponent.prototype.getEditorContent = function () {
        var text = this.quillEditor.getText();
        var content = this.quillEditor.getContents();
        var html = this.editorElement.children[0].innerHTML;
        if (html === '<p><br></p>' || html === '<div><br></div>') {
            html = '';
        }
        if (this.format === 'html') {
            return html;
        }
        else if (this.format === 'text') {
            return text;
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
    QuillViewComponent.prototype.componentDidLoad = function () {
        var _this = this;
        var modules = this.modules ? JSON.parse(this.modules) : {
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
            var styles_2 = JSON.parse(this.styles);
            Object.keys(styles_2).forEach(function (key) {
                _this.editorElement.style.setProperty(key, styles_2[key]);
            });
        }
        this.editorElement.classList.add('quill-view');
        if (this.content) {
            this.setEditorContent(this.content);
            this.quillEditor['history'].clear();
        }
    };
    QuillViewComponent.prototype.updateStyle = function (newValue, oldValue) {
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
            var value_2 = JSON.parse(newValue);
            Object.keys(value_2).forEach(function (key) {
                _this.editorElement.style.setProperty(key, value_2[key]);
            });
        }
    };
    QuillViewComponent.prototype.updateContent = function (newValue) {
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
    QuillViewComponent.prototype.render = function () {
        var _this = this;
        return (this.preserveWhitespace ? h("pre", { "quill-element": true, ref: function (el) { return _this.editorElement = el; } }) : h("div", { "quill-element": true, ref: function (el) { return _this.editorElement = el; } }));
    };
    Object.defineProperty(QuillViewComponent.prototype, "wrapperElement", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuillViewComponent, "watchers", {
        get: function () {
            return {
                "styles": ["updateStyle"],
                "content": ["updateContent"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return QuillViewComponent;
}());
QuillViewComponent.style = quillViewCss;
var quillViewHtmlCss = ".ql-container.quill-view-html.sc-quill-view-html{border:0}";
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
    return QuillViewHTMLComponent;
}());
QuillViewHTMLComponent.style = quillViewHtmlCss;
export { QuillEditorComponent as quill_editor, QuillViewComponent as quill_view, QuillViewHTMLComponent as quill_view_html };
