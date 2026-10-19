function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantityAdd) { 
  if (quantityAdd <= 0) {
    throw new RangeError('Количество должно быть положительным числом');
  }
  const productExisting = cart.find((item) => item.id === product.id);
  const quantityUpdated = (productExisting ? productExisting.quantity : 0) + quantityAdd;
  if (quantityUpdated > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }
  if (productExisting) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: quantityUpdated } : item
    );
  }
  return [...cart, { ...product, quantity: quantityUpdated }];
 }
function changeQuantity(cart, id, quantityNew) { 
  if (quantityNew <= 0) {
    throw new RangeError('Количество должно быть положительным числом');
  }
  const productExisting = cart.find((item) => item.id === id);
  if (!productExisting) {
    return [...cart];
  }
  if (quantityNew > productExisting.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }
  return cart.map((item) =>
      item.id === id ? { ...item, quantity: quantityNew} : item);
 }
function removeFromCart(cart, id) { 
  const productExisting = cart.find((item) => item.id === id);
  if (!productExisting) {
    return [...cart];
  }
  if (cart.length === 1 && productExisting) {
    return [];
  }
  return cart.filter((product) => product.id !== id);
 }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
