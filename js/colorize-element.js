'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = colors[0];
  function setRandomColor() {
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = newColor;
    currentColor = newColor;
  }

  element.addEventListener('click', function () {
    setRandomColor();
  });

  element.addEventListener('keydown', function (evt) {
    if (window.isEnterEvent(evt)) {
      setRandomColor();
    }
  });
};
