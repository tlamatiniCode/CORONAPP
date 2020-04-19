(function(){	
	//input control	
	this.regEx 			  = /[0-9]{4,8}\d/;	
	
	//Lang button
	this.buttonLang = ["Español","English","Fran&#231;ais","Italiano","Portugu&#234;s","Deutsch"]
	//literales por defecto.
	this.statusTest 	  = ["NO testado",
							"ID no v&#225;lido.",
							"SOLICITANDO",
							"SOLICITADO",
							"TESTADO",
							"IDIOMA"];

	this.statusResultTest =	["RECUPERADO",
							"POSITIVO",
							"NEGATIVO"];
	
	this.boton 			  = ["CONFIRMAR",
							"M&#201;DICO"];
					
	this.textos 		  = ["Te gustar&#237;a solicitar un tests?",
							"Elige tu prioridad",
							"En breve le avisaremos.<br>Se solicit&#243; el : ",
							"Se ha realizado el test quiere camibar el estado ?",
							"Resultado del test : ",
							"Su estado actual es : "];
	
	this.prioridades 	  = ["TRABAJO - necesita salir.",
							"ESTUDIANTE - terminar el curso.", 
							"OTROS - pensionistas, etc."];
})();


function changeCulture(num){
	
	//Lang options
	var lang = ["es-ES","en-US","fr-FR","it-IT","pt-PT","de-DE"];
	document.body.lang = lang[num];
	
	//Español
	if(num == 0){
		statusTest = ["NO testado","ID no v&#225;lido.","SOLICITANDO","SOLICITADO","TESTADO","IDIOMA"];
		statusResultTest =	["RECUPERADO","POSITIVO","NEGATIVO"];
		boton = ["CONFIRMAR","M&#201;DICO"];
		textos = ["Te gustar&#237;a solicitar un tests?","Elige tu prioridad","En breve le avisaremos.<br>Se solicit&#243; el : ","Se ha realizado el test quiere camibar el estado ?","Resultado del test : ","Su estado actual es : "];
		prioridades = ["TRABAJO - necesita salir.","ESTUDIANTE - terminar el curso.","OTROS - pensionistas, etc."];
		return;
	//English					
	}else if(num == 1){
		statusTest = ["NOT tested","ID not valid.","APPLYING","APPLIED","TESTED","LANGUAGE"];
		statusResultTest = ["RECOVERED","POSITIVE","NEGATIVE"];
		boton = ["CONFIRM","DOCTOR"];				
		textos = ["Would you like to apply for a test?","Choose your priority","Soon you will be notified.<br> It was requested the :","The test was performed want to change the status ?","Test result :","Your current status is :"];
		prioridades = ["WORK - you need to get out.","STUDENT - finish the course.","OTHERS - pensioners, etc."];
	//Français				
	}else if(num == 2){			
		statusTest = ["NON test&#233;","identifiant non valide","DEMANDER","DEMAND&#201;","TESTE","LANGAGE"];	
		statusResultTest = ["R&#201;CUP&#201;R&#201;","POSITIF","N&#201;GATIF"];	
		boton = ["CONFIRMER","DOCTEUR"];
		textos = ["Souhaitez-vous demander un test?","Choisissez votre priorit&#233;","Nous vous en informerons sous peu.<br> Il a &#233;t&#233; demand&#233; :","Le test a-t-il &#233;t&#233; effectu&#233; voulez-vous changer le statut?","R&#233;sultat du test :","Son statut actuel est :"];
		prioridades = ["TRAVAIL - vous devez sortir.","&#201;TUDIANT - terminer le cours.","AUTRES - retrait&#233;s, etc."];
	return;
	//Italiano					
	}else if(num == 3){									
		statusTest = ["NON testato","ID non valido","APPLICARE","RICHIESTA","TESTATO","LINGUA"];	
		statusResultTest = ["RECUPERATO","POSITIVO","NEGATIVO"];	
		boton = ["ACCETTARE","MEDICO"];				
		textos = ["Vuoi richiedere un test?","Scegli la tua priorit&#224;","Ti informeremo a breve.<br>&#200; stata richiesta: ","Il test &#232; stato eseguito,, vuoi cambiare lo stato?","Risultato del test :","Il suo stato attuale &#200;:"];
		prioridades = ["LAVORO - devi uscire.","STUDENTE - termina il corso.","ALTRI - pensionati, ecc."];
	return;
	//Português				
	}else if(num == 4){					
		statusTest = ["N&#195;O testado","ID inv&#225;lido","SOLICITA&#199;&#195;O","SOLICITADO","TESTE","IDIOMA"];
		statusResultTest = ["RECUPERADO","POSITIVO","NEGATIVO"];	
		boton = ["CONFIRMAR","M&#201;DICO"];				
		textos = ["Voc&#234; gostaria de solicitar um teste?","Escolha sua prioridade","Em breve, você será notificado.<br>Foi solicitado:","O teste foi realizado, deseja alterar o status?","Resultado del test : ","Su estado actual es : "];
		prioridades = ["TRABALHO - voc&#234; precisa sair.","ALUNO - termine o curso.","OUTROS - pensionistas, etc."];
	return;
	//Deutsch					
	}else if(num == 5){									
		statusTest = ["NICHT getestet","ID nicht g&#252;ltig.","AUFBRINGEN","ANGEFORDERT","GETESTET","SPRACHE"];	
		statusResultTest = ["GEHEILT","POSITIV","NEGATIV"];	
		boton = ["BEST&#196;TIGEN","ARZT"];				
		textos = ["M&#246;chten sie einen test anfordern?","W&#228;hlen sie ihre priorit&#228;t","Wir werden sie in k&#252;rze benachrichtigen.<br> Wurde angefordert :","Wurde der test durchgeführt, m&#246;chten Sie den status &#228;ndern?","Testergebnis :","Der aktuelle status lautet :"];
		prioridades = ["ARBEITEN - Sie m&#252;ssen raus.","STUDENT - Abschluss des kurses.","ANDERE - Rentner usw."];
	return;
	}
}
