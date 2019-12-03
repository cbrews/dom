## Classes

<dl>
<dt><a href="#El">El</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#constructor">constructor(id)</a></dt>
<dd><p>Creates a new element wrapper on a DOM element by ID or el</p>
</dd>
<dt><a href="#getEl">getEl()</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>Gets the internal DOM element.</p>
</dd>
<dt><a href="#exist">exist()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Gets if the el exists in the DOM</p>
</dd>
<dt><a href="#html">html(val)</a> ⇒ <code>String</code></dt>
<dd><p>Gets or sets the .innerHTML value of the DOM element.
Typically used for div &amp; span-like elements.</p>
<p>Pass a string to set the html value.
Pass no parameter to get the html value.</p>
</dd>
<dt><a href="#value">value(val)</a> ⇒ <code>String</code></dt>
<dd><p>Gets or sets the .value of the DOM element.
Typically used for input-like elements.</p>
<p>Pass a string to set the html input value
Pass no parameter to get the html input value</p>
</dd>
<dt><a href="#on">on(name, fn)</a></dt>
<dd><p>Attaches an event handler onto the DOM element based on the name.</p>
<p>Valid names:</p>
<ul>
<li><code>blur</code></li>
<li><code>change</code></li>
<li><code>focus</code></li>
<li><code>contextmenu</code></li>
<li><code>input</code></li>
<li><code>select</code></li>
<li><code>submit</code></li>
<li><code>keydown</code></li>
<li><code>keyup</code></li>
<li><code>keypress</code></li>
<li><code>click</code></li>
<li><code>mousedown</code></li>
<li><code>mouseup</code>
... etc</li>
</ul>
<p>Reference: <a href="https://www.w3schools.com/tags/ref_eventattributes.asp">https://www.w3schools.com/tags/ref_eventattributes.asp</a></p>
<p>You can pass multiple names to attach the same event handler to multiple events.</p>
</dd>
</dl>

<a name="El"></a>

## El
**Kind**: global class  
<a name="new_El_new"></a>

### new El()
Element wrapper class

<a name="constructor"></a>

## constructor(id)
Creates a new element wrapper on a DOM element by ID or el

**Kind**: global function  

| Param | Type |
| --- | --- |
| id | <code>String</code> \| <code>HTMLElement</code> \| <code>Node</code> | 

**Example**  
```js
// Sample HTML
// <div id="my-el"></div>
const el = new El('my-el');
```
<a name="getEl"></a>

## getEl() ⇒ <code>HTMLElement</code>
Gets the internal DOM element.

**Kind**: global function  
**Returns**: <code>HTMLElement</code> - internal el.  
**Example**  
```js
const el = new El('my-el');
el.getEl(); // <div id="my-el"></div>
```
<a name="exist"></a>

## exist() ⇒ <code>Boolean</code>
Gets if the el exists in the DOM

**Kind**: global function  
**Returns**: <code>Boolean</code> - true or false if the internal el exists.  
**Example**  
```js
const el = new El('my-el');
el.exist(); // true
```
<a name="html"></a>

## html(val) ⇒ <code>String</code>
Gets or sets the .innerHTML value of the DOM element.
Typically used for div & span-like elements.

Pass a string to set the html value.
Pass no parameter to get the html value.

**Kind**: global function  
**Returns**: <code>String</code> - html value  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> \| <code>undefined</code> | Value to set the .innerHTML of the DOM element |

**Example**  
```js
const el = new El('my-el');
el.html('test-input');
const val = el.html(); // "test-input"
```
<a name="value"></a>

## value(val) ⇒ <code>String</code>
Gets or sets the .value of the DOM element.
Typically used for input-like elements.

Pass a string to set the html input value
Pass no parameter to get the html input value

**Kind**: global function  
**Returns**: <code>String</code> - Value set on the DOM element  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> \| <code>undefined</code> | Value to set onto the DOM element |

**Example**  
```js
const el = new El('my-el');
el.html("some inner html");
const innerHTML = el.html() // "some inner html"
```
<a name="on"></a>

## on(name, fn)
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

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> \| <code>Array.&lt;String&gt;</code> | event name (or array of event names) |
| fn | <code>EventCallbackFunction.&lt;e, el&gt;</code> | Function parameters: (e: Event, el: El) event function with this element wrapped |

**Example**  
```js
const el = new El('my-el');
el.on('click', function(e, el){
 el.html('clicked');
});
```
