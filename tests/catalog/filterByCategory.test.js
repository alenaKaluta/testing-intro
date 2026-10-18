const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = 'all';
    const catalog = [
      { id: 1, category: 'electronics' },
      { id: 2, category: 'electronics' },
      { id: 3, category: 'books' },
      { id: 4, category: 'home' },
      { id: 5,  category: 'home' },
      { id: 6, category: 'books' },];
    expect(filterByCategory(catalog, category).map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = undefined;
    const catalog = [
      { id: 1, category: 'electronics' },
      { id: 2, category: 'electronics' },
      { id: 3, category: 'books' },
      { id: 4, category: 'home' },
      { id: 5,  category: 'home' },
      { id: 6, category: 'books' },];
    expect(filterByCategory(catalog, category).map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = '';
    const catalog = [
      { id: 1, category: 'electronics' },
      { id: 2, category: 'electronics' },
      { id: 3, category: 'books' },
      { id: 4, category: 'home' },
      { id: 5,  category: 'home' },
      { id: 6, category: 'books' },];
    expect(filterByCategory(catalog, category).map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test.todo("'electronics' возвращает товары с ID [1, 2]");
  test.todo("'books' возвращает товары с ID [3, 6]");
  test.todo("'home' возвращает товары с ID [4, 5]");
  test.todo("'clothes' возвращает пустой массив");
  test.todo("'toys' возвращает пустой массив");
  test.todo("'sports' возвращает пустой массив");
});
