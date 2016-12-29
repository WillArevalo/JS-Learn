alert("Hola si sirve");
var d;
var lienzo;
var lineas = 30;
var l = 0;
d = document.getElementById("dibujito");
lienzo = d.getContext("2d");
/*
###getElementByID es un metodo de document_ que trae un elemento
###atravez del ID
###getContext es un metodo del canvas qeu trae la forma en que se  dibujara 2d, 3D
###beginPatch inicia el trazo del dibujo, stroke lo marca, y closePatch lo cierra
*/

while(1 < lineas)
{
	dibujarLineas("red", 0 , 0, 10, 300);
	console.log("Linea " + l);
	l = l + 1;
}

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}