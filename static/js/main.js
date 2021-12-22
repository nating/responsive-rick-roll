
document.getElementById('btn').onclick = e => {
  document.getElementById('vid').play();
  document.getElementById('overlay').classList.add('hidden');
}

/*
var roll = function(){
  document.getElementById('overlay').classList.add('hidden');
  document.getElementById('iframe').src += '&autoplay=1';
}
*/