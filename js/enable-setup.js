'use strict';

window.enableSetup = (function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = setup.querySelector('.setup-submit');

  var ENTER_KEY_CODE = 13;
  var ESC_KEY_CODE = 27;

  // проверяем, было ли нажатие на enter
  function isEnterEvent(evt) {
    return evt.keyCode === ENTER_KEY_CODE;
  }

  // если было нажатие на esc, прячем setup
  function setupKeydownHandler(evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
      hideSetup();
    }
  }

  // показываем setup, убирая класс invisible
  function showSetup() {
    setup.classList.remove('invisible');
    document.addEventListener('keydown', setupKeydownHandler);
    togglePressed();
  }

  // прячем setup, добавляя класс invisible, и перестаем слушать нажатия на esc
  function hideSetup() {
    setup.classList.add('invisible');
    document.removeEventListener('keydown', setupKeydownHandler);
    togglePressed();
  }

  // переключаем атрибут aria-pressed
  function togglePressed() {
    var pressed = (setupOpenIcon.getAttribute('aria-pressed') === 'true');
    setupOpenIcon.setAttribute('aria-pressed', !pressed);
  }

  // показываем setup по клику на иконку
  setupOpen.addEventListener('click', function (evt) {
    showSetup();
  });

  // показываем setup по нажатию Enter, если фокус на иконке
  setupOpen.addEventListener('keydown', function (evt) {
    if (isEnterEvent(evt)) {
      showSetup();
    }
  });

  // прячем setup по клику на крестик
  setupClose.addEventListener('click', function () {
    hideSetup();
  });

  // прячем setup по нажатию Enter, если фокус на крестике
  setupClose.addEventListener('keydown', function (evt) {
    if (isEnterEvent(evt)) {
      hideSetup();
    }
  });

  // прячем setup по нажатию на Enter, если фокус на кнопке сохранить
  setupSubmit.addEventListener('keydown', function (evt) {
    if (isEnterEvent(evt)) {
      hideSetup();
    }
  });

})();
