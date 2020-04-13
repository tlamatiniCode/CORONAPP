
//functions enseñar estado
function showTest(user){
	var textodiv = user === undefined ? notesteado : user.texto;
	var spanIcon = user === undefined ? notest : user.span;
	 return divTest.innerHTML = `${textodiv}<span class="spanicon">${spanIcon}</span>`;
}
	