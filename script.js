//hamburger drop down menu functions
const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".drop-down-button");
let display = false;
let previousImage = "";
let currentimage = "";
toggle.addEventListener("click", () => {
  display = !display;
  navbar.style.display = display ? "block" : "none";
});

//image carousel functions

let img = Array.from(document.querySelectorAll(".img"));
let mainImg = document.querySelector(".img.main-img");
let currentIndex = img.indexOf(mainImg);
let previous = mainImg;
let left = document.querySelector(".left");
let right = document.querySelector(".right");

left.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + img.length) % img.length;
  previous.classList = img[currentIndex].classList;
  img[currentIndex].classList = "img main-img";
  previous = img[currentIndex];
  console.log("left button clicked");
});

right.addEventListener("click", () => {
  currentIndex = (currentIndex + 1 + img.length) % img.length;
  previous.classList = img[currentIndex].classList;
  img[currentIndex].classList = "img main-img";
  previous = img[currentIndex];
  console.log("left button clicked");
  console.log("right side clicked");
});
