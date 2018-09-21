import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'quill-component',
  shadow: true
})
export class QuillComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
