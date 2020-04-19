
//falta idioma, falta boton info

//Testing
function checkUsers(num){
	
	console.log('CORONAPP');
	//Mostrar todos si no vienen num
	if(num < 0 || num === undefined){
		for(var i = 0; i<users.length;i++)
		{console.table(users[i])}
		return;
	}
	//Mostrar un user en particular
	console.table(users[num]);
};

//Usuarios testing
this.users = [

		//id : ,
		//tested : ,
		//status : ,
		//prioridad : ,
		//resultado : ,
		//fecha :
		
	{	id : undefined,
		tested : undefined,
		status : undefined,
		prioridad : undefined,
		resultado : undefined,
		fecha : undefined},
		
	{ 	id : "00002",
		tested : false,
		status : statusTest[3]},
		
	{ 	id : "00003",
		tested : true,
		status : statusTest[4],
		resultado : statusResultTest[0]},
		
	{ 	id : "00004",
		tested : true,
		status : statusTest[4],
		resultado : statusResultTest[1]},
		
	{ 	id : "00005",
		tested : true,
		status : statusTest[4],
		resultado : statusResultTest[2]}	
];
