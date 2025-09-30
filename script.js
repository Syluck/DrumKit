const drums = document.querySelectorAll('.drum');

function playSound(button) {
  const audio = button.querySelector('audio');
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  button.classList.add('playing');
  setTimeout(() => button.classList.remove('playing'), 150);
}

drums.forEach(drum => {
  drum.addEventListener('click', () => {
    playSound(drum);
  });
});

document.addEventListener('keydown', e => {
  const drum = Array.from(drums).find(d => d.dataset.key === e.key.toUpperCase());
  if (drum) playSound(drum);
});
