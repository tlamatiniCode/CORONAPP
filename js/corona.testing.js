
//Usuarios testing
this.users = [
	{ 	id : "00002",
		tested : false,
		texto : esperando,
		span : waiting},
	{ 	id : "00003",
		tested : true,
		status : 0,
		texto : testeado,
		span : tested},
	{ 	id : "00004",
		tested : true,
		status : 1,
		texto : testeado,
		span : tested},
	{ 	id : "00005",
		tested : true,
		status : 2,
		texto : testeado,
		span : tested}	
];

//Testing
function checkUsers(num){
	console.log('CORONAPP');
	if(num < 0 || num === undefined){
		for(var i = 0; i<users.length;i++)
		{console.table(users[i])}
		return;
	}
	console.table(users[num]);
};