const Form = require('../src/Form');

const sampleForm = '<form id="my-form"><input name="field1" /></form>';

describe('Form initialization', () => {
  it('Form', () => {
    expect(Form).toBeDefined();
  });

  it('create Form', () => {
    document.body.innerHTML = sampleForm;
    const myForm = document.getElementById('my-form');

    const el1 = new Form('my-form');
    const el2 = new Form('no-valid-id');
    const el3 = new Form(myForm);
    const el4 = new Form(el1);
    const el5 = new Form(null);

    // Validate these objects are defined
    expect(el1).toBeDefined();
    expect(el2).toBeDefined();
    expect(el3).toBeDefined();
    expect(el4).toBeDefined();
    expect(el5).toBeDefined();
  });

  it('throw exception on invalid Form creation', () => {
    document.body.innerHTML = sampleForm;

    expect(() => new Form(1)).toThrow(); // numeric
    expect(() => new Form({})).toThrow(); // object
    expect(() => new Form(() => {})).toThrow(); // function
    expect(() => new Form(true)).toThrow(); // true
    expect(() => new Form(false)).toThrow(); // false
    expect(() => new Form()).toThrow(); // undefined
  });
});

describe('Inherited Form API Interface', () => {
  it('exist', () => {
    document.body.innerHTML = sampleForm;
    const el = new Form('my-form');

    expect(el.exist()).toBeTruthy();
  });

  it('not exist', () => {
    document.body.innerHTML = sampleForm;
    const el = new Form('not-a-valid-el');

    expect(el.exist()).toBeFalsy();
  });

  it('get el', () => {
    document.body.innerHTML = sampleForm;
    const el = new Form('my-form');

    const domElement = el.getEl();

    expect(domElement).toBeDefined();
    expect(typeof domElement).toBe('object');

    // Testing basic internal DOM logic
    expect(domElement.id).toBe('my-form');
  });

  it('get el exception', () => {
    document.body.innerHTML = sampleForm;
    const el = new Form('not-a-valid-el');

    expect(() => el.getEl()).toThrow();
  });

  it('set html', () => {
    document.body.innerHTML = sampleForm;
    const el = new Form('my-form');

    el.html('<input name="override" />');
    expect(document.body.innerHTML).toBe('<form id="my-form"><input name="override"></form>');
  });

  it('get html', () => {
    document.body.innerHTML = sampleForm;
    const el = new Form('my-form');

    expect(el.html()).toBe('<input name="field1">');
  });
});

describe('Form fields', () => {
  it('get form field', () => {
    document.body.innerHTML = sampleForm;
    const el = new Form('my-form');

    const field1 = el.getField('field1');
    expect(field1).not.toBeNull();
    expect(field1.exist()).toBeTruthy();

    field1.value('test');

    expect(field1.value()).toBe('test');
  });

  it('get non-existent form field', () => {
    document.body.innerHTML = sampleForm;
    const el = new Form('my-form');

    const nonField = el.getField('non-field');
    expect(nonField).not.toBeNull();
    expect(nonField.exist()).toBeFalsy();
  });
});

describe('Form API Events Interface', () => {

});
