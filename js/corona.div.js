
//functions enseñar estado
function showTest(usertext){
	this.user = usertext;
	var textodiv = user == undefined ? notesteado : usertext.texto;
	return divTest.innerHTML = `<span class="spanicon">${textodiv}</span>`;
}	

function showDiv(orNot,esMedico){
	var textodiv = "";
	
	if(orNot == undefined){
		for(var i = 0; i < prioridades.length ; i++){
			textodiv += `<div class="selecdiv divsin" value="${i+1}">${prioridades[i]}</div>`;
		}
	}else if(orNot === esperando){
		if(esMedico){
			for(var i = 0; i < estado.length ; i++){
				textodiv += `<div class="divestatus divsin" value="${i+1}">${estado[i]}</div>`;
			}
			return contenido.innerHTML = textodiv;
		}
		textodiv = `<div class="time" style="padding: 25px;">${textoespera} ${new Date()}</div>`;
	}else if(orNot === testeado){
		if(esMedico){
			return contenido.innerHTML = `<div class="cambiardiv" style="display:block">${boton}</div>`;
		}
		textodiv = "";
	}
	return contenido.innerHTML = textodiv;
}
