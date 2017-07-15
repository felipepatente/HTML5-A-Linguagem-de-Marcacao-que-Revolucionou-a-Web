function chamarLocalizacao(){
	if(navigator.geolocation){
		alert("Este navegador suporta a funcionalidade Geolocation");
	}else{
		alert("Este navegador não suporta a funcionalidade Geolacation");
	}
}