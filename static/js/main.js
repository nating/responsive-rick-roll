
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('video', {
    videoId: 'dQw4w9WgXcQ',
    playerVars: {
      controls: 0,
      loop: 1,
      modestbranding: 1,
    },
    events: {
      'onReady': (event) => {
        const button = document.getElementById('button');
        const overlay = document.getElementById('overlay');
        button.onclick = () => {
          event.target.playVideo();
          overlay.classList.add('hidden');
        }
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.ENDED) {
          event.target.playVideo();
        }
      }
    }
  });
}
