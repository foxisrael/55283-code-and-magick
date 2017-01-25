'use strict';

window.renderStatistics = function(ctx, names, times) {
  //Рисую канвас
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

  //Вычисляем самое большое значение
  var max = times[0];
  for (var i = 1; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  };

  //Вычисляем смещение по X
  function getIndentX(histoX, columnIndent, i) {
    return histoX + columnIndent * i;
  }

  //Вычисляем смещение по Y
  function getIndentY(histoY, histoHeight, height) {
    return histoY + histoHeight - height;
  }

  //Объявляем параметры гистаграммы
  var histoHeight = 150; //высота гистограммы
  var histoX = 120; //начальная точка Х
  var histoY = 100; //начальная точка У
  var step = histoHeight / max;
  var columnIndent = 90;

  //идем по массивам
  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time

    //вычисляем смещение по X и Y
    var indentX = getIndentX(histoX, columnIndent, i);
    var indentY = getIndentY(histoY, histoHeight, height);

    //рисуем графическую ячейку
    ctx.fillRect(indentX, indentY, 40, height);

    //рисуем имя игрока
    ctx.fillText(name, histoX + columnIndent * i, indentY - 10);

    //рисуем время игрока
    ctx.fillText(time.toFixed(0), indentX, histoHeight + 120);
  }
};

var canvas = document.querySelector('canvas');
renderStatistics(canvas.getContext('2d'), ['Вы', 'Кекс', 'Катя', 'Игорь'], [2725, 4025, 1244, 1339]);
