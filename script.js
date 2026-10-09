
const weddingDate = new Date("2026-12-20T11:00:00+07:00");

document.querySelector("#openInvitation").addEventListener("click", () => {
  document.querySelector("#invitation").hidden = false;
  document.querySelector("#invitation").scrollIntoView({
    behavior: "smooth"
  });
});

function updateCountdown() {
  const diff = weddingDate.getTime() - Date.now();
  const output = document.querySelector("#countdown");

  if (diff <= 0) {
    output.textContent = "Ngày vui đã đến ❤️";
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  output.textContent =
    `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Thay địa chỉ bằng địa điểm cưới thật
const address = "Hội trường cưới, Hà Nội";
document.querySelector("#mapLink").href =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(address);

// Nhạc: cần thao tác của khách để phát
const audio = document.querySelector("#weddingMusic");
const musicButton = document.querySelector("#musicToggle");

musicButton.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicButton.textContent = "Tạm dừng nhạc ♪";
    } catch {
      musicButton.textContent = "Không phát được nhạc, hãy thử lại";
    }
  } else {
    audio.pause();
    musicButton.textContent = "Phát nhạc ♫";
  }
});