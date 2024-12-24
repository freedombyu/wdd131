// JavaScript for TechWave Solutions Website

document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.getElementById("hero");
    const images = [
        "images/slide-img1.jpeg",
        "images/pexels-photo-1234567.jpeg",
        "images/pexels-photo-2345678.jpeg"
    ];
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
});


  // Save footer year dynamically
const year = new Date().getFullYear();
localStorage.setItem('year', year);
document.getElementById('year').textContent = localStorage.getItem('year');


  // Hamburger Menu Toggle
 // scripts/siteplan.js
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
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


document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach((img) => observer.observe(img));
    } else {
        lazyImages.forEach((img) => {
            img.src = img.dataset.src;
        });
    }
});

