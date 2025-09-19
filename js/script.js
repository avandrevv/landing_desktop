

const header = document.getElementById('header__fixed');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

// Скролл
window.addEventListener('scroll', () => {
  if (window.scrollY > 0 || burger.classList.contains('active')) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Клик по бургеру
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');

  // Если меню открыто — добавляем "scrolled"
  if (burger.classList.contains('active')) {
    header.classList.add('scrolled');
  } else {
    // Если меню закрыли и страница в самом верху — убираем "scrolled"
    if (window.scrollY === 0) {
      header.classList.remove('scrolled');
    }
  }
});

