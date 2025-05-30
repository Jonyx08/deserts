const cartItems = document.getElementById('cart-items');
const totalEl = document.getElementById('total');
let cart = [];

const desserts = [
  { name: "Waffle with Berries", price: 6.50 },
  { name: "Macaron Mix of Five", price: 8.00 },
  { name: "Lemon Meringue Pie", price: 5.00 },
  { name: "Pistachio Baklava", price: 4.00 },
  { name: "Classic Tiramisu", price: 5.50 },
  { name: "Classic Brownie", price: 5.50 }
];


document.getElementById('query').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    const name = item.dataset.name.toLowerCase();
    item.style.display = name.includes(searchTerm) ? 'block' : 'none';
  });
});

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
});


const dessertButtons = document.querySelectorAll(".item button");
dessertButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const item = desserts[index];
    const existing = cart.find(i => i.name === item.name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...item, qty: 1 });
    }
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.qty}`;
    const span = document.createElement("span");
    const subtotal = item.qty * item.price;
    span.textContent = `$${subtotal.toFixed(2)}`;
    li.appendChild(span);
    cartItems.appendChild(li);
    total += subtotal;
  });
  totalEl.textContent = total.toFixed(2);
}
