window.addEventListener("wheel", handleScroll);
window.addEventListener("touchmove", handleScroll);

function handleScroll() {
  let firstScreen = document.querySelector(".first-screen");
  let otherContent = document.querySelector(".other-content");

  firstScreen.classList.add("no-visible");
  otherContent.classList.add("visible");

  setTimeout(function () {
    firstScreen.style.display = "none";
    otherContent.style.display = "block";
    document.body.style.overflow = "auto";
  }, 2000);

  window.removeEventListener("wheel", handleScroll);
}

// menu
let burger = document.querySelector(".nav__burger");
let close = document.querySelector(".nav__close");
let menu = document.querySelector(".nav__inner");

burger.addEventListener("click", function () {
  menu.style.transform = "translateY(0)";

});
close.addEventListener("click", function () {
  menu.style.transform = "translateY(-100%)";
});
