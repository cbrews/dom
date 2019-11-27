# el

Stupid simple element management.

## Installation

## Quick Usage

```
const element = new El('element_id')
```

## El() API Methods

### constructor
Creates a new element wrapper on a DOM element by ID or el

#### parameters
* `id`: `String`|`HTMLElement`|`Node` - DOM element ID or el.

#### example
```html
<!-- HTML -->
<div id="my-el"></div>

<!-- Javascript -->
<script>
const el = new El('my-el');
</script>
```

### El.exist()
Gets if the el exists

Returns:
`Boolean` - if the el exists

Example:
```javascript
const el = new El('non-existant');
el.exist(); // false;
```

### El.getEl()
Gets the internal DOM element.

Returns:
`HTMLElement` - internal el

Example:
```javascript
const el = new El('my-el');
el.getEl(); // <div id="my-el"></div>
```

### El.html()
Gets the .innerHTML value of the DOM element.

Returns:
`String` - .innerHTML of the DOM element

Example:
```javascript
const el = new El('my-el');
const innerHTML = el.html() // "some inner html"
```

### El.html(val)
Sets the .innerHTML of the DOM element.

Parameters:
* `val`: `String` - String value to set the innerHTML to.  Unsafe.

Returns: 
`String` - .innerHTML of the DOM element

Example:
```javascript
const el = new El('my-el');
el.html('my string');
```

### El.value()
Gets the .value of the DOM element.

Returns:
`String` - .value of the DOM element

Example:
```javascript
const el = new El('my-el');
const value = el.value();
```

### El.value(val)
Sets the .value of the DOM element.

Parameters:
* `val`: `String` - .value to set

Example:
```javascript
const el = new El('my-el');
el.value('some-value');
```

### El.on(name, fn)
Attaches a function onto the corresponding event on the element.  Valid names:
* `blur`
* `change`
* `focus`
* `contextmenu`
* `input`
* `select`
* `submit`
* `keydown`
* `keyup`
* `keypress`
* `click`
* `mousedown`
* `mouseup`
... etc

Reference: https://www.w3schools.com/tags/ref_eventattributes.asp

Parameters:
* `name`: `String`|`Array<String>` - event name (or array of event names)
* `fn`: `Function <e: Event, el: El>` - event function with this element wrapped

Example:
```javascript
const el = new El('my-el');
el.on('click', function(e, el){
  el.html('clicked');
})
```
