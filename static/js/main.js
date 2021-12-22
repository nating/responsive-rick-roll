
const RICK_MP3 = 'https://archive.org/download/rick-astley-never-gonna-give-you-up/Rick%20Astley%20-%20Never%20Gonna%20Give%20You%20Up.mp3';
const audio =new Audio(RICK_MP3);
const button = document.getElementById('button');
const overlay = document.getElementById('overlay');

// Load the YouTube iframe API the recommended way: https://stackoverflow.com/a/37284248/7852784
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    	console.log('0');
    player = new YT.Player('player', {
      width: '100%',
      videoId: 'dQw4w9WgXcQ',
      playerVars: { 'controls': 0, 'info': 0 },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

    function onPlayerReady(event) {
    	console.log('1');
     button.onclick = e => {
    	console.log('2');
        event.target.playVideo();
    	console.log('3');
  overlay.classList.add('hidden');
    	console.log('4');
     }
  }
