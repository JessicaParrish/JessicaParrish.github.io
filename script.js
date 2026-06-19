const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector('a');
  const content = dropdown.querySelector('.dropdown-content');

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = content.classList.toggle('open');

    document.querySelectorAll('.dropdown-content.open').forEach(other => {
      if (other !== content) other.classList.remove('open');
    });
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content.open').forEach(content => {
      content.classList.remove('open');
    });
  }
});
