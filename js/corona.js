start((function(){	
	//Buscador
	this.inputid = document.getElementById("inputID");
	//Nueva busqueda
	this.nuevoUser = document.getElementById("newID");
	//Informacion
	this.flat = document.getElementById("searchID");	
	//Resultado estado del test
	this.divTest = document.getElementById("test");	
	//Boton cambiar estatus
	this.doctor = document.getElementById("medic");
	//Contenido textos y botones
	this.contenido = document.getElementById("contenidochange");
	//user
	this.user = {};
	//html language
	this.culture = document.getElementsByTagName("html");
	//Boton culture
	this.buttonCul = document.getElementById("cultureApp");
	
	//functions eventos	
	//Buscador - key
	inputid.addEventListener("keyup", function(){			
		user = {};
		buttonCul.classList.replace("culturestyleactive","culturestyle");
		//Acciones antes validar input
		showMe(statusTest[1], undefined, false);
		nuevoUser.classList.add("activado");
		//Valdimos input y hacemos acciones.
		if(regEx.test(this.value)){
			for(var i = 0; i < users.length; i++){
				if(this.value.toString() === users[i].id){
					user = users[i];
					if(user.status == statusTest[3]){
						showMe(statusTest[3],textos[2],false);
					}
					else if(user.status == statusTest[4]){
						showMe(statusTest[4],textos[5],false);
					}
					return;
				}
				else if(i === users.length - 1){					
					//si no testeado
					showMe(statusTest[0],textos[0],false);													
				}
			}
		}	
	},false);
	
	//Contenido - click
	contenido.addEventListener("click", function(e){		
		//Detectar accion confirmar.		
		if(document.getElementsByClassName("confirmar").length > 0){
			if(user.status == undefined){
				showMe(statusTest[2], textos[1], false);
			}else if(user.status == statusTest[3]){
				showMe(statusTest[4], textos[4], true);
			} 
			return;
		//Seleccionar prioridad.	
		}else if(document.getElementsByClassName("selecdiv").length > 0){			
			user = 
			{ 	
				id : inputid.value.toString(),
				tested : false,
				status : statusTest[3],
				prioridad : getVal(e.target),
				resultado : undefined,
				fecha : getDate()
			};			
			showMe(statusTest[3], textos[2], false);
			users.push(user);
			return;
		//Selecciona el estatus.
		}else if(document.getElementsByClassName("divestatus").length > 0){
			user.tested = true;
			user.status = statusTest[4];
			user.resultado = statusResultTest[getVal(e.target)];
			showMe(statusTest[4], textos[5], false);
			return;
		}else if(document.getElementsByClassName("culture").length > 0){
			changeCulture(getVal(e.target));
			showMe(undefined, undefined, false);
			user = {};
			buttonCul.classList.replace("culturestyleactive","culturestyle");
		}				
	},false);
	
	//Medico - click
	doctor.addEventListener("click", function(){
		if(this.classList.contains("selectoptactivo")){
			if(prompt("Password", "1234") == 1234){
				if(user.status == statusTest[3]){
					showMe(statusTest[3], textos[3], true);
				}else if(user.status == statusTest[4]){
					showMe(statusTest[4], textos[4], true);
				}
			}
		}
	},false);	
	//Info - click
	flat.addEventListener("click", function(){
		if(this.classList.contains("activado")){
			this.classList.remove("activado");
			document.getElementsByTagName("link")[1].href = "css/styles.css";
		}else{
			this.classList.add("activado");
			document.getElementsByTagName("link")[1].href = "css/stylesflat.css";
		}
	},false);	
	//Nuevo - click
	nuevoUser.addEventListener("click", function(){
		if(this.classList.contains("activado")){
			buttonCul.classList.replace("culturestyleactive","culturestyle");
			showMe(undefined, undefined, false);
			user = {};
		}
	},false);	
	//Culture - click
	buttonCul.addEventListener("click", function(){
		showMe(statusTest[5], undefined, false);
	},false);
}));
//ReadyState
function start(f){
	/in/.test(document.readyState)
		? setTimeout("start("+f+")",9)
		: f()
};
