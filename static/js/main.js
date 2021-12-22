
const button = document.getElementById('button');
const overlay = document.getElementById('overlay');

// Load the YouTube iframe API the recommended way: https://stackoverflow.com/a/37284248/7852784
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    videoId: 'dQw4w9WgXcQ',
    playerVars: {
      'controls': 0,
      'autohide': 1,
      'showinfo' : 0,
      'loop': 1,
      'modestbranding': 1
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  button.onclick = e => {
    event.target.playVideo();
    overlay.classList.add('hidden');
  }
}
