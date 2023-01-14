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
  if (window.scrollY >= document.documentElement.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

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

// lesson 20

// function Car(model, year, color) {
//   this.model = model;
//   this.year = year;
//   this.color = color;

//   // console.log("this :>> ", this);

//   this.hi = function () {
//     console.log("Hi " + this.model);
//   };
// }

// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;

//     // console.log("this :>> ", this);
//   }
//   hi = function () {
//     console.log("Hi " + this.model);
//   };
// }

// let audi = new Car("A6", 2020, "BLACK");
// let bmw = new Car("j4", 2022, "white");
// let mersedes = new Car("de", 2018, "purple");

// console.log("audi :>> ", audi);
// console.log("bmw :>> ", bmw);
// console.log("mersedes :>> ", mersedes);

// audi.hi();
// bmw.hi();

//counter for one element

// let decrementsBtns = document.querySelectorAll(".decrement-btn")[0];
// let incrementsBtns = document.querySelectorAll(".increment-btn")[0];
// let productsCount = document.querySelectorAll(".product-quantity input")[0];

// function Counter(incrementBtn, decrementBtn, inputField) {
//   this.domRefs = {
//     incrementBtn,
//     decrementBtn,
//     inputField,
//   };

//   this.toggleButtonState = function () {
//     let count = this.domRefs.inputField.value;
//     this.domRefs.decrementBtn.disabled = count <= 1;
//     this.domRefs.incrementBtn.disabled = count >= 10;
//   };

//   this.toggleButtonState();

//   this.increment = function () {
//     this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
//     this.toggleButtonState();
//   };

//   this.decrement = function () {
//     this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
//     this.toggleButtonState();
//   };
//   // this.domRefs.incrementBtn.addEventListener("click", this.increment);

//   this.domRefs.incrementBtn.addEventListener(
//     "click",
//     this.increment.bind(this)
//   );

//   this.domRefs.decrementBtn.addEventListener(
//     "click",
//     this.decrement.bind(this)
//   );
// }

// const counter1 = new Counter(incrementsBtns, decrementsBtns, productsCount);

// console.log("counter1 :>> ", counter1);

// console.log("decrementsBtns :>> ", decrementsBtns);
// console.log("incrementsBtns :>> ", incrementsBtns);
// console.log("productsCount :>> ", productsCount);

// lesson 20

// function hi(surname, age) {
//   // console.log(this);
//   console.log("hi " + this.name + " " + surname + " " + age);
//   return "here";
// }

// let tanya = {
//   name: "kytsya",
// };

// let vanya = {
//   name: "kotya",
// };

// hi();
// hi.apply(tanya);
// hi.apply(vanya);
// hi();

// hi.call(tanya, "Kozak", 25);
// hi.apply(vanya, ["Hryshko", 27]);

// let test1 = hi.call(tanya, "call");
// let test2 = hi.apply(tanya, ["apply"]);
// let testTanya = hi.bind(tanya, "bind");
// let testVanya = hi.bind(vanya, "bind");
// console.log("test1 :>> ", test1);
// console.log("test2 :>> ", test2);
// console.log("test3 :>> ", test3);
// test1();
// test2();
// testTanya();
// testVanya();

//counter for all elements

let decrementsBtns = document.querySelectorAll(".decrement-btn");
let incrementsBtns = document.querySelectorAll(".increment-btn");
let productsCount = document.querySelectorAll(".product-quantity input");

let counterWrappers = document.querySelectorAll(".product-quantity");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.hideAll = function () {
    this.domRefs.decrementBtn.classList.add("hide");
  };

  //start run function

  this.toggleButtonState();

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );

  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}
const counters = [];

counterWrappers.forEach((item, i) => {
  const counterI = new Counter(
    incrementsBtns[i],
    decrementsBtns[i],
    productsCount[i]
  );
  counters.push(counterI);

  //   incrementsBtns[0],
  //   decrementsBtns[0],
  //   productsCount[0]
  // );
  // // counter.hideAll();

  // const counter1 = new Counter(
  //   incrementsBtns[1],
  //   decrementsBtns[1],
  //   productsCount[1]
  // );
  // // counter1.hideAll();

  // const counter2 = new Counter(
  //   incrementsBtns[2],
  //   decrementsBtns[2],
  //   productsCount[2]
  // );
  // counter2.hideAll();

  // console.log("counterWrappers :>> ", item);
  // new Counter(incrementsBtns[i], decrementsBtns[i], productsCount[i])
});
// console.log("counters :>> ", counters);
// counters[1].hideAll();
// console.log("counters last :>> ", counters);
