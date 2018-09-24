import { Component, ComponentDidLoad, ComponentDidUnload, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';

import Quill from 'quill';

@Component({
  tag: 'quill-component',
  scoped: true,
  shadow: false
})
export class QuillComponent implements ComponentDidLoad, ComponentDidUnload {

  @Event() onInitialised: EventEmitter<any>;
  @Event() onContentChanged: EventEmitter<{
    editor: any
    delta: any
    oldDelta: any
    source: string
  }>;
  @Event() onSelectionChanged: EventEmitter<{
    editor: any
    range: any
    oldRange: any
    source: string
  }>;

  @Element() wrapperElement: HTMLElement;

  @Prop() bounds: HTMLElement | string;
  @Prop() content: string;
  @Prop() formats: string[];
  @Prop() modules: { [index: string]: Object };
  @Prop() placeholder: string = 'Insert text here ...';
  @Prop() readOnly: boolean;
  @Prop() scrollingContainer: HTMLElement | string;
  @Prop() strict: boolean = true;
  @Prop() styles: any = {};
  @Prop() theme: string;

  quillEditor: any;
  editorElement: HTMLDivElement;
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

  componentDidLoad() {
    let modules: any = this.modules || this.defaultModules;

    const toolbarElem = this.wrapperElement.querySelector(
      '[slot="quill-toolbar"]'
    );
    if (toolbarElem) {
      modules['toolbar'] = toolbarElem;
    }

    if (this.styles) {
      Object.keys(this.styles).forEach((key: string) => {
        this.editorElement.style[key] = this.styles[key];
      });
    }

    this.quillEditor = new Quill(this.editorElement, {
      modules: modules,
      placeholder: this.placeholder,
      readOnly: this.readOnly || false,
      theme: this.theme || 'snow',
      formats: this.formats,
      bounds: this.bounds ? (this.bounds === 'self' ? this.editorElement : this.bounds) : document.body,
      strict: this.strict,
      scrollingContainer: this.scrollingContainer
    });

    if (this.content) {
      this.quillEditor.setText(this.content, 'silent');
      this.quillEditor['history'].clear();
    }

    this.onInitialised.emit(this.quillEditor);

    this.selectionChangeEvent = this.quillEditor.on(
      'selection-change',
      (range: any, oldRange: any, source: string) => {
        this.onSelectionChanged.emit({
          editor: this.quillEditor,
          range: range,
          oldRange: oldRange,
          source: source
        });
      }
    );

    this.textChangeEvent = this.quillEditor.on(
      'text-change',
      (delta: any, oldDelta: any, source: string) => {
        this.onContentChanged.emit({
          editor: this.quillEditor,
          delta,
          oldDelta,
          source
        });
      }
    );
  }

  componentDidUnload() {
    if (this.selectionChangeEvent) {
      this.selectionChangeEvent.removeListener('selection-change');
    }
    if (this.textChangeEvent) {
      this.textChangeEvent.removeListener('text-change');
    }
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

  render() {
    return ([
      <slot name="quill-toolbar" />,
      <div quill-element ref={(el: HTMLDivElement) => this.editorElement = el}></div>
    ]);
  }
}
