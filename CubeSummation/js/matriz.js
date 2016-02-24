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
		console.log("Modificando el valor "+v);
		m[x]= v;
	}

	this.getIndexMXY = function(x,y){
		return m[x][y];
	}

	this.setIndexMXY = function(x,y,v){
		m[x][y]= v;
	}

	this.getIndexMXYZ = function(x,y,z){
		return m[x][y][z];
	}

	this.setIndexMXYZ = function(x,y,z,v){
		m[x][y][z]= v;
	}

}

Matriz.prototype.llenarBloques =function(){
	for(var i=0;i<this.getN();i++){
		console.log("Se debe dijitar...");
		this.setIndexMX(i,new Array(this.getN()));
		for (var j = 0; j < this.getN(); j++) {
			this.setIndexMXY(i,j,new Array(this.getN()));
			for (var k= 0; k < this.getN(); k++) {
				this.setIndexMXYZ(i,j,k,0);
			};
		}
	}
}

Matriz.prototype.sumarIntervalos = function(x1,y1,z1,x2,y2,z2){
	console.log("Llegando a el calculo del intervalo");
	var t=0;
	var j=y1-1,k=z1-1;
	stop:
	for(var i=x1-1;i<=x2-1;i++){
		do{
			do{
				t+=this.getIndexMXYZ(i,j,k);
				console.log(t+" ["+(i+1)+"]["+(j+1)+"]["+(k+1)+"] = "+this.getIndexMXYZ(i,j,k));
				if(i==x2-1 && j== y2-1 && z2-1 == k){
					break stop;
				}
				k++;
			}while(k<this.getN());
			k=0;
			j++;
		}while(j<this.getN());
		j=0;
	}
	console.log("fin a el calculo del intervalo");
	return t;
}

Matriz.prototype.imprimirMatriz = function(){
	var t=1;
	for(var i=0;i<this.getN();i++){
		for (var j = 0; j < this.getN(); j++) {
			for (var k= 0; k < this.getN(); k++) {
				console.log(t+" ["+(i+1)+"]["+(j+1)+"]["+(k+1)+"] = "+this.getIndexMXYZ(i,j,k));
				t++;
			}
		}
	}
}

