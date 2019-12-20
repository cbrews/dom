# el

Stupid simple element DOM management, providing wrappers for:

* DOM elements: setting, getting html
* Input elements: setting, getting values
* Basic event handling for DOM elements
* Form field handling

## Installation

This isn't actually loaded into NPM right now so just use a github installation

```
npm install git+https://github.com/cbrews/dom.git
```

## Quick Usage

Provides wrappers for DOM elements for easy data access an event maniplation.

Assuming you have the following HTML:

```html
<div id="el-1">
  Some Text!
</div>

<input id="input-1" />
```

```js
const { El } = require('@cbrews/dom');

// Element creation
const el1 = new El('el-1');

console.log(el1.html()); // "Some Text!"
el1.html('Hello, World!'); // Updates element body

// Input element creation
const el2 = new El('el-2');

el2.value('Input Text'); // Sets input field value
el2.on('change', _ => {
  console.log(el2.value());
})
```

Forms allow for some additional handling and shortcuts:

```html
<form id="my-form">
  <input name="name" />
  <input type="submit" />
</form>
```

```js
const { Form } = require('@cbrews/dom');

const f1 = new Form('my-form');

// Handle submit and get fields
f1.submit(e => {
  e.preventDefault();
  const name = f1.getField('name');

  alert(`Hello, ${name}!`);
})
```

## API Docs

For full API details, please read the API specifications:

[API Documentation](docs/API.md)