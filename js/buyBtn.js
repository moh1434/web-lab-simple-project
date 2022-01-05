const buyButtons = document.querySelectorAll(".clothes-ul .btn--buy");

buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Are you sure to buy this item?");
  });
});
