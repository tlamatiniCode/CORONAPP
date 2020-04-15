(function(){	
	//input control	
        this.regEx = /[0-9]{4,8}\d/;	
	
	//literales
	this.statusTest = ["NO testeado",
			"ID no válido.",
			"SOLICITANDO",
			"SOLICITADO",
			"TESTEADO"]

	this.statusResultTest =	["RECUPERADO",
			"POSITIVO",
			"NEGATIVO"];
	
	this.boton = ["CONFIRMAR",
			"MEDICO"];
					
	this.textos = ["Te gustaría solicitar un tests?",
			"Elige tu prioridad",
			"En breve le avisaremos.<br>Se solicitó el : ",
			"Se ha realizado el test quiere camibar el estado ?",
			"Resultado del test : ",
			"Su estado actual es : "];
	
	this.prioridades = ["TRABAJO - necesita salir.",
			"ESTUDIANTE - terminar el curso.", 
			"OTROS - pensionistas, etc."];

})();
