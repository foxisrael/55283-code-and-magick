'use strict';
//Рисую канвас
window.renderStatistics = function(ctx, names, times) {
  //Тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  //Холст
  ctx.fillStyle = '#fff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  //Текст
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

//Обращаемся к массивам
  //Не понял, что за переменная max. Для чего она?
  var max = -1;

  //Перебираем данные в массиве, вопрос почему только в массиве со временем?
  for (var i = 0; i < times.length; i++) {
    //Вот после этого я не понял...
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  //Тут рисуем гистограмму
  //Высота гистограммы
  var histoHeight = 150;

  //Не понял, что это такое
  var histoX = 120;

  //Высота отдельных результатов
  var step = histoHeight / max;

  //Ширина отдельных результатов
  var columnIndent = 40;

  //Опять ниже все не понял
  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time;

    ctx.fillStyle = '#000';

    //Вот эти строки не понял совсем
    ctx.fillRect(histoX + columnIndent * i, 100, 40, height);
    ctx.fillText(name + ':' + time.toFixed(0), histoX + columnIndent * i, 100 + histoHeight + 20);
  }
};

var canvas = document.querySelector('canvas');
renderStatistics(canvas.getContext('2d'), ['Вы', 'Кекс', 'Катя', 'Игорь'], [2725, 4025, 1244, 1339]);
