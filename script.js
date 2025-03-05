// Adding mobile menu functionality

const header = document.querySelector('header');
const menuButton = document.querySelector('.mobile-menu-button');
const closeMenuButton = document.querySelector('.close-menu-button');

menuButton.addEventListener('click', () => {
  header.classList.toggle('show-mobile-menu')
});

closeMenuButton.addEventListener('click', () => {
  menuButton.click();
});