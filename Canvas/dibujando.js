var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
var botoncito = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);/*Evento encima del boton mouseover, focus*/
var d;
botoncito.addEventListener("click",dibujoSara);
var lienzo;
d = document.getElementById("dibujito");//Se almacena el canvas
lienzo = d.getContext("2d");//Metodo del Objeto Canvas
var ancho = d.width;
dibujarLinea("#FFFF00", 1, 1, 1, 299); 
dibujarLinea("#FFFF00", 1, 1, 299, 1); 
dibujarLinea("#FFFF00", 299, 1, 299, 299); 
dibujarLinea("#FFFF00", 299, 299, 1, 299); 
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
/*Ciclo For
for(l = 0; l < lineas; l++)
*/
function dibujoPorClick()
{
	lienzo.clearRect(0, 0, dibujito.width, dibujito.height);/* limpia el canvas*/
	/*ancho/lineas=espacio*/
	var x = parseInt(texto.value);
	var lineas = x;
	var l = 0;
	var yi, xf, xfo;
	var espacio = ancho / lineas;
	while(l < lineas)
	{
		yi = espacio * l;
		xf = espacio * (l + 1);
		xfo = 300 - (l * espacio);
		dibujarLinea("green", 0, yi, xf, 300);
		dibujarLinea("orange", yi, 300, 300, xfo);
		dibujarLinea("blue", 0, xfo, yi, 0);
		dibujarLinea("red", yi, 0, 300, xf); 
		l++;
		console.log("Linea " + l);
	}
}
function dibujoSara()
{
	alert("Te amo muchisisisisisimo princesa.\nOtra forma de hacerte un corazon linda");
	lienzo.clearRect(0, 0, 300, 300);
	lienzo.beginPath();
    lienzo.moveTo(75,40);
    lienzo.bezierCurveTo(75,37,70,25,50,25);
    lienzo.bezierCurveTo(20,25,20,62.5,20,62.5);
    lienzo.bezierCurveTo(20,80,40,102,75,120);
    lienzo.bezierCurveTo(110,102,130,80,130,62.5);
    lienzo.bezierCurveTo(130,62.5,130,25,100,25);
    lienzo.bezierCurveTo(85,25,75,37,75,40);
    lienzo.fillStyle = "red";
    lienzo.fill();
}