const shoppingCart = document.getElementById('shopping-cart');
const addForm = shoppingCart.querySelector('#add-form');
const cartItems = shoppingCart.querySelector('#cart-items');
const totalCell = shoppingCart.querySelector('tfoot td:last-child');
const checkoutButton = shoppingCart.querySelector('#checkout-button');

let products = [];

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const product = addForm.querySelector('#product').value;
  const price = addForm.querySelector('#price').value;

  addForm.reset();
  addItem(product, price);
});

cartItems.addEventListener('input', e => {
  const input = e.target;
  const tr = input.closest('tr');
  const index = tr.dataset.index;
  const quantity = input.value;
  const priceCell = tr.querySelector('td:nth-child(3)');
  const price = parseFloat(priceCell.textContent.replace('$', ''));
  const total ;});

