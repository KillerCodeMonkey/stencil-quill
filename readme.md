# stencil-quill [![Build Status](https://github.com/KillerCodeMonkey/stencil-quill/workflows/CI/badge.svg?branch=master)](https://github.com/KillerCodeMonkey/stencil-quill/actions/)

Native web components for the [Quill Rich Text Editor](https://quilljs.com/)

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

## Donate/Support

If you like my work, feel free to support it. Donations to the project are always welcomed :)

PayPal: [PayPal.Me/bengtler](https://paypal.me/bengtler)

<a href="https://www.buymeacoffee.com/bengtler" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

BTC Wallet Address:
`3QVyr2tpRLBCw1kBQ59sTDraV6DTswq8Li`

ETH Wallet Address:
`0x394d44f3b6e3a4f7b4d44991e7654b0cab4af68f`

LTC Wallet Address:
`MFif769WSZ1g7ReAzzDE7TJVqtkFpmoTyT`

## Examples

- [Live Demo](https://killercodemonkey.github.io/stencil-quill)

## Installation

- `npm install stencil-quill`
- load `node_modules/stencil-quill/dist/quill-components.js` in your index.html or add it to your build process or project
- do not forget to install `quill` and include it + theme css in your buildprocess, module or `index.html`! (the component is using the global Quill object)

## QuillEditor component

### HTML-Tag

```HTML
<quill-editor content="" format="html" theme="snow"></quill-editor>
```

### Config

- [Check the component readme](https://github.com/KillerCodeMonkey/stencil-quill/tree/master/src/components/quill-editor)
- content - the base content of the editor passed as string or JSON string
- readOnly (true | false) if user can edit content
- formats - array of allowed formats/groupings
- format - model format - default: `html`, values: `html | text | json`, sets the model value type - html = html string, json = quill operations as json string, text = plain text
- modules - configure/disable quill modules, passed as JSON-string!, e.g toolbar or add custom toolbar via html element default is

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
- styles - set a styles object, e.g. `styles="{height: '250px'}"`
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

- customToolbarPosition - if you are working with a custom toolbar you can switch the position :). - default: `top`, possible values `top`, `bottom`
- debug - set log level `warn`, `error`, `log` or `false` to deactivate logging, default: `warn`
- preserveWhitespace - default: false - possbility to use a pre-tag instead of a div-tag for the contenteditable area to preserve duplicated whitespaces | caution if used with syntax plugin [Related issue](https://github.com/quilljs/quill/issues/1751)

[Full Quill Toolbar HTML](https://github.com/quilljs/quill/blob/f75ff2973f068c3db44f949915eb8a74faf162a8/docs/_includes/full-toolbar.html)

### Events

- editorInit - editor instance

```
editor
```

- editorContentChange - text is updated by 'user'

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

- editorSelectionChange - selection is updated, also triggered for onBlur and onFocus, because the selection changed

```
{
  editor: editorInstance,
  range: range,
  oldRange: oldRange,
  source: source
}
```

- editorChange - text or selection is updated - independent of the source

```
{
  editor: editorInstance, // Quill
  event: 'text-change' // event type
  html: html, // html string
  text: text, // plain text string
  content: content, // Content - operatins representation
  delta: delta, // Delta
  oldDelta: oldDelta, // Delta
  source: source // ('user', 'api', 'silent' , undefined)
}
```

or

```
{
  editor: editorInstance, // Quill
  event: 'selection-change' // event type
  range: range, // Range
  oldRange: oldRange, // Range
  source: source // ('user', 'api', 'silent' , undefined)
}
```

- editorFocus - editor is focused

```
{
  editor: editorInstance, // Quill
  source: source // ('user', 'api', 'silent' , undefined)
}
```

- editorBlur - editor is blured

```
{
  editor: editorInstance, // Quill
  source: source // ('user', 'api', 'silent' , undefined)
}
```

## QuillView component

It renders a readOnly quilljs editor without a border and toolbar. Does not provide any Events, but has similar properties.

### HTML-Tag

```HTML
<quill-view content="" format="html" theme="snow"></quill-view>
```

### Config

- [Check the component readme](https://github.com/KillerCodeMonkey/stencil-quill/tree/master/src/components/quill-view)
- content - the base content of the editor passed as string or JSON string
- formats - array of allowed formats/groupings
- format - model format - default: `html`, values: `html | text | json`, sets the model value type - html = html string, json = quill operations as json string, text = plain text
- modules - configure/disable quill modules, passed as JSON-string! - keep in mind toolbar will be set to false anyways
- theme - bubble/snow, default is `snow`
- styles - set a styles object, e.g. `styles="{height: '250px'}"`
- strict - default: true, sets editor in strict mode
- debug - set log level `warn`, `error`, `log` or `false` to deactivate logging, default: `warn`
- preserveWhitespace - default: false - possbility to use a pre-tag instead of a div-tag for the contenteditable area to preserve duplicated whitespaces | caution if used with syntax plugin [Related issue](https://github.com/quilljs/quill/issues/1751)

## QuillViewHTML component

It renders an quilljs html string as you would expect it without createing a quilljs instance.

### HTML-Tag

```HTML
<quill-view-html content="" theme="snow"></quill-view-html>
```

### Config

- [Check the component readme](https://github.com/KillerCodeMonkey/stencil-quill/tree/master/src/components/quill-view-html)
- content - the base content of the editor passed as string or JSON string
- theme - bubble/snow, default is `snow`

## Using the components

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/stencil-quill@latest/dist/quill-components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install stencil-quill --save`
- Put a script tag similar to this `<script src='node_modules/stencil-quill/dist/quill-components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app

- Run `npm install stencil-quill --save`
- Add an import to the npm packages `import quill-components;`
- Then you can use the element anywhere in your template, JSX, html etc
