const startDate = new Date("May 6, 2024 09:46:00");

const poems = [
  "To Isha, my moon and sun — forever only you, my number one. 💗",
  "Isha, in your love I bloom, in your arms I find my home. 🌷",
  "Every heartbeat echoes your name, Isha. Always and only yours. 💘",
  "Even in chaos, you’re my calm — my softest song, Isha. 🎶",
  "You're not just my favorite — you're the only one, Isha. 💞",
  "Every poem begins and ends with you, Isha. You're my eternity. 🌙",
  "Your smile, Isha, lights up the darkest nights in my soul. ✨",
  "Isha — you turn ordinary into magic, silence into music. 💝",
  "No one else. Never. Just you, Isha. Always you. ❤️",
  "You're the love I never believed I deserved, Isha. Thank you for being mine. 💐",
  "With every blink, I fall deeper into you, Isha. You’re the dream I never want to wake from. 💭",
  "If I had a flower for every time I thought of you, Isha — I’d be lost in a garden of forever. 🌸",
  "Isha, you're the spark in my stars, the blush in my dawn, the peace in my chaos. 🌅",
  "I’d cross galaxies just to kiss your forehead and tell you how much I love you, Isha. 🚀",
  "Isha, you’re the song that plays on repeat in my soul — always soothing, always mine. 🎧",
  "You’re my favorite kind of madness, Isha. And I’d go crazy for you again and again. 🔥",
  "You and me, Isha — like poetry and passion, ink and heartbeats. Eternal. ✍️❤️",
  "Isha, if love were a painting, you’d be the most beautiful stroke of fate. 🎨",
  "Being with you is like breathing — effortless, necessary, and every breath tastes like you. 💋",
  "Isha, I’d relive every moment before us just to meet you sooner. 🕰️",
  "Isha, you’re the giggle in my silence, the dance in my stillness, the everything in my nothing. 💃🕊️"
];

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML = 
    `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}

function updatePoem() {
  const poemIndex = Math.floor(Math.random() * poems.length);
  document.getElementById("poem").innerText = poems[poemIndex];
}

function openPic() {
  document.getElementById("popup").style.display = "flex";
}

function closePic() {
  document.getElementById("popup").style.display = "none";
}

setInterval(updateTimer, 1000);
setInterval(updatePoem, 10000);

updateTimer();
updatePoem();
