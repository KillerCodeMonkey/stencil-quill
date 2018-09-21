import { Component, ComponentDidLoad, ComponentDidUnload, Event, EventEmitter, Prop } from '@stencil/core';

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

  @Prop() content: string;

  quillEditor: any;
  editorElement: HTMLDivElement

  selectionChangeEvent: any
  textChangeEvent: any

  componentDidLoad() {
    this.quillEditor = new Quill(this.editorElement, {
      modules: {
        toolbar: true
      },
      theme: 'snow'
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

  render() {
    return ([
      <slot name="quill-toolbar" />,
      <div quill-editor-element ref={(el: HTMLDivElement) => this.editorElement = el}></div>
    ]);
  }
}
