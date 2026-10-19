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
function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
 }
function calculateOrderTotal(cart, promoInput) {
  const total = {
      subtotal: 0,
      discount: 0,
      delivery: 0,
      total: 0,
    };
  if (cart.length) {
    total.subtotal = calculateCartSubtotal(cart);
    total.delivery = total.subtotal >= 50000 ? 0 : 30000;
    const promoNormalized = promoInput.trim().toLowerCase();
    if (total.subtotal >= 20000 && promoNormalized === 'save10') {
      total.discount = 0.1 * total.subtotal;
    }
    total.total = total.subtotal + total.delivery - total.discount;
  } 
  return total;
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
