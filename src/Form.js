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
   * //   <input name="inputfield" />
   * // </form>
   *
   * const testForm = new Form('test');
   * testForm.getField('inputfield').value('my test value');
   */
  getField(name) {
    const { elements } = this.el;
    return new El(elements[name] || null);
  }

  /**
   * Special handler action for the submit action on a form.
   *
   * @memberof Form#
   * @function submit
   * @param {EventCallbackFunction} callbackFn callback function for this DOM event
   *
   * @example
   * // <form id="test">
   * //   <input name="inputfield" />
   * // </form>
   *
   * const form = new Form('test');
   * form.submit(function(e, f){
   *   e.preventDefault();
   *   const value = f.getField('inputfield').value();
   *   console.log(value);
   * })
   */
  submit(callbackFn) {
    this.on('submit', callbackFn);
  }
}

module.exports = Form;
