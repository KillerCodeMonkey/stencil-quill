![Built With Stencil]

# stencil-quill

Stencil component for rich text editor Quill

<img src="https://cloud.githubusercontent.com/assets/2264672/20601381/a51753d4-b258-11e6-92c2-1d79efa5bede.png" width="200px">

## Installation
- `npm install stencil-quill`
- load `node_modules/stencil-quill/dist/quill-component.js` in your index.html or add it to your build process or project
- use `<quill-component></quill-component>` in your templates to add a default quill editor
- do not forget to install `quill` and include it + theme css in your buildprocess, module or `index.html`!


## Config
- content - the base content of the editor
- readOnly (true | false) if user can edit content
- formats - array of allowed formats/groupings
- format - model format - default: `html`, values: `html | object | text | json`, sets the model value type - html = html string, object = quill operation object, json = quill operation json, text = plain text
- modules - configure/disable quill modules, e.g toolbar or add custom toolbar via html element default is
```
{
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button

    ['link', 'image', 'video']                         // link and image, video
  ]
};
```
- theme - bubble/snow, default is `snow`
- style - set a style object, e.g. `[style]="{height: '250px'}"`
- placeholder - placeholder text, default is `Insert text here ...`
- bounds - boundary of the editor, default `document.body`, pass 'self' to attach the editor element
- strict - default: true, sets editor in strict mode
- scrollingContainer - default '.ql-editor', allows to set scrolling container
- possbility to create a custom toolbar via a custom slot `quill-toolbar`:
```
<quill-component content="test">
  <div slot="quill-toolbar">
    <span class="ql-formats">
      <select class="ql-font">
        <option value="aref">Aref Ruqaa</option>
        <option value="mirza">Mirza</option>
        <option selected>Roboto</option>
      </select>
      <select class="ql-align" title="Aligment">
        <option selected></option>
        <option value="center"></option>
        <option value="right"></option>
        <option value="justify"></option>
      </select>
      <select class="ql-align" title="Aligment2">
        <option selected></option>
        <option value="center"></option>
        <option value="right"></option>
        <option value="justify"></option>
      </select>
    </span>
    <span class="ql-formats">
      <div id="counter"></div>
    </span>
  </div>
</quill-component>
```

## Outputs
- onEditorCreated - editor instance
```
editor
```
- onContentChanged - text is updated
```
{
  editor: editorInstance,
  html: html,
  text: text,
  content: content,
  delta: delta,
  oldDelta: oldDelta,
  source: source
}
```
- onSelectionChanged - selection is updated
```
{
  editor: editorInstance,
  range: range,
  oldRange: oldRange,
  source: source
}
```

## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/stencil-quill@0.0.1/dist/quill-component.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install stencil-quill --save`
- Put a script tag similar to this `<script src='node_modules/stencil-quill/dist/quill-component.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install stencil-quill --save`
- Add an import to the npm packages `import quill-component;`
- Then you can use the element anywhere in your template, JSX, html etc
