
const RICK_MP3 = 'https://archive.org/download/rick-astley-never-gonna-give-you-up/Rick%20Astley%20-%20Never%20Gonna%20Give%20You%20Up.mp3';
const audio =new Audio(RICK_MP3);
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
