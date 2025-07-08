function revealSurprise() {
  document.getElementById("main").classList.add("hidden");
  document.getElementById("surprise").classList.remove("hidden");

  // Play background music
  const music = document.getElementById("bg-music");
  music.play();

  // Start confetti
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
function revealSurprise() {
  document.getElementById("main").classList.add("hidden");
  document.getElementById("surprise").classList.remove("hidden");

  // Play background music after user interaction
  const music = document.getElementById("bg-music");
  music.muted = false; // unmute karo
  music.volume = 0.7; // thoda soft volume
  music.play().catch(err => console.log("Play failed:", err));

  // Confetti
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
