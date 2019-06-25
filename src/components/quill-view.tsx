import { h, Component, ComponentDidLoad, Element, Prop, Watch } from '@stencil/core';

declare const Quill: any

@Component({
  tag: 'quill-view',
  scoped: true,
  shadow: false,
  styleUrl: './quill-view.css'
})
export class QuillViewComponent implements ComponentDidLoad {
  @Element() wrapperElement: HTMLElement;

  @Prop() format: 'html' | 'text' | 'json' = 'html';
  @Prop() content: string;
  @Prop() debug: string = 'warn';
  @Prop() formats: string[];
  @Prop() modules: string;
  @Prop() strict: boolean = true;
  @Prop() styles: string = '{}';
  @Prop() theme: string;
  @Prop() preserveWhitespace: boolean = false;

  quillEditor: any;
  editorElement: HTMLDivElement | HTMLPreElement;

  setEditorContent(value: any) {
    if (this.format === 'html') {
      const contents = this.quillEditor.clipboard.convert(value);
      this.quillEditor.setContents(contents, 'api');
    } else if (this.format === 'text') {
      this.quillEditor.setText(value);
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
    if (html === '<p><br></p>' || html === '<div><br><div>') {
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
    let modules: any = this.modules ? JSON.parse(this.modules) : {
      toolbar: false
    };

    if (modules.toolbar) {
      modules.toolbar = false
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
      const styles = JSON.parse(this.styles)
      Object.keys(styles).forEach((key: string) => {
        this.editorElement.style.setProperty(key, styles[key]);
      });
    }

    this.editorElement.classList.add('quill-view')

    if (this.content) {
      this.setEditorContent(this.content);

      this.quillEditor['history'].clear();
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

  @Watch('content')
  updateContent(newValue: any): void {
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

  render() {
    return (this.preserveWhitespace ? <pre quill-element ref={(el: HTMLPreElement) => this.editorElement = el}></pre> : <div quill-element ref={(el: HTMLDivElement) => this.editorElement = el}></div>);
  }
}
