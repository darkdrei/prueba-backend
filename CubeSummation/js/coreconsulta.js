function CoreConsulta(t,n,m){
	var t=t,
	    matriz= new Matriz(n),
	    m=m;

	this.getT = function(){
		return t;
	}

	this.setT =function(t){
		t=t;
	}

	this.getMatriz = function(){
		return matriz;
	}
}

CoreConsulta.prototype.validarT = function (t) {
	if (t<1 || t > 50){
		return [false,"El valor para T debe encontrase entre 1 y 50."];
	}
	return [true];
}

CoreConsulta.prototype.validarM = function (m) {
	if (t<1 || t > 1000){
		return [false,"El valor para M debe encontrase entre 1 y 1000."];
	}
	return [true];
}

