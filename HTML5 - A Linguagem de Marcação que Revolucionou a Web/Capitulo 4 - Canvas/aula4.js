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


function arco(){

	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');

	ctx.beginPath();
	ctx.moveTo(20,50);
	ctx.strokeStyle = '#F00';

	/* arcTo(x1,y1,x2,y2,r)
	 Esse método destina-se a desenhar um arco com origem nas coordenadas x1 e y1 e término nas coordenadas
	 x2 e y2 e com com raio r 
	*/
	ctx.arcTo(100,50,100,130,80);
	
	ctx.stroke();

	
	ctx.beginPath();
	ctx.moveTo(100,130);
	ctx.strokeStyle = '#009';
	ctx.arcTo(200,130,200,30,100);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(200,30);
	ctx.strokeStyle = '#090';
	ctx.arcTo(200,190,380,190,180);
	ctx.stroke();

}


function arcoComCentro(){

	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');

	ctx.lineWidth = 4; //espessura da linha para todos os arcos

	ctx.beginPath();
	ctx.strokeStyle = '#F00';

	/*
	 arc(x, y, r, anguloInicial, anguloFinal, sentido)
	 Esse método destina-se a desenhar um arco com centro nas coordenadas x e y com raio r e ângulo inicial e final
	 definidos em radianos.
	*/
	ctx.arc(80, 100, 40, 0, Math.PI * 2, true);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = '#090';
	ctx.arc(200, 100, 40, 0, Math.PI, true)
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = '#00F';
	ctx.arc(200, 100, 40, 0, Math.PI, false)
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = '#F90';
	ctx.arc(320, 100, 40, 0, 3/4*Math.PI, true)
	ctx.stroke();
}




function preencherArcos(){

	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');

	ctx.lineWidth = 4; //espessura da linha para todos os arcos

	ctx.beginPath();
	ctx.strokeStyle = '#F00';
	ctx.fillStyle = '#0FF';
	ctx.arc(80, 100, 40, 0, Math.PI * 2, true);
	
	//Esse método destina-se a preencer com uma cor sólida um caminho
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = '#090';
	ctx.fillStyle = '#996'
	ctx.arc(200, 100, 40, 0, Math.PI, true)
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = '#00F';
	ctx.fillStyle = '#C6C';
	ctx.arc(200, 100, 40, 0, Math.PI, false)
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = '#F90';
	ctx.fillStyle = '#0C0';
	ctx.arc(320, 100, 40, 0, 3/4*Math.PI, true)
	ctx.fill();
	ctx.stroke();
}


function desenharRetangulo(){

	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');

	ctx.lineWidth = 4;

	ctx.beginPath();
	ctx.strokeStyle = '#F00';
	ctx.fillStyle = 'FFF';

	/*
	 Esse método rect(x, y, l, h) destina-se a desenhar um retângulo. Os parâmetros x e y definem as coordenadas
	 do canto superior esquerdo do retângulo e os prrâmetros l e h definem, respectivamente, a largura e a altura,
	 em picel do retângulo
	*/
	ctx.rect(50, 10, 200, 120);
	
	ctx.fill();
	ctx.stroke();

}

function fecharCaminho(){

	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');

	ctx.lineWidth = 2;

	ctx.beginPath();
	ctx.moveTo(20,20);
	ctx.strokeStyle = '#F00';
	ctx.lineTo(80,190);
	ctx.lineTo(180,160);
	ctx.lineTo(220,20);
	
	//Esse método destina-se a fazer o fechamento de um caminho
	ctx.closePath();
	ctx.stroke();

}


function formaAcabamentoLinha(){

	var canvas = document.getElementById('quadro');
	var ctx = canvas.getContext('2d');
	
	ctx.lineJoin = 'round';
	ctx.lineCap = 'square';
	ctx.globalAlpha = 0.6;

	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(50, 50);
	ctx.lineTo(200,100);
	ctx.stroke();

}




















