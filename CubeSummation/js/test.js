var core ;

function playCoreConsulta(t,n,m){
	core = new CoreConsulta(t,n,m);
	core.getMatriz().llenarBloques();
	if (core.getT()== t && core.getM()==m && core.getMatriz().getN() == n){
		return true;
	}else{
		return false;
	}
}

function realizarUpdate(c){
	return core.lineUpdate(c)[0];
}

function realizarQuery(c){
	var r = core.lineQuery(c);
	console.log(r);
	return r[0]?r[1]== 0?"0":r[1]:r[0];
}

test( 'Testing checkNumber()', function() {
  ok(playCoreConsulta( 2,4,5));
  ok(realizarUpdate("UPDATE 2 2 2 4"));
  ok(realizarQuery("QUERY 1 1 1 3 3 3"),4);
  ok(realizarUpdate("UPDATE 1 1 1 23"));
  ok(realizarQuery("QUERY 2 2 2 4 4 4"),4);
  ok(realizarQuery("QUERY 1 1 1 3 3 3"),27);
  ok(playCoreConsulta( 2,2,4));
  ok(realizarUpdate("UPDATE 2 2 2 1"));
  ok(realizarQuery("QUERY 1 1 1 1 1 1"),"0");
  ok(realizarQuery("QUERY 1 1 1 2 2 2"),1);
  ok(realizarQuery("QUERY 2 2 2 2 2 2"),1);
  /*ok( checkNumber( 2 ) );
  ok( checkNumber( -4 ) );
  ok( checkNumber( 1 ) );
  ok( checkNumber( 'asdf' ) );
  ok( !checkNumber( 'asdf' ) );*/
} );