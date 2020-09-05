import { h, Component, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'quill-view-html',
  scoped: true,
  shadow: false,
  styleUrl: './quill-view-html.css',
})
export class QuillViewHTMLComponent {
  @Prop() content: string;
  @Prop() theme: string = 'snow';
  private themeClass: string = 'ql-snow';

  @Watch('theme')
  updateTheme(newValue: string): void {
    this.themeClass = `ql-${newValue || 'snow'}`;
  }

  render() {
    const classes = `ql-container ${this.themeClass} quill-view-html`;
    return (
      <div class={classes}>
        <div class="ql-editor" innerHTML={this.content}></div>
      </div>
    );
  }
}
