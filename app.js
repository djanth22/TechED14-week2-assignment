console.log("log test, hello there");

//containers
const displayImage = document.getElementById(`display-image`);
let thumbnailContainer = document.getElementById(`Thumbnail-container`);

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
// createThumbnails();
// it worked
