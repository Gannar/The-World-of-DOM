document.addEventListener("DOMContentLoaded", () => {
  // Update the total price by iterating through each product card
  function updateTotal() {
    let total = 0;
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      // Get the unit price 
      const priceText = card.querySelector('.unit-price').textContent;
      const price = parseFloat(priceText);
      // Get the quantity (from the <span class="quantity"> element)
      const quantityText = card.querySelector('.quantity').textContent;
      const quantity = parseInt(quantityText);
      total += price * quantity;
    });
    // Update the total price display
    document.querySelector('.total').textContent = total + " $";
  }

  // Handle the "+" button clicks (increase quantity)
  document.querySelectorAll('.fa-plus-circle').forEach((plusBtn) => {
    plusBtn.addEventListener('click', (e) => {
      const quantitySpan = e.target.parentElement.querySelector('.quantity');
      let currentQty = parseInt(quantitySpan.textContent);
      currentQty++;
      quantitySpan.textContent = currentQty;
      updateTotal();
    });
  });

  // Handle the "-" button clicks (decrease quantity, not below 0)
  document.querySelectorAll('.fa-minus-circle').forEach((minusBtn) => {
    minusBtn.addEventListener('click', (e) => {
      const quantitySpan = e.target.parentElement.querySelector('.quantity');
      let currentQty = parseInt(quantitySpan.textContent);
      if (currentQty > 0) {
        currentQty--;
        quantitySpan.textContent = currentQty;
        updateTotal();
      }
    });
  });

  // Handle delete functionality (remove a product card)
  document.querySelectorAll('.fa-trash-alt').forEach((trashBtn) => {
    trashBtn.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      if (card) {
        card.remove();
        updateTotal();
      }
    });
  });

  // Handle like functionality (toggle the liked state)
  document.querySelectorAll('.fa-heart').forEach((heartBtn) => {
    heartBtn.addEventListener('click', (e) => {
      // Toggle a CSS class "liked" to change its color. Define the style in your CSS.
      e.target.classList.toggle('liked');
    });
  });

  // Initialize the total price on page load
  updateTotal();
});
