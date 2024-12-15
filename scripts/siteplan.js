// JavaScript for TechWave Solutions Website

document.addEventListener("DOMContentLoaded", () => {
  // Hero Section Background Slider
  const heroSection = document.getElementById("hero");
  const images = [
      "images/slide-img-1.avif",
      "images/slide-img-2.jpeg",
      "images/slide-img-3.jpg",
  ];
  let currentIndex = 0;

  function changeBackground() {
      currentIndex = (currentIndex + 1) % images.length; // Loop through images
      heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
  }

  // Change background every 5 seconds
  setInterval(changeBackground, 5000);

  // Set current year in the footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Set last modified date in the footer
  const lastModifiedElement = document.getElementById('last-modified');
  if (lastModifiedElement) {
      lastModifiedElement.textContent = document.lastModified;
  }

  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
  });

  // Smooth Scrolling for Navigation Links
  const navLinksArray = document.querySelectorAll('.nav-links a');
  navLinksArray.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetSection = document.querySelector(e.target.getAttribute('href'));
          targetSection.scrollIntoView({ behavior: 'smooth' });

          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              hamburger.setAttribute('aria-expanded', 'false');
          }
      });
  });

  // Subscribe Form Submission
  const subscribeForm = document.querySelector('footer form');
  if (subscribeForm) {
      subscribeForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const emailInput = document.querySelector('#email');
          const email = emailInput.value;

          if (email) {
              alert(`Thank you for subscribing with ${email}!`);
              emailInput.value = '';
          } else {
              alert('Please enter a valid email address.');
          }
      });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Thank you for contacting us! We will get back to you shortly.');
          contactForm.reset();
      });
  }

  // Dynamic Service Highlights
  const services = [
      { title: "IT Consulting", description: "Strategic guidance to align IT goals with business objectives." },
      { title: "Cybersecurity", description: "Protect assets with advanced threat detection and prevention." },
      { title: "Cloud Integration", description: "Secure and scalable cloud services for modern businesses." },
  ];

  const servicesContainer = document.querySelector(".features .grid-container");
  if (servicesContainer) {
      services.forEach((service) => {
          const div = document.createElement("div");
          div.classList.add("feature-box");
          div.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
          servicesContainer.appendChild(div);
      });
  }
});
