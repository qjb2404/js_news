document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px';

window.addEventListener('load', function () {
  FastClick.attach(document.body);
}, false);

document.documentElement.addEventListener('touchmove', function (event) {
  if (event.touches.length > 1) {
  	event.preventDefault();
  }
}, false);