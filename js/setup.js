'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var nameField = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('#wizard-coat');
var wizardEyes = setup.querySelector('#wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');
var setupSubmit = setup.querySelector('.setup-submit');
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
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

// Проверка на нажатие ENTER
function isEnterEvent(evt) {
  return evt.keyCode === ENTER_KEY_CODE;
}

// Проверка на нажатие ESC, закрытие окна
function isEscEvent(evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    hideSetup();
  }
}

// Показываем setup
function showSetup() {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', isEscEvent);
  togglePressed();
  toggleHidden();
}

// Прячем setup
function hideSetup() {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', isEscEvent);
  togglePressed();
  toggleHidden();
}

// Переключение атрибута aria-pressed
function togglePressed() {
  var pressed = (setupOpenIcon.getAttribute('aria-pressed') === 'true');
  setupOpenIcon.setAttribute('aria-pressed', !pressed);
}

// Переключение атрибута aria-hidden
function toggleHidden() {
  var pressed = (setup.getAttribute('aria-hidden') === 'true');
  setup.setAttribute('aria-hidden', !pressed);
}

// Открытие SETUP по клику
setupOpen.addEventListener('click', function (evt) {
  showSetup();
});

// Открытие SETUP по нажатию Enter
setupOpen.addEventListener('keydown', function (evt) {
  if (isEnterEvent(evt)) {
    showSetup();
  }
});

// Прячем SETUP по клику
setupClose.addEventListener('click', function () {
  hideSetup();
});

// Прячем SETUP по нажатию Enter
setupClose.addEventListener('keydown', function (evt) {
  if (isEnterEvent(evt)) {
    hideSetup();
  }
});

// Прячем SETUP, если фокус на кнопке СОХРАНИТЬ
setupSubmit.addEventListener('keydown', function (evt) {
  if (isEnterEvent(evt)) {
    hideSetup();
  }
});

// Смена цветов
window.colorizeElement(wizardCoat, coatColors, 'fill');
window.colorizeElement(wizardEyes, eyesColors, 'fill');
window.colorizeElement(fireballWrap, fireballColors, 'background');

// Требования
nameField.required = true;
nameField.maxLength = 50;
