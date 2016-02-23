alert("hola mundo");

function Matriz(n){
	var n = n;
	var m = new Array(n);

	this.getN = function(){
		return n;
	}

	this.setN = function(v){
		n=v;
	}

	this.getM = function(){
		return m;
	}

	this.borrarM = function(){
		m = new Array(n);
	}

	this.getIndexMX = function(x){
		return m[x];
	}

	this.setIndexMX = function(x,v){
		m[x]= v;
	}

	this.getIndexMXY = function(x,y){
		return m[x][y];
	}

	this.setIndexMXY = function(x,y,v){
		m[x][y]= v;
	}

	this.getIndexMXYZ = function(x,y,z){
		return m[x][y];
	}

	this.setIndexMXYZ = function(x,y,z,v){
		m[x][y]= v;
	}

	this.llenarBloques = function(){
		
	}
}

Matriz.prototype.llenarBloques =function(){
	for(var i=0;i<this.getN();i++){
		this.
	}
}

