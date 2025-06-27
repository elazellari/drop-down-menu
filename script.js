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

let img = document.querySelectorAll(".img");
let mainImg = document.querySelector(".img.main-img");
let previous = mainImg;

img.forEach((element) => {
  element.addEventListener("click", () => {
    previous.classList = element.classList;
    element.classList = "img main-img";
    previous = element;
  });
});

let left = document.querySelector(".left");
left.addEventListener("click", () => {
  console.log("left button clicked");
});

let right = document.querySelector(".right");
right.addEventListener("click", () => {
  console.log("right side clicked");
});
