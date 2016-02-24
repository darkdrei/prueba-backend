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

CoreConsulta.prototype.lineUpdate = function (c){
	if(this.validarUpdate(c)){
		var cadena = new String(c);
		var v = cadena.split(" ");//Contiene los valores.
		var r = this.getMatriz().validarSetXYZ(parseFloat(v[1],v[2],v[3],v[4]));
		if(r[0]){
				return [true];
		}else{
			return [false,r[1]];
		}
		return v;
	}else{
		return [false,"Se requiere que la exprecion tenga 7 terminos y estos se encuentren\nseparados por coma."];
	}
}

CoreConsulta.prototype.lineQuery = function (c){

}

CoreConsulta.prototype.validarUpdate = function (c){
	//var expreg = /^(UPDATE|update)\s((-?\d){1,3})([,\.][0-9]*)?\s((-?\d){1,3})([\.][0-9]*)?\s((-?\d){1,3})([\.][0-9]*)?\s((-?\d){1,10})([\.][0-9]*)?$/;
	return this.validoraExprecion(c,/^(UPDATE|update)\s((-?\d){1,3})([,\.][0-9]*)?\s((-?\d){1,3})([\.][0-9]*)?\s((-?\d){1,3})([\.][0-9]*)?\s((-?\d){1,10})([\.][0-9]*)?$/);
}

CoreConsulta.prototype.validarQuery = function (c){
	//var query = /^(query|QUERY)\s\d{1,3}\s\d{1,3}\s\d{1,3}\s\d{1,3}\s\d{1,3}\s\d{1,3}$/;
	return this.validoraExprecion(c,/^(query|QUERY)\s\d{1,3}\s\d{1,3}\s\d{1,3}\s\d{1,3}\s\d{1,3}\s\d{1,3}$/);
}

CoreConsulta.prototype.validoraExprecion = function(c,exp){
	return exp.test(c);
}

