window.onload=function(){
	var powerButton = document.getElementById('power'),	isOn = false;
	var vainillaButton = document.getElementById('vainilla');
	var chocolateButton = document.getElementById('chocolate');
	var fresaButton = document.getElementById('fresa');
	var conveyorBelt = document.getElementById('conveyor_belt');

	powerButton.addEventListener('click', function(event){
		if(isOn==false) {
			event.target.parentElement.innerHTML = '<img src="img/power_on.png">';		
		    isOn=true;
		} else {
			event.target.parentElement.innerHTML = '<img src="img/power.png">';		
		    conveyorBelt.innerHTML='<img src="img/conveyor.png">'
		    isOn=false;			
		}

	});
	/*
	vainillaButton.addEventListener("click",hacerVainilla);
	fresaButton.addEventListener("click",hacerFresa);
	chocolateButton.addEventListener("click",hacerChocolate);

	function hacerVainilla(){
		if (isOn) {
			conveyorBelt.innerHTML='<img src="img/vainilla.png"><img src="img/conveyor.png">';
		}
	}
	
	function hacerChocolate(){
		if (isOn) {
			conveyorBelt.innerHTML='<img src="img/choco.png"><img src="img/conveyor.png">';
		}
	}
	
	function hacerFresa(){
		if (isOn) {
			conveyorBelt.innerHTML='<img src="img/fresa.png"><img src="img/conveyor.png">';
		}
	}*/


	vainillaButton.addEventListener("click",function(e){
		hacerHelado("vainilla");
	});
	fresaButton.addEventListener("click",function(e){
		hacerHelado("fresa");
	});
	chocolateButton.addEventListener("click",function(e){
		hacerHelado("choco");
	});
	
	function hacerHelado(sabor){
		if (isOn) {
			conveyorBelt.innerHTML='<img src="img/'+sabor+'.png"><img src="img/conveyor.png">';
		}
	}
}