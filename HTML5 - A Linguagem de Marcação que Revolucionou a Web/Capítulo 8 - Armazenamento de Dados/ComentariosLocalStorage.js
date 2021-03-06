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
		alert("Não existe valor para ser lido ou você não digitou um valor valido no campo do nome");
	}else{
		mensagem = "Um dado com o nome " + nome +" com o valor " + valorItemStorage + "\n";
		mensagem += "foi lido";
		alert(mensagem);
	}

}

function apagarDado(){

	
	var nome = document.getElementById('nomedado').value;
	if(nome != ""){
		
		//removeItem(nome): Esse método destina-se a apagar da área de armazenamento o par nome/valor de um dado
		//designado nome. 
		localStorage.removeItem(nome);
		alert("Dado com o nome "+ nome +" foi apagado");
	}else{
		alert("Digite um nome valido");
	}
}

function apagarTodosDados(){

	//Esse método não requer parâmetros e se destina a apagar todo o conteúdo da área de armazenamento, isto é,
	//esvazia o objeto localStorage
	localStorage.clear();
	alert("Os Dados foram apagados");
}

function LerUmDado(){

	var posicao = document.getElementById('posicao').value;

	//key(n): Esse método destina-se a insepecionar o nome do dado armazenado na posição n.
	alert("Nome do dado: " + localStorage.key(posicao));
}

var cont = 0;
function visualizarPaginas(){
		cont = cont + 1
		document.getElementById('count').textContent = cont;
	
}


function verTotalDados(){

	//length: Essa propriedade destina-se a inspecionar a quantidade de dados (pares nome/valor) armazenados nos 
	//objeto localStorage.
	alert("Quantidade de dados: " + localStorage.length);
}