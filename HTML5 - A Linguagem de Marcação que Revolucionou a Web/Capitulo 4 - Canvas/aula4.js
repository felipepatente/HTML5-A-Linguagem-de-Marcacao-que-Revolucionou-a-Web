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

function linhaPoligonal(){

	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');

	//Esse método destina-se a resetar o path corrente e nativo do contexto canvas criando condições para iniciar a
	//construção de um novo path. Todo path ou supath a ser construído deverá começar com esse método
	ctx.beginPath();
	ctx.storkeStyle = '#F00';
	ctx.lineWidth = 2;

	//Esse método desetina-se a posicionar a pena de desenho nas coordenadas x e y
	ctx.moveTo(20,20);

	//Esse método destina-se a desenhar uma linha reta desde a posição na qual se encontra a pena até as coordenadas x e y
	ctx.lineTo(80,120);
	
	//Esse método destina-se a aplicar os estilos definidos pelos atributos de criação no caminho construído	
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = '#009';
	ctx.moveTo(80,120);
	ctx.lineTo(150,30);
	ctx.stroke();

	ctx.beginPath();
	ctx.strkeStyle = '#090';
	ctx.moveTo(150,30);
	ctx.lineTo(350,180);
	ctx.stroke();


}










