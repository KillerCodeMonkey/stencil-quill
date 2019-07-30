import { r as registerInstance, h, g as getElement } from './chunk-28994abd.js';
var QuillViewComponent = /** @class */ (function () {
    function QuillViewComponent(hostRef) {
        registerInstance(this, hostRef);
        this.format = 'html';
        this.debug = 'warn';
        this.strict = true;
        this.styles = '{}';
        this.preserveWhitespace = false;
    }
    QuillViewComponent.prototype.setEditorContent = function (value) {
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
    QuillViewComponent.prototype.getEditorContent = function () {
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
            var styles_1 = JSON.parse(this.styles);
            Object.keys(styles_1).forEach(function (key) {
                _this.editorElement.style.setProperty(key, styles_1[key]);
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
            var value_1 = JSON.parse(newValue);
            Object.keys(value_1).forEach(function (key) {
                _this.editorElement.style.setProperty(key, value_1[key]);
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
    Object.defineProperty(QuillViewComponent, "style", {
        get: function () { return ".ql-container.quill-view.sc-quill-view{border:0}"; },
        enumerable: true,
        configurable: true
    });
    return QuillViewComponent;
}());
export { QuillViewComponent as quill_view };
