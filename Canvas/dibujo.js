var d;
var lienzo;
d = document.getElementById("dibujito");
lienzo = d.getContext("2d");
/*
###getElementByID es un metodo de document_ que trae un elemento
###atravez del ID
###getContext es un metodo del canvas qeu trae la forma en que se  dibujara 2d, 3D
###beginPatch inicia el trazo del dibujo, stroke lo marca, y closePatch lo cierra
*/
console.log(lienzo);
lienzo.beginPath();
lienzo.strokeStyle = "#01DF3A";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();
/*Funcion*/
dibujarLineas("pink", 10 , 300, 220, 10)
dibujarLineas("yellow", 50 , 80, 90, 180)
function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
