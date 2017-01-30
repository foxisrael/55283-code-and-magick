'use strict';
//Переменные открытия окна
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

//Открытия и закрытия окна
setupOpen.addEventListener('click', function() {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function() {
  setup.classList.add('invisible');
});

//Валидация формы
var nameField = document.querySelector('.setup-user-name');
nameField.required = true;
nameField.maxlength = 50;

//Переменные одежки и файерболла мага
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardFireBall = document.querySelector('.setup-fireball-wrap');

//Смена цвета плаща мага
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

wizard.addEventListener('click', function() {
  var colorNumber = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorNumber];
});

//Смена цвета глаз мага
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

wizard.addEventListener('click', function() {
  var colorNumber = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardCoatColors[colorNumber];
});

//Смена цвета файерболла мага
var wizardFireBallColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

wizard.addEventListener('click', function() {
  var colorNumber = Math.floor(Math.random() * wizardEyesColors.length);
  wizardFireBall.style.background = wizardFireBallColors[colorNumber];
});
