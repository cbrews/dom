# el

Stupid simple element management.

## Installation

## Quick Usage

```
const element = new El('element_id')
```

## El() API Methods

### constructor
Creates a new element wrapper on a DOM element by ID

#### parameters
* `id`: `String` - DOM element ID.

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

#### returns
`Boolean` - if the el exists

#### example
```javascript
const el = new El('non-existant');
el.exist(); // false;
```

### El.html()
Gets the .innerHTML value of the DOM element.

#### returns
`String` - .innerHTML of the DOM element

#### example
```javascript
const el = new El('my-el');
const innerHTML = el.html() // "some inner html"
```

### El.html(val)
Sets the .innerHTML of the DOM element.

#### parameters
* `val`: `String` - String value to set the innerHTML to.  Unsafe.

#### returns
`String` - .innerHTML of the DOM element

#### example
```javascript
const el = new El('my-el');
el.html('my string');
```

### El.value()
Gets the .value of the DOM element.

#### returns
`String` - .value of the DOM element

#### example
```javascript
const el = new El('my-el');
const value = el.value();
```

### El.value(val)
Sets the .value of the DOM element.

#### parameters
* `val`: `String` - .value to set

#### example
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

#### parameters
* `name`: `String`|`Array<String>` - event name (or array of event names)
* `fn`: `Function <e: Event, el: El>` - event function with this element wrapped

#### example
```javascript
const el = new El('my-el');
el.on('click', function(e, el){
  el.html('clicked');
})
```
