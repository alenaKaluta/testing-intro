const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  test('ID 1 возвращает products[0]', () => {
    const id = 1;
    expect(getProductById(products, id)).toEqual(products[0]);
  });
  test('ID 4 возвращает products[3]', () => {
    const id = 4;
    expect(getProductById(products, id)).toEqual(products[3]);
  });
  test('ID 6 возвращает products[5]', () => {
    const id = 6;
    expect(getProductById(products, id)).toEqual(products[5]);
  });
  test('ID 0 возвращает null', () => {
    const id = 0;
    expect(getProductById(products, id)).toBeNull();
  });
  test('ID 999 возвращает null', () => {
    const id = 999;
    expect(getProductById(products, id)).toBeNull();
  });
  test('ID -1 возвращает null', () => {
    const id = -1;
    expect(getProductById(products, id)).toBeNull();
  });
  test("строковый ID '1' возвращает null", () => {
    const id = '1';
    expect(getProductById(products, id)).toBeNull();
  });
  test.todo('ID undefined возвращает null');
  test.todo('ID NaN возвращает null');
});
