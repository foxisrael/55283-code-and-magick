'use strict';

window.initializeSetup = (function () {
  var setup = document.querySelector('.setup');
  var nameField = setup.querySelector('.setup-user-name');
  var wizardCoat = setup.querySelector('#wizard-coat');
  var wizardEyes = setup.querySelector('#wizard-eyes');
  var fireballWrap = setup.querySelector('.setup-fireball-wrap');
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];
  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'];
  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'];

  nameField.required = true;
  nameField.maxLength = 50;

  window.colorizeElement(wizardCoat, coatColors, 'fill');
  window.colorizeElement(wizardEyes, eyesColors, 'fill');
  window.colorizeElement(fireballWrap, fireballColors, 'background');
})();
