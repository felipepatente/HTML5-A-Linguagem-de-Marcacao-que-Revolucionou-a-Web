function salvarDado(name) {
	
	var valor = document.forms['dadoform'].dadovalue.value;
	
	var nome = document.forms['dadoform'].nomedado.value;
	//var nome = document.getElementById('nomedado').value;

	//setItem(nome,valor): Esse método destina-se a criar um par nome/valor e armazená-lo na área de armazenamento do
	//navegador.
	var itemStorage = localStorage.setItem(nome,valor);
	
	//getItem(nome): Esse método destina-se a recuperar o valor de um dado designado nome.
	var valorItemStorage = localStorage.getItem(nome);

	if(!valor){
		alert("Entre um valor para o dado a armazenar.");
	}else{
		mensagem = "Um dado com o nome " + nome + " e com o valor " + valorItemStorage + "\n";
		mensagem += "foi armazenado";
		alert(mensagem);
	}
}

function lerDado(name){

	var nome = document.getElementById('nomedado').value;
	var valorItemStorage = localStorage.getItem(nome);

	if(!valorItemStorage || nome == ""){
		alert("Não existe valor para ser lido ou você não digitou um valor no campo do nome");
	}else{
		mensagem = "Um dado com o nome " + nome +" com o valor " + valorItemStorage + "\n";
		mensagem += "foi lido";
		alert(mensagem);
	}

}

function apagarDado(name){

	//removeItem(nome): Esse método destina-se a apagar da área de armazenamento o par nome/valor de um dado
	//designado nome. 
	localStorage.removeItem('dataStorage');
	alert("Dado com o nome dataStorage foi apagado");
}