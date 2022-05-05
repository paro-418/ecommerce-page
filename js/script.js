"use strict";

// VARIABLES

let currentThumbnailNo = 1; /* to keep track of current thumnail displaying */
let previousThumbnailNo = 1; /* to keep track of previous thumbnail displaying */
let mobCurrentMainPhoto = 1;

// -----------selecting all elements here---------

// MAIN-SECTION-LEFT-ELEMENTS

const btnThumbnail = document.querySelectorAll(".btn-thumbnail");
const mainProductImage = document.getElementById("main-product-image");


// POPUP ELEMENTS

const popupBtnThumbnail = document.querySelectorAll(".popup-btn-thumbnail");
const thumbnailsLength = popupBtnThumbnail.length;
const popupProductImage = document.getElementById("popup-product-image");
const popupPrevArrow = document.getElementById("popup-prev-arrow");
const popupNextArrow = document.getElementById("popup-next-arrow");

// MOBILE ELEMENTS
// const mobArrow = document.getElementsByClassName('mob-arrow');
const mobArrow = document.querySelectorAll(".mob-arrow");
const mobLeftArrow = document.getElementById("mob-arrow-left");
const mobRightArrow = document.getElementById("mob-arrow-right");

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
    changeOpacity(currentThumbnailNo, previousThumbnailNo);
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

// EVENT LISTENER IN MOBILE ARROWS

mobArrow.forEach(function (arrows, indexArrow) {
  arrows.addEventListener("click", function () {
    const currMainPhotoAddress = `images/image-product-${mobCurrentMainPhoto}.jpg`;

    if (indexArrow === 0 && mobCurrentMainPhoto > 1) --mobCurrentMainPhoto;
    else if (indexArrow === 1 && mobCurrentMainPhoto < 4) ++mobCurrentMainPhoto;

    const addressToPut = `images/image-product-${mobCurrentMainPhoto}.jpg`;

    // calling function to change image address
    changeMainPhotoSource(mainProductImage, addressToPut);
  });
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
