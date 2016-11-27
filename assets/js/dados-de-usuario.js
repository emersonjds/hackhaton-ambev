$(document).ready(function() {

	function insertUser(){
		var data = {
			'acao'                   : 'INSERT_USER',
			'email'                  :  $("#email").val(),
			'qtd_pessoas_residencia' :  $("#qtd_pessoas_residencia").val(),
			'data_venc_conta'        :  $("#data_venc_conta").val(),
			'cidade'                 :  $("#cidade").val(),
			'uf'                     :  $("#uf").val()
		};

		ajaxServer("INSERT_USER", data);
	}

	function ajaxServer(acao, data){
		$.ajax({
			url      : '172.16.15.165/workspace/HackathonAmbev/index.php',
			dataType : 'JSON',
			type     : 'POST',
			data     : data,
			success  : function(result){
				if(acao == 'INSERT_USER'){
		          	// Next step the application porra!
		          }
		          console.log(result);
		      },
		      error :  function(result){
			        // Ih, deu dick
			        console.log(result);
			    }
			});
	}

	$('#iniciar').click(function() {
		
		insertUser();
	});
});