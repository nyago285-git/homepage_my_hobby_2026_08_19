// bubble.js の中身

const container = document.getElementById('bubble-container');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 35 + 15;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  bubble.style.left = `${Math.random() * 100}%`;

  const duration = Math.random() * 6 + 6;
  bubble.style.animationDuration = `${duration}s`;

  container.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, duration * 1000);
}

setInterval(createBubble, 400);

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  container.style.transform = `translateY(${scrolled * -0.2}px)`;
});