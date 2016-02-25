var core= new CoreConsulta(0,0,0);
$(document).on('ready',function(){
	$('.accion').on('click',function(){
		return false;
	});
	$('.accion').on('click',function(){

	});
	/*$('.modal').leanModal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      ready: function() {}, // Callback for Modal open
      complete: function() {} // Callback for Modal close
    });*/
    $('.add').on('click',function(){
    	
    	var t=$('#mt'),
    		n=$('#mn'),
    		m=$('#mm');
		if(validarCadena(t.val())){
			if(validarCadena(n.val())){
				if(validarCadena(m.val())){
					var r = core.validarT(t.val());
					if(r[0]){
						r = core.getMatriz().validarN(n.val());
    					if(r[0]){
    						r = core.validarM(m.val());
	    					if(r[0]){
	    						core = new CoreConsulta(parseInt(t.val()),parseInt(n.val()),parseInt(m.val()));
	    						$('#t').val(t.val());
					    		$('#n').val(n.val());
					    		$('#m').val(m.val());
					    		borrarPopup();
					    		$('#modal1').closeModal();
					    		$('#tablero').focus();
	    					}else{
	    						m.attr("placeholder", r[1]);
	    					}
    					}else{
    						n.attr("placeholder", r[1]);
    					}
					}else{
						t.attr("placeholder", r[1]);
					}
	    		}else{
	    			m.attr("placeholder", "    Debe digitar solo numeros.");
	    		}
    		}else{
    			n.attr("placeholder", "    Debe digitar solo numeros.");
    		}
		}else{
			t.attr("placeholder", "    Debe digitar solo numeros.");
		}
    });
	$('#tablero').keypress(function(event) {
		/* Act on the event */
		if (event.which == 13){
			var resp =((new String($(this).val()))).split("\n");
			var cadena = resp[resp.length-1];
			var r = (new String(cadena)).toUpperCase();
			if(r.search("UPDATE|QUERY") != -1){
				if(r.search("UPDATE") != -1){
					var res_con = core.lineUpdate(r);
					if(res_con){
						core.incrmentarConM();
						$("#m").val(core.getM()-core.getConM());
						if(core.getM()-core.getConM() == 0){
							core.setConM(0);
							core.incrmentarConT();
							$(this).val($(this).val()+"\nDigite N y M, separado por espacion : ");
							$("#t").val($("#t").val()-core.getConT());
							
						}
					}else{

					}
				}else if(r.search("QUERY") != -1){

				}
			}
		}
	});
});

function validarCadena(c){
	return /^\d+$/.test(c);
}

function borrarPopup(){
	$('.clear').attr("placeholder", "");
	$('.clear').val("");
}