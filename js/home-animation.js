window.addEventListener('wheel', handleScroll);

function handleScroll() {
  let firstScreen = document.querySelector('.first-screen');
  let otherContent = document.querySelector('.home-content');
  
  firstScreen.classList.add('no-visible');
  otherContent.classList.add('visible');
  
  setTimeout(function() {
    firstScreen.style.display = 'none';
    otherContent.style.display = 'block';
    document.body.style.overflow = 'auto';
  }, 3000);
  
  window.removeEventListener('wheel', handleScroll);
}