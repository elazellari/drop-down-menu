const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".drop-down-button");
let display = false;

toggle.addEventListener("click", () => {
  display = !display;
  navbar.style.display = display ? "block" : "none";
});
