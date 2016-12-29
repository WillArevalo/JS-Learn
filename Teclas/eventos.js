var estado = 0;          // estado del click      
var area = document.getElementById('area_dibujo');
var papel = area.getContext("2d");
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y 
var ancho = area.width
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };
var texto = document.getElementById("texto_lineas");
var color = document.getElementById("colores"); // color a la linea
var botonClear = document.getElementById("botonLimpiar");
var botonRojo = document.getElementById('botonRojo');
var botonVerde = document.getElementById('botonVerde');
var botonAzul = document.getElementById('botonAzul');
var boton = document.getElementById("boton");
var botoncito = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
botoncito.addEventListener("click",dibujoSara);
botonClear.addEventListener("click", fClear);
botonRojo.addEventListener('click', cambiarColorRojo);
botonVerde.addEventListener('click', cambiarColorVerde);
botonAzul.addEventListener('click', cambiarColorAzul);
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse
document.addEventListener("keydown", dibujarTeclado);	//Con keydown se presiona  
														//continuamente, mientras que con 
														//keyup solo cuando se suelta
// dibujo del borde
color.value = '#151515';
dibujarLinea(color, 0, 0, 300, 0, papel)
dibujarLinea(color, 300, 0, 300, 300, papel)
dibujarLinea(color, 300, 300, 0, 300, papel)
dibujarLinea(color, 0, 300, 0, 0, papel)

// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(color, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}
//Funcion para dibujar la linea
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color.value;          // Estilo de trazo (color)
  lienzo.lineWidth = 1;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}
function cambiarColorRojo() {
  color.value = '#FF0000';
}
function cambiarColorVerde() {
  color.value = '#00FF00';
}
function cambiarColorAzul() {
  color.value = '#0000FF';
}
function fClear()
{
	color.value = '#151515';
	papel.clearRect(0, 0, area_dibujo.width, area_dibujo.height);
	dibujarLinea(color, 0, 0, 300, 0, papel)
	dibujarLinea(color, 300, 0, 300, 300, papel)
	dibujarLinea(color, 300, 300, 0, 300, papel)
	dibujarLinea(color, 0, 300, 0, 0, papel)
}
function dibujoSara()
{
	alert("Te amo muchisisisisisimo princesa.\nOtra forma de hacerte un corazon linda");
	papel.clearRect(0, 0, 300, 300);
	papel.beginPath();
    papel.moveTo(75,40);
    papel.bezierCurveTo(75,37,70,25,50,25);
    papel.bezierCurveTo(20,25,20,62.5,20,62.5);
    papel.bezierCurveTo(20,80,40,102,75,120);
    papel.bezierCurveTo(110,102,130,80,130,62.5);
    papel.bezierCurveTo(130,62.5,130,25,100,25);
    papel.bezierCurveTo(85,25,75,37,75,40);
    papel.fillStyle = color.value;
    papel.fill();
}
function dibujarTeclado(evento)
{	
	//Document es importante se puede usar console.log para identificar
	//console.log("Tecla oprimida"); Mensaje en consola
	//console.log(evento); detecta todo el evento keyup
	//console.log(evento.keyCode); //Algo asi como el codigo ascii del motor.	
	//if(evento.keyCode == teclas.UP)
	//{
	//	console.log("Vamo pa arriba");
	//}
	//var colorcito = "red";
	var movimiento = 1;
	switch (evento.keyCode)
	{
		case teclas.UP:
			color.value = "#FF0040";
			dibujarLinea(color, x, y, x, y - movimiento, papel);
			y = y - movimiento;
		break;
		case teclas.DOWN:
			color.value = "#58FAF4";
			dibujarLinea(color, x, y, x, y + movimiento, papel);
			y = y + movimiento;
		break;
		case teclas.LEFT:
			color.value = "#40FF00";
			dibujarLinea(color, x, y, x - movimiento, y, papel);
			x = x - movimiento;
		break;
		case teclas.RIGHT:
			color.value = "#FF8000";
			dibujarLinea(color, x, y, x + movimiento, y, papel);
			x = x + movimiento;
		break;
	}
}
function dibujoPorClick()
{
	papel.clearRect(0, 0, area_dibujo.width, area_dibujo.height);/* limpia el canvas*/
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
		xfo = area_dibujo.width - (l * espacio);
		color.value = "#FF0000";
		dibujarLinea(color, 0, yi, xf, 300, papel);
		color.value = "#FFFF00";
		dibujarLinea(color, yi, 300, 300, xfo, papel);
		color.value = "#00FF00";
		dibujarLinea(color, 0, xfo, yi, 0, papel);
		color.value = "#00FFFF";
		dibujarLinea(color, yi, 0, 300, xf, papel); 
		l++;
		
	}
}