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

    
    // bg
    let contentHeight = document.documentElement.scrollHeight;
    let codeChunk = `
    <div class="common-bg">
      <video autoplay loop muted playsinline>
        <source src="img/bg.webm" type="video/webm" />
        <source src="img/bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="common-bg transform">
      <video autoplay loop muted playsinline>
        <source src="img/bg.webm" type="video/webm" />
        <source src="img/bg.mp4" type="video/mp4" />
      </video>
    </div>
    `;
    let backgroundsElement = document.querySelector('.backgrounds');
    let repeatCount = Math.ceil(contentHeight / (window.innerHeight * 2));
    for (let i = 0; i < repeatCount; i++) {
      backgroundsElement.insertAdjacentHTML('beforeend', codeChunk);
    }

    cardsAnimation();
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

function cardsAnimation() {
  let cards = document.querySelectorAll('.subject__card');
  let firstCard = cards[0];
  let secondCard = cards[1];

  let widthCard = secondCard.offsetWidth;
  let heightCard = secondCard.offsetHeight;

  let topValue = parseFloat(window.getComputedStyle(secondCard).getPropertyValue('top'));
  let leftValue = parseFloat(window.getComputedStyle(secondCard).getPropertyValue('left'));
  secondCard.style.clipPath = `polygon(0% 0%, 100% 0%, 100% 100%, ${widthCard - leftValue}px 100%, ${widthCard - leftValue}px ${-topValue}px, 0% ${-topValue}px)`;

  secondCard.addEventListener('mouseenter', function() {
    firstCard.style.clipPath = `polygon(0% 0%, ${leftValue}px 0%, ${leftValue}px ${heightCard - -topValue}px, 100% ${heightCard - -topValue}px, 100% 100%, 0% 100%)`;
    secondCard.style.clipPath = 'none';
  });

  secondCard.addEventListener('mouseleave', function() {
    secondCard.style.clipPath = `polygon(0% 0%, 100% 0%, 100% 100%, ${widthCard - leftValue}px 100%, ${widthCard - leftValue}px ${-topValue}px, 0% ${-topValue}px)`;
    firstCard.style.clipPath = 'none';
  });
}