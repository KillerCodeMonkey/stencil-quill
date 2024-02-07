import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { QuillEditorComponent } from './quill-editor';

class Quill {
  options = {};
  editorElement;
  eventNames = [];
  callbacks = [];

  constructor(el: HTMLElement, options: any) {
    el.appendChild(document.createElement('div'));
    this.options = options;
    this.editorElement = el;
  }
  root = {
    dataset: {
      placeholder: '',
    },
  };

  history = {
    clear: () => {},
  };
  clipboard = {
    convert: () => {},
  };
  enable() {}
  setContents() {}
  setText() {}
  getContents() {}
  getText() {}
  on(eventName, callback) {
    this.eventNames.push(eventName);
    this.callbacks.push(callback);
    return {
      removeListener: () => {},
    };
  }
  off() {}
}

(global as any).Quill = Quill;

describe('QuillEditorComponent', () => {
  let page: SpecPage;
  let component: QuillEditorComponent;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [QuillEditorComponent],
      html: `<quill-editor styles='{\"height\": \"200px\"}' content="<p>Test</p>" modules='{\"toolbar\":true}'></quill-editor>`,
    });

    component = page.rootInstance;
  });

  afterEach(() => jest.restoreAllMocks())

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
    expect(component.styles).toEqual('{"height": "200px"}');
    expect(component.strict).toBe(true);
    expect(component.preserveWhitespace).toBe(false);
    expect(component.modules).toEqual('{"toolbar":true}');

    expect(component.quillEditor.options.modules).toEqual({ toolbar: true });
    expect(component.quillEditor.options.theme).toEqual('snow');
    expect(component.quillEditor.options.debug).toEqual('warn');
    expect(component.quillEditor.options.strict).toBe(true);
  });

  it('renders styles changes', async () => {
    component.styles = '{"height": "300px"}';

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
        const spy = jest.spyOn(component.quillEditor, 'setContents');

        component.format = 'json';
        component.content = JSON.stringify([
          {
            insert: 'Hallo',
          },
        ]);

        await page.waitForChanges();

        expect(spy).toHaveBeenCalledWith([{ insert: 'Hallo' }], 'api');
      });
    });

    describe('html', () => {
      it('renders html string', async () => {
        const spy = jest.spyOn(component.quillEditor, 'setContents');
        const clipboardSpy = jest.spyOn(component.quillEditor.clipboard, 'convert').mockReturnValue('<p>Hallo</p>');

        component.format = 'html';
        component.content = '<p>Hallo</p>';

        await page.waitForChanges();

        expect(clipboardSpy).toHaveBeenCalledWith('<p>Hallo</p>');
        expect(spy).toHaveBeenCalledWith('<p>Hallo</p>', 'api');
      });
    });

    describe('text', () => {
      it('renders plain text', async () => {
        const spy = jest.spyOn(component.quillEditor, 'setText');

        component.format = 'text';
        component.content = 'Hallo';

        await page.waitForChanges();

        expect(spy).toHaveBeenCalledWith('Hallo', 'api');
      });
    });
  });

  describe('#updateContent', () => {
    it('returns null if known format but no content change', () => {
      jest.spyOn(component, 'getEditorContent').mockReturnValue('');
      const setSpy = jest.spyOn(component, 'setEditorContent');

      expect(component.updateContent('')).toBe(null);
      expect(setSpy).not.toHaveBeenCalled();
    });

    it('returns null if JSON.stringify of new value failes', () => {
      const setSpy = jest.spyOn(component, 'setEditorContent');
      jest.spyOn(JSON, 'stringify').mockImplementation(() => {throw 'FAIL!'});

      expect(component.updateContent({ test: 1 })).toBe(null);
      expect(setSpy).not.toHaveBeenCalled();
    });

    it('returns null if JSON.stringify of new value is the same as the current', () => {
      const setSpy = jest.spyOn(component, 'setEditorContent');
      jest.spyOn(JSON, 'stringify').mockReturnValue('');

      expect(component.updateContent('asdf')).toBe(null);
      expect(setSpy).not.toHaveBeenCalled();
    });

    it('calls setContent if everything is fine', () => {
      const setSpy = jest.spyOn(component, 'setEditorContent');

      expect(component.updateContent('asdf')).toBe(undefined);
      expect(setSpy).toHaveBeenCalledWith('asdf');
    });

    it('returns null if no editor', () => {
      const setSpy = jest.spyOn(component, 'setEditorContent');
      component.quillEditor = null;

      expect(component.updateContent('asdf')).toBe(undefined);
      expect(setSpy).not.toHaveBeenCalled();
    });
  });

  describe('#updateStyles', () => {
    it('does nothing if not editorElement', () => {
      const spy = jest.spyOn(component.editorElement.style, 'setProperty');

      component.editorElement = null;
      component.updateStyle('', '');
      expect(spy).not.toHaveBeenCalled();
    });

    it('removes old styles', () => {
      const spy = jest.spyOn(component.editorElement.style, 'setProperty');

      component.updateStyle('', '{"height": "12px"}');
      expect(spy).toHaveBeenCalledWith('height', '');
    });

    it('adds new styles', () => {
      const spy = jest.spyOn(component.editorElement.style, 'setProperty');

      component.updateStyle('{"height": "12px"}', '');
      expect(spy).toHaveBeenCalledWith('height', '12px');
    });
  });

  describe('#updateReadOnly', () => {
    it('disables editor', () => {
      const spy = jest.spyOn(component.quillEditor, 'enable');

      component.updateReadOnly(false, true);
      expect(spy).toHaveBeenCalledWith(true);
    });

    it('enables editor', () => {
      const spy = jest.spyOn(component.quillEditor, 'enable');

      component.updateReadOnly(true, false);
      expect(spy).toHaveBeenCalledWith(false);
    });

    it('does nothing when no quillEditor', () => {
      component.quillEditor = null;

      expect(component.updateReadOnly(true, false)).toBe(undefined);
    });

    it('does nothing when value not changed', () => {
      const spy = jest.spyOn(component.quillEditor, 'enable');

      expect(component.updateReadOnly(false, false)).toBe(undefined);
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('#updatePlaceholder', () => {
    it('changes placeholder', () => {
      component.updatePlaceholder('new placeholder', 'old placeholder');
      expect(component.quillEditor.root.dataset.placeholder).toEqual('new placeholder');
    });

    it('does nothing when no quillEditor', () => {
      component.quillEditor = null;

      expect(component.updatePlaceholder('new placeholder', 'old placeholder')).toBe(undefined);
    });

    it('does nothing when value not changed', () => {
      expect(component.updatePlaceholder('old placeholder', 'old placeholder')).toBe(undefined);
      expect(component.quillEditor.root.dataset.placeholder).toEqual('');
    });
  });

  describe('#setEditorContent', () => {
    describe('format: html', () => {
      it('converts html and sets content', () => {
        jest.spyOn(component.quillEditor.clipboard, 'convert').mockReturnValue([{ insert: '1' }]);
        const spy = jest.spyOn(component.quillEditor, 'setContents');

        component.format = 'html';
        component.setEditorContent('');

        expect(spy).toHaveBeenCalledWith([{ insert: '1' }], 'api');
      });
    });

    describe('format: text', () => {
      it('sets text', () => {
        const spy = jest.spyOn(component.quillEditor, 'setText');

        component.format = 'text';
        component.setEditorContent('test');

        expect(spy).toHaveBeenCalledWith('test', 'api');
      });
    });

    describe('format: json', () => {
      it('sets json', () => {
        const spy = jest.spyOn(component.quillEditor, 'setContents');

        component.format = 'json';
        component.setEditorContent('{"insert":"1"}');

        expect(spy).toHaveBeenCalledWith({ insert: '1' }, 'api');
      });

      it('sets value as text, if json not parsable', () => {
        const spy = jest.spyOn(component.quillEditor, 'setText');

        component.format = 'json';
        component.setEditorContent('{"insert":');

        expect(spy).toHaveBeenCalledWith('{"insert":', 'api');
      });
    });

    describe('unkown format', () => {
      it('sets text', () => {
        const spy = jest.spyOn(component.quillEditor, 'setText');

        component.format = 'test' as any;
        component.setEditorContent('test');

        expect(spy).toHaveBeenCalledWith('test', 'api');
      });
    });
  });

  describe('#getEditorContent', () => {
    describe('format: html', () => {
      it('p with br or div with br returns empty string', () => {
        component.quillEditor.editorElement.children[0].innerHTML = '<div><br/></div>';
        component.format = 'html';

        expect(component.getEditorContent()).toEqual('');
      });

      it('returns html', () => {
        component.quillEditor.editorElement.children[0].innerHTML = '<div><p>asdf</p><br/></div>';
        component.format = 'html';

        expect(component.getEditorContent()).toEqual('<div><p>asdf</p><br></div>');
      });
    });

    describe('format: text', () => {
      it('returns text', () => {
        const spy = jest.spyOn(component.quillEditor, 'getText').mockReturnValue('test');

        component.format = 'text';

        expect(component.getEditorContent()).toEqual('test');
        expect(spy).toHaveBeenCalledWith();
      });
    });

    describe('format: json', () => {
      it('returns json', () => {
        const spy = jest.spyOn(component.quillEditor, 'getContents').mockReturnValue([{ insert: '1' }]);

        component.format = 'json';

        expect(component.getEditorContent()).toEqual(JSON.stringify([{ insert: '1' }]));
        expect(spy).toHaveBeenCalled();
      });

      it('returns value as text, if json not parsable', () => {
        const spy = jest.spyOn(component.quillEditor, 'getText').mockReturnValue('test');
        jest.spyOn(JSON, 'stringify').mockImplementation(() => {throw 'FAIL!'});

        component.format = 'json';

        expect(component.getEditorContent()).toEqual('test');
        expect(spy).toHaveBeenCalled();
      });
    });

    describe('unkown format', () => {
      it('returns text', () => {
        const spy = jest.spyOn(component.quillEditor, 'getText').mockReturnValue('test');

        component.format = 'test' as any;

        expect(component.getEditorContent()).toEqual('test');
        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('#componentDidLoad', () => {
    describe('modules', () => {
      it('default modules', () => {
        component.modules = undefined;
        component.componentDidLoad();

        expect(component.quillEditor.options.modules).toEqual({
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

            [{ color: [].slice() }, { background: [].slice() }], // dropdown with defaults from theme
            [{ font: [].slice() }],
            [{ align: [].slice() }],

            ['clean'], // remove formatting button

            ['link', 'image', 'video'], // link and image, video
          ],
        });
      });

      it('custom modules', () => {
        component.modules = `{
          "toolbar": true,
          "test": {}
        }`;
        component.componentDidLoad();

        expect(component.quillEditor.options.modules).toEqual({
          test: {},
          toolbar: true,
        });
      });
    });

    describe('preserve whitespaces', () => {
      it('renders pre tag instead of div', async () => {
        component.preserveWhitespace = true;

        component.componentDidLoad();

        expect(page.root).toEqualHtml(`
          <quill-editor content="<p>Test</p>" modules="{&quot;toolbar&quot;:true}" styles="{&quot;height&quot;: &quot;200px&quot;}">
            <div quill-editor="" style="height: 200px;">
              <div></div>
            </div>
            <pre quill-editor="" style="height: 200px;"><div></div></pre>
          </div>
        `);
      });
    });

    describe('custom toolbar', () => {
      it('renders toolbar', async () => {
        page = await newSpecPage({
          components: [QuillEditorComponent],
          html: `<quill-editor>
          <div slot="quill-toolbar">
            <span class="ql-formats">
              <select class="ql-font">
                <option value="aref">Aref Ruqaa</option>
                <option value="mirza">Mirza</option>
                <option selected>Roboto</option>
              </select>
            </span>
          </quill-editor>`,
        });

        component = page.rootInstance;

        expect(component.quillEditor.options.modules.toolbar).toEqualHtml(`<div slot="quill-toolbar">
          <span class="ql-formats">
            <select class="ql-font">
              <option value="aref">
                Aref Ruqaa
              </option>
              <option value="mirza">
                Mirza
              </option>
              <option selected="">
                Roboto
              </option>
            </select>
          </span>
        </div>`);
        expect(page.root).toEqualHtml(`
          <quill-editor>
            <div slot=\"quill-toolbar\">
              <span class=\"ql-formats\">
                <select class=\"ql-font\">
                  <option value=\"aref\">
                    Aref Ruqaa
                  </option>
                  <option value=\"mirza\">
                    Mirza
                  </option>
                  <option selected=\"\">
                    Roboto
                  </option>
                </select>
              </span>
            </div>
            <div quill-editor=\"\">
              <div></div>
            </div>
          </quill-editor>
        `);
      });

      it('with toolbar position bottom', async () => {
        page = await newSpecPage({
          components: [QuillEditorComponent],
          html: `<quill-editor custom-toolbar-position="bottom">
          <div slot="quill-toolbar">
            <span class="ql-formats">
              <select class="ql-font">
                <option value="aref">Aref Ruqaa</option>
                <option value="mirza">Mirza</option>
                <option selected>Roboto</option>
              </select>
            </span>
          </quill-editor>`,
        });

        component = page.rootInstance;

        expect(component.quillEditor.options.modules.toolbar).toEqualHtml(`<div slot="quill-toolbar">
          <span class="ql-formats">
            <select class="ql-font">
              <option value="aref">
                Aref Ruqaa
              </option>
              <option value="mirza">
                Mirza
              </option>
              <option selected="">
                Roboto
              </option>
            </select>
          </span>
        </div>`);
        expect(page.root).toEqualHtml(`
          <quill-editor custom-toolbar-position="bottom">
            <div quill-editor="">
              <div></div>
            </div>
            <div slot=\"quill-toolbar\">
              <span class=\"ql-formats\">
                <select class=\"ql-font\">
                  <option value=\"aref\">
                    Aref Ruqaa
                  </option>
                  <option value=\"mirza\">
                    Mirza
                  </option>
                  <option selected=\"\">
                    Roboto
                  </option>
                </select>
              </span>
            </div>
          </quill-editor>
        `);
      });
    });

    describe('theme', () => {
      it('defaults to "snow', () => {
        component.theme = undefined;
        component.componentDidLoad();

        expect(component.quillEditor.options.theme).toEqual('snow');
      });

      it('force toolbar false for custom modules', () => {
        component.theme = 'bubble';
        component.componentDidLoad();

        expect(component.quillEditor.options.theme).toEqual('bubble');
      });
    });

    describe('without styles and content', () => {
      it('does nothing with styles', () => {
        component.styles = undefined;
        const spy = jest.spyOn(component.editorElement.style, 'setProperty');

        component.componentDidLoad();

        expect(spy).not.toHaveBeenCalled();
      });

      it('does not set content if nothing there', () => {
        component.content = '';
        const spy = jest.spyOn(component, 'setEditorContent');

        component.componentDidLoad();

        expect(spy).not.toHaveBeenCalled();
      });
    });

    describe('bounds', () => {
      it('defaults to document.body', () => {
        component.componentDidLoad();

        expect(component.quillEditor.options.bounds).toBe(document.body);
      });

      it('defaults to document.body', () => {
        component.bounds = 'self';
        component.componentDidLoad();

        expect(component.quillEditor.options.bounds).toBe(component.editorElement);
      });

      it('defaults to document.body', () => {
        component.bounds = '.css-selector';
        component.componentDidLoad();

        expect(component.quillEditor.options.bounds).toEqual('.css-selector');
      });
    });

    it('emits init', async () => {
      const spy = jest.spyOn(component.editorInit, 'emit');
      jest.spyOn(global, 'setTimeout').mockImplementationOnce(cb => {
        cb();
        return 0 as any;
      });

      component.componentDidLoad();

      expect(spy.mock.calls[0][0].root).toEqual(expect.objectContaining({ dataset: { placeholder: '' } }));
    });

    describe('editorChangeEvent', () => {
      beforeEach(() => {
        component.componentDidLoad();
        component.editorElement.children[0].classList.add('ql-editor');
      });

      it('add listener', async () => {
        expect(component.editorChangeEvent).toBeDefined();
        expect(component.quillEditor.eventNames[0]).toEqual('editor-change');
      });

      it('invoke as text-change event', async () => {
        const emitSpy = jest.spyOn(component.editorChange, 'emit');
        jest.spyOn(component.quillEditor, 'getText').mockReturnValue('test');
        jest.spyOn(component.quillEditor, 'getContents').mockReturnValue([{ insert: 'test' }]);

        component.quillEditor.callbacks[0]('text-change', null, null, 'api');

        const eventObject = emitSpy.mock.calls[0][0] as {
          editor: any;
          event: "text-change";
          content: any;
          text: string;
          html: string;
          delta: any;
          oldDelta: any;
          source: string;
        };
        expect(eventObject.event).toEqual('text-change');
        expect(eventObject.text).toEqual('test');
        expect(eventObject.html).toEqual('');
        expect(eventObject.content).toEqual([{ insert: 'test' }]);
        expect(eventObject.oldDelta).toBe(null);
        expect(eventObject.delta).toBe(null);
        expect(eventObject.source).toEqual('api');
        expect(eventObject.editor.root).toEqual({ dataset: { placeholder: '' } });
      });

      it('invoke as text-change event with empty html content', async () => {
        const emitSpy = jest.spyOn(component.editorChange, 'emit');
        jest.spyOn(component.quillEditor, 'getText').mockReturnValue('test');
        jest.spyOn(component.quillEditor, 'getContents').mockReturnValue([{ insert: 'test' }]);
        component.editorElement.children[0].innerHTML = '<div><br></div>';

        component.quillEditor.callbacks[0]('text-change', null, null, 'api');

        const eventObject = emitSpy.mock.calls[0][0] as {
          editor: any;
          event: "text-change";
          content: any;
          text: string;
          html: string;
          delta: any;
          oldDelta: any;
          source: string;
        };
        expect(eventObject.html).toEqual(null);
      });

      it('invoke as selection-change event', async () => {
        const emitSpy = jest.spyOn(component.editorChange, 'emit');

        component.quillEditor.callbacks[0]('selection-change', null, null, 'api');

        const eventObject = emitSpy.mock.calls[0][0] as {
          editor: any;
          event: "selection-change";
          range: any;
          oldRange: any;
          source: string;
        };
        expect(eventObject.event).toEqual('selection-change');
        expect(eventObject.oldRange).toBe(null);
        expect(eventObject.range).toBe(null);
        expect(eventObject.source).toEqual('api');
        expect(eventObject.editor.root).toEqual({ dataset: { placeholder: '' } });
      });
    });

    describe('textChangeEvent', () => {
      beforeEach(() => {
        component.componentDidLoad();
        component.editorElement.children[0].classList.add('ql-editor');
      });

      it('add listener', async () => {
        expect(component.textChangeEvent).toBeDefined();
        expect(component.quillEditor.eventNames[2]).toEqual('text-change');
      });

      it('invoke as text-change event', async () => {
        const emitSpy = jest.spyOn(component.editorContentChange, 'emit');
        jest.spyOn(component.quillEditor, 'getText').mockReturnValue('test');
        jest.spyOn(component.quillEditor, 'getContents').mockReturnValue([{ insert: 'test' }]);

        component.quillEditor.callbacks[2](null, null, 'api');

        const eventObject = emitSpy.mock.calls[0][0];
        expect(eventObject.text).toEqual('test');
        expect(eventObject.html).toEqual('');
        expect(eventObject.content).toEqual([{ insert: 'test' }]);
        expect(eventObject.oldDelta).toBe(null);
        expect(eventObject.delta).toBe(null);
        expect(eventObject.source).toEqual('api');
        expect(eventObject.editor.root).toEqual({ dataset: { placeholder: '' } });
      });

      it('invoke as text-change event with empty html content', async () => {
        const emitSpy = jest.spyOn(component.editorContentChange, 'emit');
        jest.spyOn(component.quillEditor, 'getText').mockReturnValue('test');
        jest.spyOn(component.quillEditor, 'getContents').mockReturnValue([{ insert: 'test' }]);
        component.editorElement.children[0].innerHTML = '<div><br></div>';

        component.quillEditor.callbacks[2](null, null, 'api');

        const eventObject = emitSpy.mock.calls[0][0];
        expect(eventObject.html).toEqual(null);
      });
    });

    describe('selectionChangeEvent', () => {
      beforeEach(() => {
        component.componentDidLoad();
        component.editorElement.children[0].classList.add('ql-editor');
      });

      it('add listener', async () => {
        expect(component.selectionChangeEvent).toBeDefined();
        expect(component.quillEditor.eventNames[1]).toEqual('selection-change');
      });

      it('invoke as selection-change event', async () => {
        const emitSpy = jest.spyOn(component.editorSelectionChange, 'emit');

        component.quillEditor.callbacks[1](null, null, 'api');

        const eventObject = emitSpy.mock.calls[0][0];

        expect(eventObject.oldRange).toBe(null);
        expect(eventObject.range).toBe(null);
        expect(eventObject.source).toEqual('api');
        expect(eventObject.editor.root).toEqual({ dataset: { placeholder: '' } });
      });

      it('emits focus event when old range null', async () => {
        const emitSpy = jest.spyOn(component.editorFocus, 'emit');

        component.quillEditor.callbacks[1](2, null, 'api');

        const eventObject = emitSpy.mock.calls[0][0];
        expect(eventObject.source).toEqual('api');
        expect(eventObject.editor.root).toEqual({ dataset: { placeholder: '' } });
      });

      it('emits blur event when new range null', async () => {
        const emitSpy = jest.spyOn(component.editorBlur, 'emit');

        component.quillEditor.callbacks[1](null, 2, 'api');

        const eventObject = emitSpy.mock.calls[0][0];
        expect(eventObject.source).toEqual('api');
        expect(eventObject.editor.root).toEqual({ dataset: { placeholder: '' } });
      });

      it('emits neither blur nor focus event when new range and old range is defined', async () => {
        const emitSpy = jest.spyOn(component.editorBlur, 'emit');
        const emit2Spy = jest.spyOn(component.editorFocus, 'emit');

        component.quillEditor.callbacks[1](2, 2, 'api');

        expect(emitSpy).not.toHaveBeenCalled();
        expect(emit2Spy).not.toHaveBeenCalled();
      });
    });
  });

  describe('#disconnectedCallback', () => {
    it('removes event listeners', () => {
      const spySelection = jest.spyOn(component.selectionChangeEvent, 'removeListener');
      const spyText = jest.spyOn(component.textChangeEvent, 'removeListener');
      const spyEditor = jest.spyOn(component.editorChangeEvent, 'removeListener');

      component.disconnectedCallback();

      expect(spySelection).toHaveBeenCalledWith('selection-change');
      expect(spyText).toHaveBeenCalledWith('text-change');
      expect(spyEditor).toHaveBeenCalledWith('editor-change');
    });

    it('does nothing when there are no listeners event listeners', () => {
      component.selectionChangeEvent = null;
      component.textChangeEvent = null;
      component.editorChangeEvent = null;

      expect(component.disconnectedCallback()).toBe(undefined);
    });
  });
});
