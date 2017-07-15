function chamarLocalizacao(){
	if(navigator.geolocation){
		alert("Este navegador suporta a funcionalidade Geolocation");
	}else{
		alert("Este navegador não suporta a funcionalidade Geolacation");
	}
}

// ----------------------------------------------------------------------
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
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
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
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------
function inspecionarErro(){

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(sucess,erro);
	}else{
		alert("Este navegador não suporta a funcionalidade Geolocation");
	}
}

function erro(err){

	switch(err.code){
		case 1:
			var mensagemErro = "A permissão para obter a sua posição foi negada.";
			break;

		case 2:
			var mensagemErro = "Não foi possível estabeler uma conexão para obter á sua posição.";
			break;

		case 3:
			var mensagemErro = "Tempo esgotado."
			break;

		default:
			var mensagemErro = "Não foi possível obter sua posição";
			break;
	}

	var codigoErro = err.code;
	var mensagem = "Ocorreu um erro na determinação da posição: <br>";
	mensagem += "Código do erro: " + codigoErro + "<br>";
	mensagem += "Mensagem: " + mensagemErro;
	document.getElementById('mssg').innerHTML = mensagem;
}


function sucess(position){
	document.getElementById('mssg').innerHTML = "Provoque um erro, negando...";
}

// ----------------------------------------------------------------------


function mostrarMapa(){

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(suces, error);
	}else{
		alert("Este navegador não suporta a funcionalidade Geolocation");
	}
}

function error(err){

	switch(err.code){
		case 1:
			var mensagemErro = "A permissão para obter a sua posição foi negada.";
			break;

		case 2:
			var mensagemErro = "Não foi possível estabeler uma conexão para obter á sua posição.";
			break;

		case 3:
			var mensagemErro = "Tempo esgotado."
			break;

		default:
			var mensagemErro = "Não foi possível obter sua posição";
			break;
	}

	var codigoErro = err.code;
	var mensagem = "Ocorreu um erro na determinação da posição: <br>";
	mensagem += "Código do erro: " + codigoErro + "<br>";
	mensagem += "Mensagem: " + mensagemErro;
	document.getElementById('mssgg').innerHTML = mensagem;
}

function suces(position){

	var mapa = document.getElementById("mapa");
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var url = "http://maps.google.com/maps/api/staticmap?center";
	url += latitude + "," + longitude;
	url += "&zoom=15&size=400x400";
	url += "&markers=color:red|"+ latitude + "," + longitude;;
	url += "&sensor=true";
	mapa.src = url;
	mapa.style.display = "block";
}
























































