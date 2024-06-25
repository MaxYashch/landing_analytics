document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementsByClassName('burger');
  const header = document.getElementsByClassName('header');
  burger.addEventListener('click', function() {
    header.classList.toggle('navigation_open');
  })
});
