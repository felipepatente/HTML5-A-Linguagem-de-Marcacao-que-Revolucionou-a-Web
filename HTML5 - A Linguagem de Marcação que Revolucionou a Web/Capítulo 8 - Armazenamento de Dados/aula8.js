function salvarDado(name) {
	
	var valor = document.forms['dadoform'].dadovalue.value;
	var itemStorage = localStorage.setItem('dataStorage',valor);
	var valorItemStorage = localStorage.getItem('dataStorage');

	if(!valor){
		alert("Entre um valor para o dado a armazenar.");
	}else{
		mensagem = "Um dado com o nome dataStorage com o valor " + valorItemStorage + "\n";
		mensagem += "foi armazenado";
		alert(mensagem);
	}
}

function lerDado(name){
	var valorItemStorage = localStorage.getItem('dataStorage');
	if(!valorItemStorage){
		alert("Não existe valor para ser lido");
	}else{
		mensagem = "Um dado com o nome dataStorage com o valor " + valorItemStorage + "\n";
		mensagem += "foi lido";
		alert(mensagem);
	}
}

function apagarDado(name){

	localStorage.removeItem('dataStorage');
	alert("Dado com o nome dataStorage foi apagado");
}

var cont = 0;
function visualizarPaginas(){
		cont = cont + 1
		document.getElementById('count').textContent = cont;
	
}













