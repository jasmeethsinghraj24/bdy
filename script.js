document.addEventListener("DOMContentLoaded", () => {

  // 🎂 5 FEB 12:00 AM IST
 const birthday = new Date("2026-02-05T00:00:00+05:30").getTime();


  const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;

if (distance <= 0) {
  clearInterval(timerInterval);

  // 🎉 Change heading
  document.querySelector(".countdown h2").innerText =
    "It’s Your Day 🎉";

  // ⏳ Hide timer
  document.getElementById("timer").style.display = "none";

  // 🔓 UNLOCK GALLERY
  const gallery = document.getElementById("gallery");
  if (gallery) {
    gallery.classList.remove("locked");
    gallery.classList.add("unlocked");
  }

  // 🗑️ Remove lock text
  const lockText = document.querySelector(".lock-text");
  if (lockText) {
    lockText.remove();
  }

  // 💌 SHOW SECRET NOTE
const secretNote = document.getElementById("secretNote");
if (secretNote) {
  secretNote.classList.remove("hidden");
  setTimeout(() => {
    secretNote.classList.add("show");
  }, 500); // slight delay = emotional pause
}

// 🎊 PAPER BLAST
startConfetti();


  // 🎵 OPTIONAL: auto-play music at midnight
  // bgMusic.volume = 0.3;
  // bgMusic.play();

  return;
}


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

  }, 1000);
});

function startConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#ffd6e0", "#fff", "#fce38a", "#eaffd0", "#cdb4db"];

  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration =
      Math.random() * 2 + 3 + "s";

    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// 🎊 CONFETTI ON PAGE LOAD
window.addEventListener("load", () => {
  startConfetti();
});



