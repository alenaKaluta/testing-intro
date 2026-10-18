const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const query = 'Наушники';
    const catalog = [
      { id: 1, name: 'Наушники' },
      { id: 2, name: 'Клавиатура' },
      { id: 3, name: 'JavaScript для начинающих' },
      { id: 4, name: 'Настольная лампа' },
      { id: 5, name: 'Чехол для ноутбука' },
      { id: 6, name: 'Чистый код' },
    ];
    expect(searchProducts(catalog, query).map((product) => product.id)).toEqual([1]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const query = 'Чистый код';
    const catalog = [
      { id: 1, name: 'Наушники' },
      { id: 2, name: 'Клавиатура' },
      { id: 3, name: 'JavaScript для начинающих' },
      { id: 4, name: 'Настольная лампа' },
      { id: 5, name: 'Чехол для ноутбука' },
      { id: 6, name: 'Чистый код' },
    ];
    expect(searchProducts(catalog, query).map((product) => product.id)).toEqual([6]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const query = 'Настольная лампа';
    const catalog = [
      { id: 1, name: 'Наушники' },
      { id: 2, name: 'Клавиатура' },
      { id: 3, name: 'JavaScript для начинающих' },
      { id: 4, name: 'Настольная лампа' },
      { id: 5, name: 'Чехол для ноутбука' },
      { id: 6, name: 'Чистый код' },
    ];
    expect(searchProducts(catalog, query).map((product) => product.id)).toEqual([4]);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const query = 'javascript';
    const catalog = [
      { id: 1, name: 'Наушники' },
      { id: 2, name: 'Клавиатура' },
      { id: 3, name: 'JavaScript для начинающих' },
      { id: 4, name: 'Настольная лампа' },
      { id: 5, name: 'Чехол для ноутбука' },
      { id: 6, name: 'Чистый код' },
    ];
    expect(searchProducts(catalog, query).map((product) => product.id)).toEqual([3]);
  });
  test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test.todo("'наушники' возвращает товар с ID 1");
  test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
});
