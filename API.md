## Classes

<dl>
<dt><a href="#El">El</a></dt>
<dd></dd>
<dt><a href="#Form">Form</a> ⇐ <code><a href="#El">El</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#EventCallbackFunction">EventCallbackFunction</a> : <code>function</code></dt>
<dd></dd>
</dl>

<a name="El"></a>

## El
**Kind**: global class  

* [El](#El)
    * [new El(id)](#new_El_new)
    * [.getEl()](#El+getEl) ⇒ <code>HTMLElement</code>
    * [.exist()](#El+exist) ⇒ <code>Boolean</code>
    * [.html()](#El+html) ⇒ <code>String</code>
    * [.html(val)](#El+html) ⇒ <code>String</code>
    * [.value()](#El+value) ⇒ <code>String</code>
    * [.value(val)](#El+value) ⇒ <code>String</code>
    * [.on(name, fn)](#El+on)

<a name="new_El_new"></a>

### new El(id)
Creates a new element wrapper on a DOM element by ID or el


| Param | Type |
| --- | --- |
| id | <code>String</code> \| <code>HTMLElement</code> \| <code>Node</code> | 

**Example**  
```js
// Sample HTML
// <div id="my-el"></div>
const el = new El('my-el');
```
<a name="El+getEl"></a>

### el.getEl() ⇒ <code>HTMLElement</code>
Gets the internal DOM element.

**Kind**: instance method of [<code>El</code>](#El)  
**Returns**: <code>HTMLElement</code> - internal el.  
**Example**  
```js
el.getEl(); // <div id="my-el"></div>
```
<a name="El+exist"></a>

### el.exist() ⇒ <code>Boolean</code>
Gets if the el exists in the DOM

**Kind**: instance method of [<code>El</code>](#El)  
**Returns**: <code>Boolean</code> - true or false if the internal el exists.  
**Example**  
```js
el.exist(); // true
```
<a name="El+html"></a>

### el.html() ⇒ <code>String</code>
Gets the .innerHTML value of the DOM element.
Typically used for div & span-like elements.

**Kind**: instance method of [<code>El</code>](#El)  
**Returns**: <code>String</code> - html value  
**Example**  
```js
const val = el.html(); // "test-input"
```
<a name="El+html"></a>

### el.html(val) ⇒ <code>String</code>
Sets the .innerHTML value of the DOM element.
Typically used for div & span-like elements.

**Kind**: instance method of [<code>El</code>](#El)  
**Returns**: <code>String</code> - html value  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> | Value to set the .innerHTML of the DOM element |

**Example**  
```js
el.html('test-input');
const val = el.html(); // "test-input"
```
<a name="El+value"></a>

### el.value() ⇒ <code>String</code>
Gets the .value of the DOM element.
Typically used for input-like elements.

**Kind**: instance method of [<code>El</code>](#El)  
**Returns**: <code>String</code> - Value set on the DOM element  
**Example**  
```js
const innerHTML = el.html() // "some inner html"
```
<a name="El+value"></a>

### el.value(val) ⇒ <code>String</code>
Sets the .value of the DOM element.
Typically used for input-like elements.

**Kind**: instance method of [<code>El</code>](#El)  
**Returns**: <code>String</code> - Value set on the DOM element  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> | Value to set onto the DOM element |

**Example**  
```js
el.html("some inner html");
const innerHTML = el.html() // "some inner html"
```
<a name="El+on"></a>

### el.on(name, fn)
Attaches an event handler onto the DOM element based on the name.

Valid names:
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

You can pass multiple names to attach the same event handler to multiple events.

**Kind**: instance method of [<code>El</code>](#El)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> \| <code>Array.&lt;String&gt;</code> | event name (or array of event names) |
| fn | [<code>EventCallbackFunction</code>](#EventCallbackFunction) | Function parameters: (e: Event, el: El) event function with this element wrapped |

**Example**  
```js
el.on('click', function(e, el){
 el.html('clicked');
});
```
<a name="Form"></a>

## Form ⇐ [<code>El</code>](#El)
**Kind**: global class  
**Extends**: [<code>El</code>](#El)  

* [Form](#Form) ⇐ [<code>El</code>](#El)
    * [.getField(name)](#Form+getField) ⇒ [<code>El</code>](#El)
    * [.getEl()](#El+getEl) ⇒ <code>HTMLElement</code>
    * [.exist()](#El+exist) ⇒ <code>Boolean</code>
    * [.html()](#El+html) ⇒ <code>String</code>
    * [.value()](#El+value) ⇒ <code>String</code>
    * [.on(name, fn)](#El+on)

<a name="Form+getField"></a>

### form.getField(name) ⇒ [<code>El</code>](#El)
Returns the form field wrapped in El wrapper

**Kind**: instance method of [<code>Form</code>](#Form)  
**Returns**: [<code>El</code>](#El) - Form field element accessible as an El  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Field name (based on input.name attribute) |

**Example**  
```js
// <form id="test">
//   <input name="inputfield" type="text" />
// </form>

const testForm = new Form('test');
const input = testForm.getField('inputfield');
input.value('mytext');
```
<a name="El+getEl"></a>

### form.getEl() ⇒ <code>HTMLElement</code>
Gets the internal DOM element.

**Kind**: instance method of [<code>Form</code>](#Form)  
**Returns**: <code>HTMLElement</code> - internal el.  
**Example**  
```js
el.getEl(); // <div id="my-el"></div>
```
<a name="El+exist"></a>

### form.exist() ⇒ <code>Boolean</code>
Gets if the el exists in the DOM

**Kind**: instance method of [<code>Form</code>](#Form)  
**Returns**: <code>Boolean</code> - true or false if the internal el exists.  
**Example**  
```js
el.exist(); // true
```
<a name="El+html"></a>

### form.html() ⇒ <code>String</code>
Gets the .innerHTML value of the DOM element.
Typically used for div & span-like elements.

**Kind**: instance method of [<code>Form</code>](#Form)  
**Overrides**: [<code>html</code>](#El+html)  
**Returns**: <code>String</code> - html value  
**Example**  
```js
const val = el.html(); // "test-input"
```
<a name="El+value"></a>

### form.value() ⇒ <code>String</code>
Gets the .value of the DOM element.
Typically used for input-like elements.

**Kind**: instance method of [<code>Form</code>](#Form)  
**Overrides**: [<code>value</code>](#El+value)  
**Returns**: <code>String</code> - Value set on the DOM element  
**Example**  
```js
const innerHTML = el.html() // "some inner html"
```
<a name="El+on"></a>

### form.on(name, fn)
Attaches an event handler onto the DOM element based on the name.

Valid names:
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

You can pass multiple names to attach the same event handler to multiple events.

**Kind**: instance method of [<code>Form</code>](#Form)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> \| <code>Array.&lt;String&gt;</code> | event name (or array of event names) |
| fn | [<code>EventCallbackFunction</code>](#EventCallbackFunction) | Function parameters: (e: Event, el: El) event function with this element wrapped |

**Example**  
```js
el.on('click', function(e, el){
 el.html('clicked');
});
```
<a name="EventCallbackFunction"></a>

## EventCallbackFunction : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | DOM event |
| el | [<code>El</code>](#El) | Element wrapped in the El class |

