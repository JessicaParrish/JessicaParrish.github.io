const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a:not(.dropbtn)').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

const dropdown = document.querySelector('.dropdown');
const dropbtn = dropdown.querySelector('.dropbtn');
const dropdownContent = dropdown.querySelector('.dropdown-content');

dropbtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation(); 
  dropdownContent.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    dropdownContent.classList.remove('open');
  }
});

dropdownContent.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    dropdownContent.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});
