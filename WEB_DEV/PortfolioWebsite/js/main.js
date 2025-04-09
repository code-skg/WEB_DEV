const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul');

// Toggle menu on hamburger click
toggle.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent the event from bubbling up to document
  menu.classList.toggle('show');
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove('show');
  }
});

// Typing text animation
const words = ["a Developer","Coder" ,"an AI Enthusiast", "a Problem Solver", "a Learner"];
let currentWordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("typing-text");

function typeEffect() {
  const currentWord = words[currentWordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  textElement.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 50);
  }
}

typeEffect();
