function chamarLocalizacao(){
	if(navigator.geolocation){
		alert("Este navegador suporta a funcionalidade Geolocation");
	}else{
		alert("Este navegador não suporta a funcionalidade Geolacation");
	}
}


function obterPosicao(){
	
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(sucessos);
	}else{
		alert("Este navegador não suporta a funcionalidade Geolocation");
	}
}

function sucessos(position){

	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var mensagem = "As suas coordenadas são: <br>";
	mensagem += "Latitude: " + latitude + "<br>";
	mensagem += "Longitude: " + longitude;
	document.getElementById('msg').innerHTML = mensagem;
}


function propriedadesPosition(){

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(sucesso);
	}else{
		alert("Este navegador não suporta a funcionalidade Geolocation");
	}
}

function sucesso(position){

	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var altitude = position.coords.altitude;
	var precisao = position.coords.accuracy;
	var precisaoAltitude = position.coords.altitudeAccuracy;
	var direcao = position.coords.heading;
	var velocidade = position.coords.speed;
	var tempo = position.timestamp;

	var mensagem = "As propriedades de Position são: <br>";
	mensagem += "Latidute" + latitude + "<br>";
	mensagem += "Longitude" + longitude + "<br>";
	mensagem += "Presição das coordenadas: " + precisao + " metros<br>";
	mensagem += "<br>";
	mensagem += "Altitude: " + altitude + "<br>";
	mensagem += "Presição da altitude: " + precisaoAltitude + " metros<br>";
	mensagem += "<br>";
	mensagem += "Direção: " + direcao + " graus<br>";
	mensagem += "velocidade: " + velocidade + "<br>";
	mensagem += "Tempo: " + tempo + " milissegundos";
	document.getElementById('msgg').innerHTML = mensagem;
}
























