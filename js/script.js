const burgerBtn = document.querySelector(".header__burger-btn");
const navigation = document.querySelector(".navigation");
const navigationClose = document.querySelector(".navigation__close");

burgerBtn.addEventListener('click', () => {
  navigation.style.right = '0';
});

navigationClose.addEventListener('click', () => {
  navigation.style.right = '-400px';
});