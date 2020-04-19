//Funcione para mostrar contenido y estado del test;

function showMe(spanTexto, divTexto, esMedico){
	
	//Si key borramos por defecto.
	var textoDiv = "";
	var textoSpan = spanFormatter(spanTexto);	
	//Si no esta testeado
	if(spanTexto == statusTest[0]){
		doctor.classList.remove("selectoptactivo");
		textoDiv = '<div class="textos">'+divTexto+'</div><div class="confirmar">'+boton[0]+'</div>';
	//Confirmar solicitar	
	}else if(spanTexto == statusTest[2]){
		doctor.classList.remove("selectoptactivo");
		textoDiv = '<div class="textos">'+divTexto+'</div>';
		for(var i = 0; i < prioridades.length ; i++){
			textoDiv += '<div class="selecdiv divsin" value="'+i+'">'+prioridades[i]+'</div>';
		}		
	//Solicitado medico
	}else if(spanTexto == statusTest[3] && esMedico){
		doctor.classList.remove("selectoptactivo");
		textoDiv = '<div class="textos">'+divTexto+'</div><div class="confirmar">'+boton[0]+'</div>';
	//Solicitado muestra fechas
	}else if(spanTexto == statusTest[3]){
		
		textoDiv = '<div class="textos">'+divTexto+'<br>'+user.fecha+'</div>';
		doctor.classList.add("selectoptactivo");		
	//Confirmar estado
	}else if(spanTexto == statusTest[4] && esMedico){
		doctor.classList.remove("selectoptactivo");
		textoDiv = '<div class="textos">'+divTexto+'</div>';
		for(var i = 0; i < statusResultTest.length ; i++){
			textoDiv += '<div class="divestatus divsin" value="'+i+'">'+statusResultTest[i]+'</div>';
		}
	//Mostrar estado del test
	}else if(spanTexto == statusTest[4]){
		
		textoDiv = '<div class="textos">'+divTexto+'<br>'+user.resultado+'</div>';
		doctor.classList.add("selectoptactivo");
	//Forzar borrado general.
	}else if(spanTexto == undefined){
		doctor.classList.remove("selectoptactivo");
		nuevoUser.classList.remove("activado");
		inputid.value = "";
		var textoSpan = "";		
	//Idioma
	}else if(spanTexto == statusTest[5]){
		if(buttonCul.classList.contains("culturestyle")){
			buttonCul.classList.replace("culturestyle","culturestyleactive");
			this.guardaContenido = contenido.innerHTML;
			this.guardaDiv = divTest.innerHTML;
			for(var i = 0; i < buttonLang.length; i++){
				textoDiv += '<div class="culture divsin" value="'+i+'">'+buttonLang[i]+'</div>';
			}
		}else if(buttonCul.classList.contains("culturestyleactive")){
			buttonCul.classList.replace("culturestyleactive","culturestyle");
			divTest.innerHTML = guardaDiv;
			contenido.innerHTML = guardaContenido;
			return;
		}
	//Mail - bugs	
	}
	divTest.innerHTML = textoSpan;
	contenido.innerHTML = textoDiv;
}

//formar span enseñar estado
function spanFormatter(param){
	return '<span class="spanicon">'+param+'</span>';
}
//Devolver valor seleccionado
function getVal(div){	
	return div.attributes.value.value;
}
function getDate(){
	var d = new Date();
	return d.toDateString();
}



