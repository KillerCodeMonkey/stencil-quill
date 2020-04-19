import { h, Component, ComponentDidLoad, ComponentDidUnload, Element, Event, EventEmitter, Prop, Watch, Host } from '@stencil/core';

declare const Quill: any

@Component({
  tag: 'quill-editor',
  scoped: true,
  shadow: false
})
export class QuillEditorComponent implements ComponentDidLoad, ComponentDidUnload {

  @Event() editorInit: EventEmitter<any>;
  @Event() editorChange: EventEmitter<{
    editor: any
    event: 'text-change',
    content: any
    text: string
    html: string
    delta: any
    oldDelta: any
    source: string
  } | {
    editor: any
    event: 'selection-change',
    range: any
    oldRange: any
    source: string
  }>
  @Event() editorContentChange: EventEmitter<{
    editor: any
    content: any
    text: string
    html: string
    delta: any
    oldDelta: any
    source: string
  }>;
  @Event() editorSelectionChange: EventEmitter<{
    editor: any
    range: any
    oldRange: any
    source: string
  }>;
  @Event() editorFocus: EventEmitter<{
    editor: any
    source: string
  }>;
  @Event() editorBlur: EventEmitter<{
    editor: any
    source: string
  }>;

  @Element() wrapperElement: HTMLElement;

  @Prop() format: 'html' | 'text' | 'json' = 'html';
  @Prop() bounds: HTMLElement | string;
  @Prop() content: string;
  @Prop() debug: string = 'warn';
  @Prop() formats: string[];
  @Prop() modules?: string;
  @Prop() placeholder: string = 'Insert text here ...';
  @Prop() readOnly: boolean;
  @Prop() scrollingContainer: HTMLElement | string;
  @Prop() strict: boolean = true;
  @Prop() styles: string = '{}';
  @Prop() theme: string = 'snow';
  @Prop() customToolbarPosition: 'top' | 'bottom' = 'top';
  @Prop() preserveWhitespace: boolean = false;

  quillEditor: any;
  editorElement: HTMLDivElement | HTMLPreElement;
  private defaultModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [
        { color: [].slice() },
        { background: [].slice() }
      ], // dropdown with defaults from theme
      [{ font: [].slice() }],
      [{ align: [].slice() }],

      ['clean'], // remove formatting button

      ['link', 'image', 'video'] // link and image, video
    ]
  }

  selectionChangeEvent: any;
  textChangeEvent: any;
  editorChangeEvent: any;

  setEditorContent(value: any) {
    if (this.format === 'html') {
      const contents = this.quillEditor.clipboard.convert(value);
      this.quillEditor.setContents(contents, 'api');
    } else if (this.format === 'text') {
      this.quillEditor.setText(value, 'api');
    } else if (this.format === 'json') {
      try {
        this.quillEditor.setContents(JSON.parse(value), 'api');
      } catch (e) {
        this.quillEditor.setText(value, 'api');
      }
    } else {
      this.quillEditor.setText(value, 'api');
    }
  }

  getEditorContent() {
    const text = this.quillEditor.getText();
    const content = this.quillEditor.getContents();

    let html: string | null = this.editorElement.children[0].innerHTML;
    if (html === '<p><br></p>' || html === '<div><br></div>') {
      html = '';
    }

    if (this.format === 'html') {
      return html;
    } else if (this.format === 'text') {
      this.quillEditor.getText();
    } else if (this.format === 'json') {
      try {
        return JSON.stringify(content);
      } catch (e) {
        return text;
      }
    } else {
      return text;
    }
  }

  componentDidLoad() {
    this.editorElement = this.preserveWhitespace ? document.createElement('pre') : document.createElement('div')
    this.editorElement.setAttribute('quill-editor', '')

    let modules: any = this.modules ? JSON.parse(this.modules) : this.defaultModules;

    const toolbarElem = this.wrapperElement.querySelector(
      '[slot="quill-toolbar"]'
    );
    if (toolbarElem) {
      modules['toolbar'] = toolbarElem;
      if (this.customToolbarPosition === 'bottom') {
        this.wrapperElement.prepend(this.editorElement)
      } else {
        this.wrapperElement.append(this.editorElement)
      }
    } else {
      this.wrapperElement.append(this.editorElement)
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
      const styles = JSON.parse(this.styles)
      Object.keys(styles).forEach((key: string) => {
        this.editorElement.style.setProperty(key, styles[key]);
      });
    }

    if (this.content) {
      this.setEditorContent(this.content);

      this.quillEditor['history'].clear();
    }

    this.editorChangeEvent = this.quillEditor.on(
      'editor-change',
      (event: 'text-change' | 'selection-change', current: any | Range | null, old: any | Range | null, source: string): void => {
        // only emit changes emitted by user interactions

        if (event === 'text-change') {
          const text = this.quillEditor.getText()
          const content = this.quillEditor.getContents()

          let html: string | null = this.editorElement.querySelector('.ql-editor')!.innerHTML
          if (html === '<p><br></p>' || html === '<div><br></div>') {
            html = null
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
          })
        } else {
          this.editorChange.emit({
            editor: this.quillEditor,
            event,
            oldRange: old,
            range: current,
            source
          })
        }
      }
    )

    this.selectionChangeEvent = this.quillEditor.on(
      'selection-change',
      (range: any, oldRange: any, source: string) => {
        if (range === null) {
          this.editorBlur.emit({
            editor: this.quillEditor,
            source
          })
        } else if (oldRange === null) {
          this.editorFocus.emit({
            editor: this.quillEditor,
            source
          })
        }

        this.editorSelectionChange.emit({
          editor: this.quillEditor,
          range,
          oldRange,
          source
        });
      }
    );

    this.textChangeEvent = this.quillEditor.on(
      'text-change',
      (delta: any, oldDelta: any, source: string) => {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();

        let html: string | null = this.editorElement.querySelector('.ql-editor').innerHTML;
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
      }
    );

    setTimeout(() => {
      this.editorInit.emit(this.quillEditor);
    })
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

  @Watch('content')
  updateContent(newValue: any): void {
    if (!this.quillEditor) {
      return
    }
    const editorContents = this.getEditorContent();

    if (['text', 'html', 'json'].indexOf(this.format) > -1 && newValue === editorContents) {
      return null
    } else {
      let changed = false
      try {
        const newContentString = JSON.stringify(newValue)
        changed = JSON.stringify(editorContents) !== newContentString;
      } catch {
        return null
      }

      if (!changed) {
        return null
      }
    }

    this.setEditorContent(newValue)
  }

  @Watch('readOnly')
  updateReadOnly(newValue: boolean, oldValue: boolean): void {
    if (!this.quillEditor) {
      return;
    }
    if (newValue !== oldValue) {
      this.quillEditor.enable(!newValue);
    }
  }

  @Watch('placeholder')
  updatePlaceholder(newValue: string, oldValue: string): void {
    if (!this.quillEditor) {
      return;
    }
    if (newValue !== oldValue) {
      this.quillEditor.root.dataset.placeholder = newValue;
    }
  }

  @Watch('styles')
  updateStyle(newValue: string, oldValue: string): void {
    if (!this.editorElement) {
      return;
    }

    if (oldValue) {
      const old = JSON.parse(oldValue)
      Object.keys(old).forEach((key: string) => {
        this.editorElement.style.setProperty(key, '');
      });
    }
    if (newValue) {
      const value = JSON.parse(newValue)
      Object.keys(value).forEach((key: string) => {
        this.editorElement.style.setProperty(key, value[key]);
      });
    }
  }

  render() {
    <Host>
      <slot name="quill-toolbar" quill-toolbar="" />
    </Host>
  }
}
