// Reveal animations on scroll
const reveals = document.querySelectorAll('.reveal, .card, .price-card');

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].style.opacity = 1;
      reveals[i].style.transform = 'none';
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Simple form handling (demo, no backend)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for contacting Hi-tech! We will get back to you soon.');
  this.reset();
});