function chamarFuncao(){
	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');
	
	//Esse atributo destina-se a definir a cor de linhas do elemento gráfico criado
	ctx.strokeStyle = '#F00';

	//Esse atributo destina-se a definir a espessura das linhas, em pixel, do elemento gráfico criado	
	ctx.lineWidth = 2;


	ctx.strokeRect(30,30,80,40);
	
	ctx.strokeStyle = '#00F';
	ctx.lineWidth = 4;
	ctx.strokeRect(130,100,140,90);

	ctx.strokeStyle = '#000';
	ctx.lineWidth = 2;
	ctx.fillStyle = 'rgba(0,255,0,0.4)';
	ctx.fillRect(150,60,200,70)
	ctx.strokeRect(148,58,204,74);
}