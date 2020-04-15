(function(){	
	//input control	
	this.regEx = /[0-9]{4,8}\d/;	
	//texto result
	this.notesteado = "NO TEST";
	this.esperando = "ESPERANDO";
	this.testeado = "TESTEADO";
	
	this.estado = ["RECUPERADO","POSITIVO","NEGATIVO"];
	
	this.boton = "CAMBIAR";
	this.textoespera = "Su solicitud se esta procesando.";
	
	this.prioridades = ["TRABAJO - necesita salir.","ESTUDIANTE - terminar el curso.", "TELETRABAJO - puede esperar.", "OTROS - pensionistas, etc."]
})();
