let productsCountEl = document.querySelector(".cart-counter");
let addToCartBtns = document.querySelectorAll(".add-to-cart");

addToCartBtns.forEach((button) => {
  button.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});

//modal

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".more-details");
let closeBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}
