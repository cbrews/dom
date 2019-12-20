const El = require('../src/El');

describe('El initialization', () => {
  it('El', () => {
    expect(El).toBeDefined();
  });

  it('create El', () => {
    document.body.innerHTML = '<div id="my-id"></div>';
    const myId = document.getElementById('my-id');

    const el1 = new El('my-id');
    const el2 = new El('no-valid-id');
    const el3 = new El(myId);
    const el4 = new El(el1);
    const el5 = new El(null);

    // Validate these objects are defined
    expect(el1).toBeDefined();
    expect(el2).toBeDefined();
    expect(el3).toBeDefined();
    expect(el4).toBeDefined();
    expect(el5).toBeDefined();
  });

  it('throw exception on invalid El creation', () => {
    document.body.innerHTML = '<div id="my-id"></div>';

    expect(() => new El(1)).toThrow(); // numeric
    expect(() => new El({})).toThrow(); // object
    expect(() => new El(() => {})).toThrow(); // function
    expect(() => new El(true)).toThrow(); // true
    expect(() => new El(false)).toThrow(); // false
    expect(() => new El()).toThrow(); // undefined
  });
});

describe('El API Interface', () => {
  it('exist', () => {
    document.body.innerHTML = '<div id="my-id"></div>';
    const el = new El('my-id');

    expect(el.exist()).toBeTruthy();
  });

  it('not exist', () => {
    document.body.innerHTML = '<div id="my-id"></div>';
    const el = new El('not-a-valid-el');

    expect(el.exist()).toBeFalsy();
  });

  it('get el', () => {
    document.body.innerHTML = '<div id="my-id"></div>';
    const el = new El('my-id');

    const domElement = el.getEl();

    expect(domElement).toBeDefined();
    expect(typeof domElement).toBe('object');

    // Testing basic internal DOM logic
    expect(domElement.id).toBe('my-id');
  });

  it('get el exception', () => {
    document.body.innerHTML = '<div id="my-id"></div>';
    const el = new El('not-a-valid-el');

    expect(() => el.getEl()).toThrow();
  });

  it('set html', () => {
    document.body.innerHTML = '<div id="my-id"></div>';
    const el = new El('my-id');

    const result = el.html('text');
    expect(document.body.innerHTML).toBe('<div id="my-id">text</div>');
    expect(result).toBe('text');
  });

  it('get html', () => {
    document.body.innerHTML = '<div id="my-id">One</div>';
    const el = new El('my-id');

    expect(el.html()).toBe('One');
  });

  it('get empty html', () => {
    document.body.innerHTML = '<div id="my-id"></div>';
    const el = new El('my-id');

    expect(el.html()).toBe('');
  });

  it('set value', () => {
    document.body.innerHTML = '<input id="my-id" />';
    const el = new El('my-id');

    const result = el.value('hello');
    expect(result).toBe('hello');

    expect(el.value()).toBe('hello');
  });

  it('get value', () => {
    document.body.innerHTML = '<input id="my-id" value="Hello" />';
    const el = new El('my-id');

    expect(el.value()).toBe('Hello');
  });
});

describe('El API Events Interface', () => {

});
