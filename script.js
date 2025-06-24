//hamburger drop down menu functions
const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".drop-down-button");
let display = false;

toggle.addEventListener("click", () => {
  display = !display;
  navbar.style.display = display ? "block" : "none";
});

//image carousel functions

let img = document.querySelectorAll(".img");

img.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.backgroundColor = "blue";
  });
});
