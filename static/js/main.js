

var roll = function(){
  document.getElementById("overlay").classList.add('hidden');
  document.getElementById('iframe').src = document.getElementById('iframe').dataset.src + '?autoplay=1';
}