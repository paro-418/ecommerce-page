"use strict";

// VARIABLES

let currentThumbnailNo = 1;
let previousThumbnailNo = 1;

// -----------selecting all elements here---------

// MAIN-SECTION-LEFT-ELEMENTS

const btnThumbnail = document.querySelectorAll(".btn-thumbnail");
const mainProductImage = document.getElementById("main-product-image");

// MAIN-SECTION-RIGHT-ELEMENTS
const subtractItem = document.getElementById("subtract");
const addItem = document.getElementById("add");
const countItem = document.getElementById("count-items");
const addToCart = document.getElementById("add-to-cart");

// POPUP ELEMENTS

const popupBtnThumbnail = document.querySelectorAll(".popup-btn-thumbnail");
// console.log(popupBtnThumbnail[3]);
const thumbnailsLength = popupBtnThumbnail.length;
const popupProductImage = document.getElementById("popup-product-image");
const popupPrevArrow = document.getElementById("popup-prev-arrow");
const popupNextArrow = document.getElementById("popup-next-arrow");



// ADDING EVENT LISTENERS TO EACH THUMBNAILS

// event listener in main-section-left-thumbnails
btnThumbnail.forEach(function (btn, thumbnailIndex) {
  btn.addEventListener("click", function () {
    const addressToPut = `images/image-product-${thumbnailIndex + 1}.jpg`;
    changeMainPhotoSource(mainProductImage, addressToPut);
  });
});

// event listener in popup thumbnails
popupBtnThumbnail.forEach(function (btn, popupThumbnailIndex) {
  btn.addEventListener("click", function () {
    const addressToPut = `images/image-product-${popupThumbnailIndex + 1}.jpg`;
    changePopupPhotoSource(popupProductImage, addressToPut);
  });
});

// event listener on previous and next button in popup mode

popupPrevArrow.addEventListener("click", function () {
  if (currentThumbnailNo === 1) return;
  previousThumbnailNo = currentThumbnailNo;
  --currentThumbnailNo;

  // creating address for image
  const addressToPut = `images/image-product-${currentThumbnailNo}.jpg`;

  changeOpacity(currentThumbnailNo, previousThumbnailNo);

  changePopupPhotoSource(popupProductImage, addressToPut);
});

popupNextArrow.addEventListener("click", function () {
  if (currentThumbnailNo === 4) return;
  previousThumbnailNo = currentThumbnailNo;
  ++currentThumbnailNo;

  // creating address for image
  const addressToPut = `images/image-product-${currentThumbnailNo}.jpg`;

  changeOpacity(currentThumbnailNo, previousThumbnailNo);
  changePopupPhotoSource(popupProductImage, addressToPut);
});

// FUNCTIONS

// --- TO CHANGE SOURCE OF IMAGES

const changeMainPhotoSource = function (mainProductImageAddress, addressToPut) {
  // changing main product source in normal mode
  mainProductImageAddress.src = addressToPut;
};

const changePopupPhotoSource = function (
  popupProductImageAddress,
  addressToPut
) {
  // changing main product photo source in popup mode
  popupProductImageAddress.src = addressToPut;
};

//   -- CHANGE OPACITY

const changeOpacity = function (
  currentThumbnailOpacity,
  previousThumbnailOpacity
) {
  const toCurrLowOpacity = document.getElementById(
    `popup-thumbnail-${currentThumbnailOpacity}`
  );
  const toPrevHighOpacity = document.getElementById(
    `popup-thumbnail-${previousThumbnailOpacity}`
  );

  toCurrLowOpacity.style.opacity = "0.7";
  toPrevHighOpacity.style.opacity = "1";
};
