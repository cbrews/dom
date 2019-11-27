/**
 * @class El
 */
class El {
    constructor(id) {
        this.el = document.getElementById(id);
        this.events = {};
    }

    html(val){
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
        [...new Set([].concat(name))].forEach(n => {
            if(!this.events[n]) {
                this.events[n] = [];
            }
            this.events[n].push(fn);
            this.refreshEventHandlers(n);
        });   
    }

    refreshEventHandlers(eventName) {
        let eventLists = Object.keys(this.events);

        if (eventName) {
            eventLists = eventLists.filter(i => i === eventName);
        }

        eventLists.forEach(e => {
            this.el['on' + e] = () => {
                this.events[e].forEach(fn => fn(e, this))
            }
        });
    }
}