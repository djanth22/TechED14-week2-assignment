console.log("log test, hello there");

//containers
const displayImage = document.getElementById(`display-image`);
let thumbnailContainer = document.getElementById(`Thumbnail-container`);

// buttons
const prev = document.getElementById(`previous`);
const next = document.getElementById(`next`);
const hideButton = document.querySelector(`.thumbnail-hide-button`);

// for later
let currentImageIndex = 0;

//images
const images = [
  {
    src: "images/Untitled177.png",
    alt: "ph1",
    thumnail: "images/Untitled177.png",
    num: 0,
  },
  {
    src: "images/Untitled155.jpg",
    alt: "ph2",
    thumnail: "images/Untitled155.jpg",
    num: 1,
  },
  {
    src: "images/Untitled156_20220414155415.png",
    alt: "ph3",
    thumnail: "images/Untitled156_20220414155415.png",
    num: 2,
  },
  {
    src: "images/Untitled172.png",
    alt: "ph4",
    thumnail: "images/Untitled172.png",
    num: 3,
  },
  {
    src: "images/Untitled176.png",
    alt: "ph5",
    thumnail: "images/Untitled176.png",
    num: 4,
  },
];

// functions
// overall function
function gallery() {
  updateImages(image[currentImageIndex]);
  createThumbnails();
}

// thumbnails
let index = 0;
function createThumbnails() {
  for (thumbnails of images) {
    let thumbnail = document.createElement("img");
    thumbnail.setAttribute(`src`, thumbnails.src);
    thumbnail.setAttribute(`alt`, thumbnails.alt);
    thumbnail.classList.add(`thumb-image`);
    thumbnail.setAttribute(`id`, index++);
    thumbnailContainer.appendChild(thumbnail);
  }
}

createThumbnails();
updateCurrentImage(images[currentImageIndex]);

// main image
function updateCurrentImage() {
  displayImage.innerHTML = "";
  let img = document.createElement("img");
  img.setAttribute(`src`, images[currentImageIndex].src);
  img.setAttribute(`alt`, images[currentImageIndex].alt);
  img.classList.add(`displayed-image`);
  displayImage.appendChild(img);
}

// buttons
// next and previous
function updateIndex(index) {
  currentImageIndex += index;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  updateCurrentImage(images[currentImageIndex]);
}

next.addEventListener("click", function () {
  updateIndex(1);
});
prev.addEventListener("click", function () {
  updateIndex(-1);
});

// hide
function visibility() {
  if (thumbnailContainer.style.visibility === "hidden") {
    thumbnailContainer.style.visibility = "visible";
    hideButton.classList.remove(`thumb-is-hidden`);
  } else {
    thumbnailContainer.style.visibility = "hidden";
    hideButton.classList.add(`thumb-is-hidden`);
  }
}

hideButton.addEventListener("click", function () {
  visibility();
});

// need to add something for the thumbnails to work

// arrow keys
function handleArrowKeyPress(event) {
  if (event.key === "ArrowRight") {
    updateIndex(1);
  } else if (event.key === "ArrowLeft") {
    updateIndex(-1);
  }
}

window.addEventListener("keydown", handleArrowKeyPress);
