// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate sections on scroll
function animateOnScroll() {
  const animatedSections = document.querySelectorAll('.animate__animated');
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      section.classList.add('animate__fadeInUp');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);

// Add more subtle hero text animation on load
window.onload = function() {
  document.querySelector('.hero-content').classList.add('animate__fadeInDown');
};
