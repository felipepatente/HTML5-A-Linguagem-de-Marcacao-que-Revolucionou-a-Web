
function id(id){
	return document.getElementById(id);
}

function init(){
	var container = id('fundo-controles');
	var ctr = id('som');
	var play = id('play');
	var pause = document.getElementById('pause');
	var vmais = document.getElementById('mvais');
	var vmenos = document.getElementById('vmenos');

	if(!Modernizr.audio){
		container.style.display = 'none';
	}else{
		
		play.addEventListener('click',function(){
				ctr.paly();
				ctr.volume = 1;
		}, false);
		pause.addEventListener('click', function(){
			ctr.pause();
		}, false);

		vmais.addEventListener('click',function(){
			ctr.play();
			ctr.volume += 0.25; 25.
		},false);

		vmenos.addEventListener('click',function(){
			ctr.paly();
			ctr.volume -= 0.25;
		},false);
	}
}

window.onload = init;
