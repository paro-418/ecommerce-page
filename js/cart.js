"use strict";

// ROOT VARIABLES

// const root = document.querySelector(':root');

// VARIABLES

let isItemsExistInCart = false;
let orderInCart = 0;
let noOfPairsSelected = 0;
let totalNoOfItemsInCart = 0;

// MAIN-SECTION-RIGHT-ELEMENTS
const counterSpanEl = document.querySelectorAll(".counter-span");

const subtractItemEl = document.getElementById("subtract");
const addItemEl = document.getElementById("add");
const countItemEl = document.getElementById("count-pairs");
countItemEl.textContent = noOfPairsSelected; // initializing total no of shoe pair selected

const addToCartBtn = document.getElementById("add-to-cart");

// INSIDE CART ELEMENTS
const insideCart = document.getElementById("inside-cart");
const currentPriceEl = document.getElementById("current-price");
const pairOfShoesEl = document.getElementById("items-bought");
const finalPriceEl = document.getElementById("finalPrice");
const cartItemBox = document.getElementById("cart-item-box");
let deleteIcon;

// EVENT LISTENERS ON MAIN-SECITION-RIGHT ELEMENTS

counterSpanEl.forEach(function (ele) {
  ele.addEventListener("click", function (e) {
    e.preventDefault();
    let index = 1;
    if (ele.classList.contains("subtract")) index = 0;
    if (ele.classList.contains("add")) index = 2;
    if (index === 1) return; // no event litener on count-pairs

    countNoOfpairSelected(index);
  });
});

// FUNCTIONS

const changeInsideCartClass = function (presentOrNot) {
  // switching yes-items & no-items class on the basis of whether atleast an item is present or not
  presentOrNot
    ? insideCart.classList.replace("no-items", "yes-items")
    : insideCart.classList.replace("yes-items", "no-items");
  return;
};

const countNoOfpairSelected = function (spanTapped) {
  // if - button is pressed
  if (spanTapped === 0) --noOfPairsSelected;

  // if +button is pressed
  if (spanTapped === 2) ++noOfPairsSelected;

  // ensuring selected item must not be negative
  noOfPairsSelected < 0
    ? (noOfPairsSelected = 0)
    : (countItemEl.textContent = noOfPairsSelected);
};

addToCartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const htmlToInsert = ` <div class="cart-items">
                  <img
                    src="images/image-product-1-thumbnail.jpg"
                    alt="product thumbnail"
                    class="cart-item-image"
                  />
                  <div class="cart-item-info">
                    <h4 class="cart-item-name">Fall Limited Edition Sneaker</h4>
                    <span class="current-price" id="current-price">$25</span> x
                    <span class="items-bought" id="items-bought">${noOfPairsSelected}</span>
                    <span class="final-price" id="final-price">&dollar;${
                      25 * noOfPairsSelected
                    }</span>
                    <img
                      src="images/icon-delete.svg"
                      alt="delete icon"
                      class="delete-icon"
                    />
                  </div>
                </div>`;

  if (+countItemEl.textContent > 0) {
    cartItemBox.insertAdjacentHTML("afterbegin", htmlToInsert);
    ++totalNoOfItemsInCart;
    isItemsExistInCart = true;
  }

  // updating content of pseudo element
  changePseudoContent();

  // changing class of inside-cart
  changeInsideCartClass(isItemsExistInCart);
});

const changePseudoContent = function () {
  // changing opacity of pseudo element
  totalNoOfItemsInCart == 0
  ? document.documentElement.style.setProperty("--pseudo-opacity", "0")
  : document.documentElement.style.setProperty("--pseudo-opacity", "1");
  
  document.documentElement.style.setProperty(
    "--pseudo-content",
    totalNoOfItemsInCart
    );
  };
  
  // EVENT LISTENER  TO DELETE ITEMS FROM CART
  
  cartItemBox.addEventListener("click", function (eleClicked) {
    eleClicked.preventDefault();

    // Guard Condition
    if (!eleClicked.target.classList.contains("delete-icon")) return;

    eleClicked.target.parentElement.parentElement.remove();
    totalNoOfItemsInCart--;

    totalNoOfItemsInCart === 0
      ? (isItemsExistInCart = false)
      : (isItemsExistInCart = true);

    // changing class of inside-cart element
    changeInsideCartClass(isItemsExistInCart);

    // updating content of pseudo element
    changePseudoContent();
  });
