import { TestWindow } from '@stencil/core/testing';
import { QuillComponent } from './quill';

describe('quill', () => {
  it('should build', () => {
    expect(new QuillComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLQuillComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [QuillComponent],
        html: '<quill-component></quill-component>'
      });
    });
  });
});
