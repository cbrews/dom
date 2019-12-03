class El {
  /**
   * Creates a new element wrapper on a DOM element by ID or el
   *
   * @constructor
   * @param {String|HTMLElement|Node} id
   *
   * @example
   * // Sample HTML
   * // <div id="my-el"></div>
   * const el = new El('my-el');
   */
  constructor(id) {
    if ((typeof Node === 'object' || typeof Node === 'function') && id instanceof Node) {
      this.el = id;
    } else if ((typeof HTMLElement === 'object' || typeof HTMLElement === 'function') && id instanceof HTMLElement) {
      this.el = id;
    } else if (typeof id === 'string') {
      this.el = document.getElementById(id);
    } else {
      throw new Error(`Constuctor Type Error: Could not find a matching type for new El(${id})`);
    }

    this.events = {};
  }

  /**
   * Gets the internal DOM element.
   *
   * @memberof El#
   * @function getEl
   * @returns {HTMLElement} internal el.
   *
   * @example
   * el.getEl(); // <div id="my-el"></div>
   */
  getEl() {
    return this.el;
  }

  /**
   * Gets if the el exists in the DOM
   * @memberof El#
   * @function exist
   * @returns {Boolean} true or false if the internal el exists.
   *
   * @example
   * el.exist(); // true
   */
  exist() {
    return this.el !== null;
  }

  /**
   * Gets the .innerHTML value of the DOM element.
   * Typically used for div & span-like elements.
   *
   * @memberof El#
   * @function html
   * @returns {String} html value
   *
   * @example
   * const val = el.html(); // "test-input"
   */

  /**
   * Sets the .innerHTML value of the DOM element.
   * Typically used for div & span-like elements.
   *
   * @memberof El#
   * @function html
   * @param {String} val Value to set the .innerHTML of the DOM element
   * @returns {String} html value
   *
   * @example
   * el.html('test-input');
   * const val = el.html(); // "test-input"
   */
  html(val) {
    if (val !== undefined) {
      this.el.innerHTML = val;
    }
    return this.el.innerHTML;
  }

  /**
   * Gets the .value of the DOM element.
   * Typically used for input-like elements.
   *
   * @memberof El#
   * @function value
   * @returns {String} Value set on the DOM element
   *
   * @example
   * const innerHTML = el.html() // "some inner html"
   */

  /**
   * Sets the .value of the DOM element.
   * Typically used for input-like elements.
   *
   * @memberof El#
   * @function value
   * @param {String} val Value to set onto the DOM element
   * @returns {String} Value set on the DOM element
   *
   * @example
   * el.html("some inner html");
   * const innerHTML = el.html() // "some inner html"
   */
  value(val) {
    if (val !== undefined) {
      this.el.value = val;
    }

    return this.el.value;
  }

  /**
   * @callback EventCallbackFunction
   * @param {Event} e DOM event
   * @param {El} el Element wrapped in the El class
   */

  /**
   * Attaches an event handler onto the DOM element based on the name.
   *
   * Valid names:
   * * `blur`
   * * `change`
   * * `focus`
   * * `contextmenu`
   * * `input`
   * * `select`
   * * `submit`
   * * `keydown`
   * * `keyup`
   * * `keypress`
   * * `click`
   * * `mousedown`
   * * `mouseup`
   *
   * ... etc
   *
   * Reference: https://www.w3schools.com/tags/ref_eventattributes.asp
   *
   * You can pass multiple names to attach the same event handler to multiple events.
   *
   * @memberof El#
   * @function on
   * @param {String|Array<String>} name event name (or array of event names)
   * @param {EventCallbackFunction} fn Function parameters: (e: Event, el: El) event function with this element wrapped
   *
   * @example
   * el.on('click', function(e, el){
   *  el.html('clicked');
   * });
   */
  on(name, fn) {
    [...new Set([].concat(name))].forEach((n) => {
      if (!this.events[n]) {
        this.events[n] = [];
      }
      this.events[n].push(fn);
      this.refreshEventHandlers(n);
    });
  }

  /**
   * Refreshes all event handler functions, or you can specify an event name to refresh.
   *
   * @private
   * @memberof El#
   * @function refreshEventHandlers
   * @param {String|null} eventName event name of the handler to refresh
   */
  refreshEventHandlers(eventName) {
    let eventLists = Object.keys(this.events);

    if (eventName) {
      eventLists = eventLists.filter((i) => i === eventName);
    }

    eventLists.forEach((e) => {
      this.el[`on${e}`] = () => {
        this.events[e].forEach((fn) => fn(e, this));
      };
    });
  }
}

module.exports = El;
