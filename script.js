const scenes = document.querySelectorAll('.scene');
let current = 0;

/* Slide control */
function showScene(index) {
  scenes.forEach(s => s.classList.remove('active'));
  scenes[index].classList.add('active');
  shootStar();
  shootStar();
}

setInterval(() => {
  if (current < scenes.length - 1) {
    current++;
    showScene(current);
  }
}, 9000);

/* Shooting stars */
function shootStar() {
  const star = document.createElement("div");
  star.className = "shooting-star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 40 + "vh";
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
}

/* Typing effect */
const text = "Happy Birthday, Hrid 💙🌌";
let index = 0;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (typingEl && index < text.length) {
    typingEl.innerHTML += text.charAt(index++);
    setTimeout(typeEffect, 120);
  }
}
setTimeout(typeEffect, 45000);

/* Music */
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
  bgMusic.volume = 0.4;
  bgMusic.play();
  musicBtn.style.display = "none";
});

/* Sparkle on click */
document.addEventListener("click", e => {
  for (let i = 0; i < 6; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.textContent = "✨";
    s.style.left = e.clientX + Math.random() * 30 - 15 + "px";
    s.style.top = e.clientY + Math.random() * 30 - 15 + "px";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
});

/* Mobile swipe */
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  const diff = startX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0 && current < scenes.length - 1) current++;
    else if (diff < 0 && current > 0) current--;
    showScene(current);
  }
});



