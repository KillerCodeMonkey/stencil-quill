
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { QuillViewComponent } from './quill-view';

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
}

(global as any).Quill = Quill;

describe('QuillViewComponent', () => {
  let page: SpecPage;
  let component: QuillViewComponent;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [QuillViewComponent],
      html: `<quill-view styles='{\"height\": \"200px\"}' content="<p>Test</p>" modules='{\"toolbar\":true}'></quill-view>`
    });

    component = await page.rootInstance;
  });

  it('renders and sets default snow theme class', () => {
    expect(page.root).toEqualHtml(`
      <quill-view content="<p>Test</p>" modules="{&quot;toolbar&quot;:true}" styles="{&quot;height&quot;: &quot;200px&quot;}">
        <div class="quill-view" quill-element="" style="height: 200px;">
          <div></div>
        </div>
      </quill-view>
    `);

    expect(component.theme).toEqual('snow');
    expect(component.content).toBe('<p>Test</p>');
    expect(component.format).toEqual('html');
    expect(component.debug).toEqual('warn');
    expect(component.styles).toEqual('{\"height\": \"200px\"}');
    expect(component.strict).toBe(true);
    expect(component.preserveWhitespace).toBe(false);
    expect(component.modules).toEqual('{\"toolbar\":true}');

    expect(component.quillEditor.options).toEqual({debug: 'warn', formats: undefined, modules: {toolbar: false}, readOnly: true, strict: true, theme: 'snow'});
  });

  it('renders pre tag if preserve whitespace', async () => {
    component.preserveWhitespace = true;

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <quill-view content="<p>Test</p>" modules="{&quot;toolbar&quot;:true}" styles="{&quot;height&quot;: &quot;200px&quot;}">
        <pre quill-element=""></pre>
      </quill-view>
    `);
  });

  it('renders styles changes', async () => {
    component.styles = '{\"height\": \"300px\"}';

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <quill-view content="<p>Test</p>" modules="{&quot;toolbar&quot;:true}" styles="{&quot;height&quot;: &quot;200px&quot;}">
        <div class="quill-view" quill-element="" style="height: 300px;">
          <div></div>
        </div>
      </quill-view>
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
