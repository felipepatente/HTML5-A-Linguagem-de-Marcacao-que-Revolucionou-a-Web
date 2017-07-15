function chamarLocalizacao(){
	if(navigator.geolocation){
		alert("Este navegador suporta a funcionalidade Geolocation");
	}else{
		alert("Este navegador não suporta a funcionalidade Geolacation");
	}
}


function obterPosicao(){
	
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(sucesso);
	}else{
		alert("Este navegador não suporta a funcionalidade Geolocation");
	}
}

function sucesso(position){

	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var mensagem = "As suas coordenadas são: <br>";
	mensagem += "Latitude: " + latitude + "<br>";
	mensagem += "Longitude: " + longitude;
	document.getElementById('msg').innerHTML = mensagem;
}