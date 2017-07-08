function desenharRetangulos(){
		
	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');

	//Esse atributo destina-se a definir a cor de linhas do elemento gráfico criado
	ctx.strokeStyle = '#F00';

	//Esse atributo destina-se a definir a espessura das linhas, em pixel, do elemento gráfico criado	
	ctx.lineWidth = 2;

	/*
	  strokeRect(x,y,l,h);	
	  Esse método destina-se a desenhar o contorno de um retângulo. Os parâmetros x e y definem as coordenadas 
	  do canto superior esquerdo do retângulo e os parâmetros l e h definem, respectivamente, a largura e a altura,
	  em pixel, do retângulo
	*/
	ctx.strokeRect(30,30,80,40);
	

	ctx.strokeStyle = '#00F';
	ctx.lineWidth = 4;
	ctx.strokeRect(10,10,120,90);

	ctx.strokeStyle = '#000';
	ctx.lineWidth = 2;

	//Esse atributo destina-se a definir a cor de preenchimento do elemento gráfico criado
	ctx.fillStyle = 'rgba(0,255,0,0.4)';
	
	/*
	  fillRect(x,y,l,h)
	  Esse método destina-se a desenhar um retângulo com cor sólida. Os parâmetros x e y definem as coordenadas do canto
	  superior esquerdo do retângulo e os parâmetros l e h definem, respectivamente, a largura e a altura, em pixel,
	  do retângulo.
	*/
	ctx.fillRect(148,20,200,70);
	ctx.strokeRect(148,20,150,70);
}



function limparArea(){
		
	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');

	ctx.strokeStyle = '#000';
	ctx.lineWidth = 2;
	ctx.fillStyle = '#060';
	ctx.fillRect(65,25,170,90);
	ctx.strokeRect(60,20,180,100);

	//Esse método destina-se a apagar uma área retangular de canvas
	ctx.clearRect(120,45,50,50);
}


function sombrear(){

	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = '#00FFAA';

	//Defini a cor da sombra com uso de um valor CSS
	ctx.shadowColor = '#AA00AA';

	//Definem com uso de um número finito a espessura e deslocamento da sombra
	ctx.shadowOffsetX = '10px';
	ctx.shadowOffsetY = '50px';
	
	//Defini com uso de um número maior ou igual a zero o desfoque (efeito blur) da cor da sombra
	ctx.shadowBlur = '80';

	ctx.fillRect(100,25,100,100);

}