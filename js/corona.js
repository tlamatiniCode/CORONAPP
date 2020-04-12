/*
  	Este archivo esta realizado por Alain Forton
	para el proyecto CORONAPP de Tlamatini_code Projectos open source.
	<https://github.com/tlamatiniCode>
	
	Eres libre de copiarlo, utilizarlo, pero no ganar dinero con el.
	Solo pido que si se utiliza y/o lo copia me referéncie.
 */
 
(function(){console.log('CORONAPP')})();

(function(){

	var id,			//input
		adderase,	//span izquierdo
		search,		//span derecho
		regEx;		//control del imput

	document.addEventListener('keyup', function(){		
		if(id = document.getElementById('inputID'))
		{
			doActions(id.value);
		}
	},false);

	function doActions()
	{
		regEx = /[0-9]{4,8}\d/;
		search = document.getElementById('searchID');
		
		
		if(!regEx.test(arguments[0]))
		{
			console.log("no valido");
			//removeClass();
		}
		else{
			console.log("valido");
			//search.addcl
		}
	}
	adderase = document.getElementById('newID');
	
	function removeClass()
	{
		
	}
	
})();

var guardar = "#a52727";


//Objeto tipo personas.
var tipoPerson = 
{
	noTest : 	0,	//No ha realizado el test.
	waiting : 	1,	//Se ha resgistrado y esta esperando para hacerse el test
	//Se hicieron el test
	recovered : 2,	//Se a recuperado del virus.
	noCorona : 	3,	//No tiene el virus ni se infecto.
	siCorona : 	4	//Esta infectado del virus
};

//Objeto user
var user =
{
	ofic_med : 	0,	//Medico, doctor, sanitario
	ofic_pol : 	1,	//Policia, militar
	user_no : 	2,	//Persona no registrada
	user_si	: 	3	//Persona si registrada
}


