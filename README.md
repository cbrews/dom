# el

Stupid simple element DOM management.

## Installation

```
npm install @cbrews/dom
```

## Quick Usage

Assuming you have the following HTML:

```html
<div id="elm"></div>
```

```javascript
const { El, Form } = require('@cbrews/dom');
const el = new El('elm');
el.html('Hello, World!');
```

Forms allow for some additional stuff

## API Docs

[API Documentation](API.md/)