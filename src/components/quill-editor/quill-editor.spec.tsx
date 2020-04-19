
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { QuillEditorComponent } from './quill-editor';

class Quill {
  options = {}

  constructor(el: HTMLElement, options: any) {
    el.appendChild(document.createElement('div'));
    this.options = options;
  }

  history = {
    clear: () => {}
  }
  clipboard = {
    convert: () => {}
  }
  setContents() {}
  setText() {}
  getContents() {}
  getText() {}
  on() {}
  off() {}
}

(global as any).Quill = Quill;

describe('QuillEditorComponent', () => {
  let page: SpecPage;
  let component: QuillEditorComponent;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [QuillEditorComponent],
      html: `<quill-editor styles='{\"height\": \"200px\"}' content="<p>Test</p>" modules='{\"toolbar\":true}'></quill-editor>`
    });

    component = await page.rootInstance;
  });

  it('renders and sets default snow theme class', () => {
    expect(page.root).toEqualHtml(`
      <quill-editor content="<p>Test</p>" modules="{&quot;toolbar&quot;:true}" styles="{&quot;height&quot;: &quot;200px&quot;}">
        <div quill-editor="" style="height: 200px;">
          <div></div>
        </div>
      </quill-editor>
    `);

    expect(component.theme).toEqual('snow');
    expect(component.content).toBe('<p>Test</p>');
    expect(component.format).toEqual('html');
    expect(component.debug).toEqual('warn');
    expect(component.styles).toEqual('{\"height\": \"200px\"}');
    expect(component.strict).toBe(true);
    expect(component.preserveWhitespace).toBe(false);
    expect(component.modules).toEqual('{\"toolbar\":true}');
    expect(component.quillEditor.options).toEqual(expect.objectContaining({
      debug: 'warn',
      modules: { toolbar: true },
      placeholder: 'Insert text here ...',
      readOnly: false,
      theme: 'snow',
      formats: undefined,
      strict: true,
      scrollingContainer: undefined
    }));
  });

  it('renders pre tag if preserve whitespace', async () => {
    page = await newSpecPage({
      components: [QuillEditorComponent],
      html: `<quill-editor content="<p>Test</p>" preserve-whitespace="true"></quill-editor>`
    });

    component = await page.rootInstance;

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <quill-editor content="<p>Test</p>" preserve-whitespace="true">
        <pre quill-editor=""><div></div></pre>
      </quill-editor>
    `);
  });

  it('renders styles changes', async () => {
    component.styles = '{\"height\": \"300px\"}';

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <quill-editor content="<p>Test</p>" modules="{&quot;toolbar&quot;:true}" styles="{&quot;height&quot;: &quot;200px&quot;}">
        <div quill-editor="" style="height: 300px;">
          <div></div>
        </div>
      </quill-editor>
    `);
  });

  describe('Formats', () => {
    describe('json', () => {
      it('renders json string', async () => {
        const spy = spyOn(component.quillEditor, 'setContents').and.callThrough();

        component.format = 'json';
        component.content = JSON.stringify([{
          insert: 'Hallo'
        }]);

        await page.waitForChanges();

        expect(spy).toHaveBeenCalledWith([{'insert': 'Hallo'}], 'api');
      });
    });

    describe('html', () => {
      it('renders html string', async () => {
        const spy = spyOn(component.quillEditor, 'setContents').and.callThrough();
        const clipboardSpy = spyOn(component.quillEditor.clipboard, 'convert').and.returnValue('<p>Hallo</p>');

        component.format = 'html';
        component.content = '<p>Hallo</p>';

        await page.waitForChanges();

        expect(clipboardSpy).toHaveBeenCalledWith('<p>Hallo</p>')
        expect(spy).toHaveBeenCalledWith('<p>Hallo</p>', 'api');
      });
    });

    describe('text', () => {
      it('renders plain text', async () => {
        const spy = spyOn(component.quillEditor, 'setText').and.callThrough();

        component.format = 'text';
        component.content = 'Hallo';

        await page.waitForChanges();

        expect(spy).toHaveBeenCalledWith('Hallo', 'api');
      });
    });
  });
});
