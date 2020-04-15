
//Usuarios testing
this.users = [
	{ 	id : "00002",
		tested : false,
		texto : esperando},
		
	{ 	id : "00003",
		tested : true,
		texto : testeado,
		status : estado[0]},
		
	{ 	id : "00004",
		tested : true,
		texto : testeado,
		status : estado[1]},
		
	{ 	id : "00005",
		tested : true,
		texto : testeado,
		status : estado[2]}	
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
