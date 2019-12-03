const El = require('./El');

/**
 * @class Form
 * @extends El
 */
class Form extends El {
  /**
   * Returns the form field wrapped in El wrapper
   *
   * @memberof Form#
   * @function getField
   * @param {String} name Field name (based on input.name attribute)
   * @returns {El} Form field element accessible as an El
   *
   * @example
   * // <form id="test">
   * //   <input name="inputfield" type="text" />
   * // </form>
   *
   * const testForm = new Form('test');
   * const input = testForm.getField('inputfield');
   * input.value('mytext');
   */
  getField(name) {
    return new El(this.el[name]);
  }
}

module.exports = Form;
