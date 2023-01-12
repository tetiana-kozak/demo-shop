// cart counter

let productsCountEl = document.querySelector(".cart-counter");
let addToCartBtns = document.querySelectorAll(".add-to-cart");

addToCartBtns.forEach((button) => {
  button.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});

// modal

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

// add likes

let likes = document.querySelectorAll(".like");

likes.forEach((item) => {
  item.addEventListener("click", function () {
    // if (!item.classList.contains("active")) {
    //   item.classList.add("active");
    //   item.children[0].classList.add("wish-active");
    // } else {
    //   item.classList.remove("active");
    //   item.children[0].classList.remove("wish-active");
    // }

    item.classList.toggle("active");
    item.children[0].classList.toggle("wish-active");

  });
});

// add modal when scrolling

// let wasModalOpened = false;

// window.addEventListener("scroll", function () {
//   const pageHeight = document.documentElement.scrollHeight;

//   if (window.scrollY >= pageHeight / 2 && wasModalOpened == false) {
//     openModal();
//     wasModalOpened = true;
//   }
// });

function showModalByScroll() {
  if (window.scrollY >= document.body.scrollHeight / 2) {
    openModal();
  }
  window.removeEventListener("scroll", showModalByScroll);
}

window.addEventListener("scroll", showModalByScroll);
window.addEventListener("scroll", showModalByScroll);


// slider

$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
});
