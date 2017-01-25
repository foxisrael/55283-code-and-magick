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

  var max = times[0];
  for (var i = 1; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = 120;
  var step = histoHeight / max;
  var columnIndent = 100;
  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time;

    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(histoX + columnIndent * i, 100, 40, height);
    ctx.fillText(name, histoX + columnIndent * i, histoHeight - 60);
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 100 + histoHeight + 20);
  }
};

var canvas = document.querySelector('canvas');
renderStatistics(canvas.getContext('2d'), ['Вы', 'Кекс', 'Катя', 'Игорь'], [2725, 4025, 1244, 1339]);
