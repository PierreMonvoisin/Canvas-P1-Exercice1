$(function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // Premier carré
  context.beginPath();
  context.moveTo(150, 150);
  context.lineTo(150, 105);
  context.strokeStyle = '#ADD8E6';
  context.lineWidth = 85;
  context.stroke();

  // Triangle
  context.beginPath();
  context.moveTo(192, 105);
  context.lineTo(108, 105);
  context.lineTo(150, 80);
  context.closePath();
  context.fillStyle = "#CD853F";
  context.fill();

  // Porte
  context.beginPath();
  context.moveTo(150, 150);
  context.lineTo(150, 130);
  context.strokeStyle = '#CACACA';
  context.lineWidth = 30;
  context.stroke();

  // Fenêtres
  context.beginPath();
  context.moveTo(130, 110);
  context.lineTo(130, 120);
  context.moveTo(170, 110);
  context.lineTo(170, 120);
  context.strokeStyle = '#CACACA';
  context.lineWidth = 20;
  context.stroke();
});
