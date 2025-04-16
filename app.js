let images = [
  {
    src: "./images/cheetah.jpg",
    alt: "a cheetah in the masai mara",
  },
  {
    src: "./images/antelope.jpg",
    alt: "a group of antelopes in masai mara",
  },
  {
    src: "./images/elephant.jpg",
    alt: "an elephant in masai mara",
  },
  {
    src: "./images/giraffe.jpg",
    alt: "3 giraffes in the masai mara",
  },
  {
    src: "./images/hotairbaloon.jpg",
    alt: "a hot air baloon above zebras in masia mara",
  },
  {
    src: "./images/zebra.jpg",
    alt: "a zebra looking directly at the camera at masai mara",
  },
  {
    src: "./images/lions.jpg",
    alt: "2 lions sitting in the masai mara",
  },
];

const thumbnailContainer = document.getElementById("thumbnailsContainer");
const mainBackgroundContainer = document.getElementById(
  "backgroundImageContainer"
);

images.forEach(function (individualImage) {
  const myNewImg = document.createElement("img");

  myNewImg.src = individualImage.src;

  myNewImg.addEventListener("click", function () {
    mainBackgroundContainer.innerHTML = "";

    const backgroundImage = document.createElement("img");
    backgroundImage.src = individualImage.src;
    mainBackgroundContainer.appendChild(backgroundImage);
  });

  thumbnailContainer.appendChild(myNewImg);
});
window.addEventListener("DOMContentLoaded", function () {
  const defaultImage = images[3];
  const backgroundImage = document.createElement("img");
  backgroundImage.src = defaultImage.src;
  mainBackgroundContainer.appendChild(backgroundImage);
});
let currentIndex = 3;

function setBackgroundImage(index) {
  mainBackgroundContainer.innerHTML = "";
  const backgroundImage = document.createElement("img");
  backgroundImage.src = images[index].src;
  mainBackgroundContainer.appendChild(backgroundImage);
}

document.querySelector(".left-arrow").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  setBackgroundImage(currentIndex);
});

document.querySelector(".right-arrow").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  setBackgroundImage(currentIndex);
});
