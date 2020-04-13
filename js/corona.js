/*
  	Este archivo esta realizado por Alain Forton para el proyecto CORONAPP de Tlamatini_code Projectos open source.
	<https://github.com/tlamatiniCode>
*/


start((function(){
	//global.var = elements.
	this.inputid = document.getElementById("inputID");
	this.addid = document.getElementById("newID");
	this.search = document.getElementById("searchID");	
	this.divTest = document.getElementById("test");	
	//functions eventos	
	//Buscador - boton
	inputid.addEventListener("keyup", function(){			
		addid.classList.remove("activado");
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
					console.log("registrado" + users[i].tested);
					search.classList.remove("activado")
					showTest(users[i])
					return;
				}
				else if(i === users.length - 1){
					console.log("fuck");
					showTest();
					search.classList.remove("activado")
					addid.classList.add("activado");
				}
			}
		}
	},false);	
	
}));

//ReadyState
function start(f){/in/.test(document.readyState)?setTimeout('start('+f+')',9):f()};
