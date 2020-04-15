/*
  	Este archivo esta realizado por Alain Forton para el proyecto CORONAPP de Tlamatini_code Projectos open source.
	<https://github.com/tlamatiniCode>
*/


start((function(){
	//var = elements.
	this.inputid = document.getElementById("inputID");
	this.addid = document.getElementById("newID");
	this.search = document.getElementById("searchID");	
	this.divTest = document.getElementById("test");	
	this.doctor = document.getElementById("medic");
	this.contenido = document.getElementById("contenidochange");
	
	
	//functions eventos	
	//Buscador - key
	inputid.addEventListener("keyup", function(){			
		addid.classList.remove("activado");
		doctor.classList.remove("selectoptactivo");
		showDiv(false);
		divTest.innerHTML = "";
		var activo = !regEx.test(this.value) 
							? search.classList.remove("activado") 
							: search.classList.add("activado");			
	},false);
	//Buscador - click
	search.addEventListener("click", function(){
		if(this.classList.contains("activado")){
			for(var i = 0; i < users.length; i++){
				if(inputid.value.toString() === users[i].id){
					search.classList.remove("activado");
					doctor.classList.add("selectoptactivo");
					showTest(users[i]);
					showDiv(users[i].texto);					
					return;
				}
				else if(i === users.length - 1){
					showTest();
					showDiv();
					search.classList.remove("activado");										
				}
			}
		}
	},false);	
	//Agragar - click
	addid.addEventListener("click", function(){
		if(this.classList.contains("activado")){
				doctor.classList.add("selectoptactivo");
				addid.classList.remove("activado");
				users.push(
				{ 	
					id : inputid.value.toString(),
					tested : false,
					texto : esperando
				});
				showTest(users[users.length - 1]);
				showDiv(users[users.length - 1].texto);
		}
	},false);	
	//Contenido - click
	contenido.addEventListener("click", function(e){		
		if(document.getElementsByClassName("selecdiv").length > 0){
			addid.classList.add("activado");
			var prioridad = getVal(e.target);			
		}else if(document.getElementsByClassName("divestatus").length > 0){
			user.tested = true;
			user.status = estado[getVal(e.target)];
			user.texto = testeado;
			showDiv(user.texto,true);
			showTest(user);
		}else if(document.getElementsByClassName("cambiardiv").length > 0){
			showDiv(user.texto);
		}
		function getVal(div){
			var hazreplace = div.classList[1] == "divsin"
				? div.classList.replace("divsin","divcheck")
				: div.classList.replace("divcheck","divsin");
			return div.attributes.value.value;
		}
			
	},false);
	//Medico - click
	doctor.addEventListener("click", function(){
		if(this.classList.contains("selectoptactivo")){
			if(prompt("Password", "1234") == 1234){
				if(user.texto == esperando && document.getElementsByClassName("time").length > 0 )
				{document.getElementsByClassName("time")[0].style.display = "none";};				
				showDiv(user.texto, true);
			}else{
				doctor.classList.remove("selectoptactivo");
			}
		}
	},false);
		
}));


//ReadyState
function start(f){
	/in/.test(document.readyState)
		? setTimeout(`start(${f})`,9)
		: f()
};
