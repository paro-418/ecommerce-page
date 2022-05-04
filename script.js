"use strict";

// VARIABLES

let currentThumbnailNo = 1;  /* to keep track of current thumnail displaying */
let previousThumbnailNo = 1; /* to keep track of previous thumbnail displaying */

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
    // currentThumbnailno variable updating contiuously 
    // while using both arrow & thumnails to preview image
    previousThumbnailNo = currentThumbnailNo;
    currentThumbnailNo = popupThumbnailIndex + 1;

    // creating address of images
    const addressToPut = `images/image-product-${popupThumbnailIndex + 1}.jpg`;

    // changing photo's source to preview as main image
    changePopupPhotoSource(popupProductImage, addressToPut);

    // changing opacity of selected thumbnail
    changeOpacity(currentThumbnailNo,previousThumbnailNo);
  });
});




// event listener on previous and next button in popup mode

popupPrevArrow.addEventListener("click", function () {
  if (currentThumbnailNo === 1) return;

  // keeping track of previously diplayed thumnail as main photo   
  previousThumbnailNo = currentThumbnailNo;
  --currentThumbnailNo;

  // creating address for image
  const addressToPut = `images/image-product-${currentThumbnailNo}.jpg`;

  changeOpacity(currentThumbnailNo, previousThumbnailNo);

  changePopupPhotoSource(popupProductImage, addressToPut);
});



popupNextArrow.addEventListener("click", function () {
  if (currentThumbnailNo === 4) return;

  // keeping track of previously thumbnail displayed as main photo   
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
  currentlyShowingThumbnail,
  previouslyShownThumbnail
) {
  const toCurrLowOpacity = document.getElementById(
    `popup-thumbnail-${currentlyShowingThumbnail}`
  );
  const toPrevHighOpacity = document.getElementById(
    `popup-thumbnail-${previouslyShownThumbnail}`
  );

  toCurrLowOpacity.style.opacity = "0.7";
  toPrevHighOpacity.style.opacity = "1";
};
