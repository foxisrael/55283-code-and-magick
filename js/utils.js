'use strict';

window.utils = {
  getRandomElement: function (array) {
    var random = (Math.random() * (array.length - 1)).toFixed(0);
    return array[random];
  },
  getRandomElementExcept: function (array, arrayElement) {
    var randomElement = window.utils.getRandomElement(array);
    while (randomElement === arrayElement) {
      randomElement = window.utils.getRandomElement(array);
    }
    return randomElement;
  }
};
