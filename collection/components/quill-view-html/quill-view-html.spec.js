import { QuillViewHTMLComponent } from "./quill-view-html";
import { newSpecPage } from "@stencil/core/testing";
describe('QuillViewHTMLComponent', () => {
    let page;
    beforeEach(async () => {
        page = await newSpecPage({
            components: [QuillViewHTMLComponent],
        });
    });
    it('renders and sets default snow theme class', async () => {
        await page.setContent('<quill-view-html></quill-view-html>');
        expect(page.root).toEqualHtml(`
      <quill-view-html>
        <div class="ql-container ql-snow quill-view-html">
          <div class="ql-editor"></div>
        </div>
      </quill-view-html>
    `);
        expect(page.rootInstance.theme).toEqual('snow');
        expect(page.rootInstance.content).toBe(undefined);
    });
    it('renders initial content', async () => {
        await page.setContent('<quill-view-html content="<p>Hallo</p>"></quill-view-html>');
        expect(page.root).toEqualHtml(`
      <quill-view-html content="<p>Hallo</p>">
        <div class="ql-container ql-snow quill-view-html">
          <div class="ql-editor">
            <p>
              Hallo
            </p>
          </div>
        </div>
      </quill-view-html>
    `);
        expect(page.rootInstance.content).toEqual('<p>Hallo</p>');
    });
    it('renders content update', async () => {
        await page.setContent('<quill-view-html content="<p>Hallo</p>"></quill-view-html>');
        const quillView = page.body.querySelector('quill-view-html');
        quillView.content = '<p>test</p>';
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <quill-view-html content="<p>Hallo</p>">
        <div class="ql-container ql-snow quill-view-html">
          <div class="ql-editor">
            <p>
              test
            </p>
          </div>
        </div>
      </quill-view-html>
    `);
        expect(page.rootInstance.content).toBe('<p>test</p>');
    });
    it('renders theme update', async () => {
        await page.setContent('<quill-view-html content=""></quill-view-html>');
        page.rootInstance.theme = 'test';
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <quill-view-html content="">
        <div class="ql-container ql-test quill-view-html">
          <div class="ql-editor"></div>
        </div>
      </quill-view-html>
    `);
        page.rootInstance.theme = '';
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
      <quill-view-html content="">
        <div class="ql-container ql-snow quill-view-html">
          <div class="ql-editor"></div>
        </div>
      </quill-view-html>
    `);
    });
});
//# sourceMappingURL=quill-view-html.spec.js.map
