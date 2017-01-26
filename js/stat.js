'use strict';

//Рисуем прямоугольник
function drawRect(ctx, rect) {
  ctx.fillStyle = rect.fillColor;
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  if (rect.strokeColor) {
    ctx.strokeStyle = rect.strokeColor;
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
  }
}

//Находим в массиве максимальное значение
function getMaxValue(times) {
  var max = 0;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
}

//Рендом цвет
function getRandomColor() {
  var randomBlue = (Math.random() * 255).toFixed(0);
  var randomOpacity = (Math.random()).toFixed(1);
  if (randomOpacity === 0) {
    return 'rgba(0,0,' + randomBlue + ',0.2)';
  } else {
    return 'rgba(0,0,' + randomBlue + ',' + randomOpacity + ')';
  }
}

//Смещение по Х
function getIndentX(histoX, columnIndent, i) {
  return histoX + columnIndent * i;
}

//Смещение по У
function getIndentY(histoY, histoHeight, height) {
  return histoY + histoHeight - height;
}

window.renderStatistics = function(ctx, names, times) {
  //Прямоугольник холста и тень
  drawRect(ctx, {
    x: 110,
    y: 20,
    width: 420,
    height: 270,
    fillColor: 'rgba(0,0,0,0.7)'
  });
  drawRect(ctx, {
    x: 100,
    y: 10,
    width: 420,
    height: 270,
    fillColor: 'white',
    strokeColor: 'rgba(0,0,0,0.7)'
  });

  //Заголовок
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  //Параметры гистограммы
  var histoHeight = 150;
  var histoX = 120;
  var histoY = 100;
  var step = histoHeight / getMaxValue(times);
  var columnIndent = 90;

  //Идем по данным массива
  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * (time);

    //Вычисление смещения по Х и У
    var indentX = getIndentX(histoX, columnIndent, i);
    var indentY = getIndentY(histoY, histoHeight, height);

    //Вывод времени игрока
    ctx.fillText(time.toFixed(0), indentX, indentY - 10);

    //Размер столбика
    var column = {
      x: indentX,
      y: indentY,
      width: 40,
      height: height
    }

    //ВЫ - красный цвет
    if (name === 'Вы') {
      column.fillColor = 'rgba(255, 0, 0, 1)';
      drawRect(ctx, column);
    } else {
      column.fillColor = getRandomColor();
      drawRect(ctx, column);
    }

    //Вывод имени игрока
    ctx.fillStyle = '#000';
    ctx.fillText(name, indentX, histoHeight + 120);
  }
}

var canvas = document.querySelector('canvas');
renderStatistics(canvas.getContext('2d'), ['Вы', 'Кекс', 'Катя', 'Игорь'], [2725, 4025, 1244, 1339]);
