class Pakiman
{
	//n=nombre, v=vida, a=ataque
	constructor(n, v, a)
	{
		this.imagen = new Image();
		this.nombre = n;
		this.vida = v;
		this.ataque = a;
		this.imagen.src = imagenes[this.nombre];
	}
	hablar()
	{
		alert(this.nombre);
	}
	mostrar()
	{
		document.write("<hr />");
		document.body.appendChild(this.imagen);
		document.write("<br /><p>");
		document.write("<strong><i>" + this.nombre + "</i></strong><br />");
		document.write("Vida: " + this.vida + "<br />");
		document.write("Ataque: " + this.ataque + "<br />");
		document.write("</p>");
	}
}
