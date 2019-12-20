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
<dd><p>Wrapped callback function with the El object passed for event handling</p>
</dd>
</dl>

<a name="El"></a>

## El
**Kind**: global class  

* [El](#El)
    * [new El(id)](#new_El_new)
    * [.getEl()](#El+getEl) ⇒ <code>HTMLElement</code>
    * [.exist()](#El+exist) ⇒ <code>Boolean</code>
    * [.html(val)](#El+html) ⇒ <code>String</code>
    * [.value(val)](#El+value) ⇒ <code>String</code>
    * [.on(eventName, callbackFn)](#El+on)

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

### el.html(val) ⇒ <code>String</code>
Gets or sets the .innerHTML value of the DOM element.
Typically used for div & span-like elements.

If val is excluded, this will retrieve the html only.

**Kind**: instance method of [<code>El</code>](#El)  
**Returns**: <code>String</code> - html value  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> \| <code>undefined</code> | Value to set the .innerHTML of the DOM element |

**Example**  
```js
el.html('test-input'); // sets innerHTML
const val = el.html(); // retrieves innerHTML
```
<a name="El+value"></a>

### el.value(val) ⇒ <code>String</code>
Gets or sets the .value of the DOM element.
Typically used for input-like elements.

If val is excluded, will retrieve the value only.

**Kind**: instance method of [<code>El</code>](#El)  
**Returns**: <code>String</code> - Value set on the DOM element  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> \| <code>undefined</code> | Value to set onto the DOM element |

**Example**  
```js
el.value("some inner html"); // sets value
const innerHTML = el.value() // gets value
```
<a name="El+on"></a>

### el.on(eventName, callbackFn)
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
| eventName | <code>String</code> \| <code>Array.&lt;String&gt;</code> | event name (or array of event names) |
| callbackFn | [<code>EventCallbackFunction</code>](#EventCallbackFunction) | callback function for this DOM event |

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
    * [.submit(callbackFn)](#Form+submit)
    * [.getEl()](#El+getEl) ⇒ <code>HTMLElement</code>
    * [.exist()](#El+exist) ⇒ <code>Boolean</code>
    * [.html(val)](#El+html) ⇒ <code>String</code>
    * [.value(val)](#El+value) ⇒ <code>String</code>
    * [.on(eventName, callbackFn)](#El+on)

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
//   <input name="inputfield" />
// </form>

const testForm = new Form('test');
testForm.getField('inputfield').value('my test value');
```
<a name="Form+submit"></a>

### form.submit(callbackFn)
Special handler action for the submit action on a form.

**Kind**: instance method of [<code>Form</code>](#Form)  

| Param | Type | Description |
| --- | --- | --- |
| callbackFn | [<code>EventCallbackFunction</code>](#EventCallbackFunction) | callback function for this DOM event |

**Example**  
```js
// <form id="test">
//   <input name="inputfield" />
// </form>

const form = new Form('test');
form.submit(function(e, f){
  e.preventDefault();
  const value = f.getField('inputfield').value();
  console.log(value);
})
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

### form.html(val) ⇒ <code>String</code>
Gets or sets the .innerHTML value of the DOM element.
Typically used for div & span-like elements.

If val is excluded, this will retrieve the html only.

**Kind**: instance method of [<code>Form</code>](#Form)  
**Returns**: <code>String</code> - html value  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> \| <code>undefined</code> | Value to set the .innerHTML of the DOM element |

**Example**  
```js
el.html('test-input'); // sets innerHTML
const val = el.html(); // retrieves innerHTML
```
<a name="El+value"></a>

### form.value(val) ⇒ <code>String</code>
Gets or sets the .value of the DOM element.
Typically used for input-like elements.

If val is excluded, will retrieve the value only.

**Kind**: instance method of [<code>Form</code>](#Form)  
**Returns**: <code>String</code> - Value set on the DOM element  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> \| <code>undefined</code> | Value to set onto the DOM element |

**Example**  
```js
el.value("some inner html"); // sets value
const innerHTML = el.value() // gets value
```
<a name="El+on"></a>

### form.on(eventName, callbackFn)
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
| eventName | <code>String</code> \| <code>Array.&lt;String&gt;</code> | event name (or array of event names) |
| callbackFn | [<code>EventCallbackFunction</code>](#EventCallbackFunction) | callback function for this DOM event |

**Example**  
```js
el.on('click', function(e, el){
 el.html('clicked');
});
```
<a name="EventCallbackFunction"></a>

## EventCallbackFunction : <code>function</code>
Wrapped callback function with the El object passed for event handling

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | DOM event (https://developer.mozilla.org/en-US/docs/Web/Events) |
| el | [<code>El</code>](#El) | Element wrapped in the El class |

**Example**  
```js
function callback(e, el) {
  e.preventDefault(); // has all the attributes of a normal dom event
  el.html(); // gets innerHTML
}
```
