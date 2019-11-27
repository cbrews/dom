/**
 * @class El
 */
module.exports = class El {
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

  getEl() {
    return this.el;
  }

  exist() {
    return this.el !== null;
  }

  html(val) {
    if (val !== undefined) {
      this.el.innerHTML = val;
    }
    return this.el.innerHTML;
  }

  value(val) {
    if (val !== undefined) {
      this.el.value = val;
    }

    return this.el.value;
  }

  on(name, fn) {
    [...new Set([].concat(name))].forEach((n) => {
      if (!this.events[n]) {
        this.events[n] = [];
      }
      this.events[n].push(fn);
      this.refreshEventHandlers(n);
    });
  }

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
};
