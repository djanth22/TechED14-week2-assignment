console.log("log test, hello there");

//containers
const displayImage = document.getElementById(`display-image`);
let thumbnailContainer = document.getElementById(`Thumbnail-container`);

// buttons
const prev = document.getElementById(`previous`);
const next = document.getElementById(`next`);

// for later
let currentImageIndex = 0;

//images
const images = [
  {
    src: "images/placeholder-image1.jpg",
    alt: "ph1",
    thumnail: "images/placeholder-image1.jpg",
  },
  {
    src: "images/placeholder-image2.jpg",
    alt: "ph2",
    thumnail: "images/placeholder-image2.jpg",
  },
  {
    src: "images/placeholder-image3.jpg",
    alt: "ph3",
    thumnail: "images/placeholder-image3.jpg",
  },
  {
    src: "images/placeholder-image4.jpg",
    alt: "ph4",
    thumnail: "images/placeholder-image4.jpg",
  },
  {
    src: "images/placeholder-image5.jpg",
    alt: "ph5",
    thumnail: "images/placeholder-image5.jpg",
  },
];

// functions
// overall function
function gallery() {
  updateImages(image[currentImageIndex]);
  createThumbnails();
}

// thumbnails
function createThumbnails() {
  for (thumbnails of images) {
    let thumbnail = document.createElement("img");
    thumbnail.setAttribute(`src`, thumbnails.src);
    thumbnail.setAttribute(`alt`, thumbnails.alt);
    thumbnail.classList.add(`thumb-image`);
    thumbnailContainer.appendChild(thumbnail);
  }
}
// // testing function
createThumbnails();
updateCurrentImage(images[currentImageIndex]);
// it worked

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
// I want a function here that updates the image index as an event handler for the buttons
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
