
const button = document.getElementById('button');
const overlay = document.getElementById('overlay');

button.onclick = e => {
  new YT.Player('video', {
    videoId: 'dQw4w9WgXcQ',
    playerVars: { 'autoplay': 1, 'controls': 0, 'info': 0 },
    events: {
      'onReady': (event) => {
        event.target.playVideo();
      }
    },
  });
  overlay.classList.add('hidden');
}
