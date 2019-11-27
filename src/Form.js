const El = require('./El');
/**
 * @class Form
 */
module.exports = class Form extends El {
  getField(name) {
    return new El(this.el[name]);
  }
};
