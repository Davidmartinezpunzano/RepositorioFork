window.onload=function(){
			var powerButton = document.getElementById('power'),	isOn = false;
			var vainillaButton = document.getElementById('vainilla');
			var chocoButton = document.getElementById('chocolate');
			var mixButton = document.getElementById('fresa');
			var conveyorBelt = document.getElementById('conveyor_belt');

			powerButton.addEventListener('click', function(event){
				if (!isOn) {
					event.target.parentElement.innerHTML = '<img src="img/power_on.png">'
					isOn=true;
				} else {
					event.target.parentElement.innerHTML = '<img src="img/power.png">'
					conveyorBelt.innerHTML = '<img src="img/conveyor.png">';
					isOn=false;
				}
					
			});
			vainillaButton.addEventListener('click', function(event){
 				hacerHelado("vainilla");
			});
			chocoButton.addEventListener('click', function(event){
 				hacerHelado("choco");
			});
			mixButton.addEventListener('click', function(event){
 				hacerHelado("fresa");
			});
			function hacerHelado(sabor){
				if (isOn) {
					switch(sabor){
						case "vainilla":
							conveyorBelt.innerHTML = '<img id="iceCream" src="img/vainilla.png"><img src="img/conveyor.png">';
							animarHelado();
							break;
						case "choco":
							conveyorBelt.innerHTML = '<img id="iceCream" src="img/choco.png"><img src="img/conveyor.png">';
							animarHelado();
							break;
						case "fresa":
							conveyorBelt.innerHTML = '<img id="iceCream" src="img/fresa.png"><img src="img/conveyor.png">';
							animarHelado();
							break;
					}
				}
			}
			function animarHelado(){
				var helado=document.getElementById("iceCream");
				var heladoAnimado=helado.animate(
							[ 
						    { transform: 'translateX(0) translateY(0)',opacity: 1  },
							{ transform: 'translateX(200%) translateY(15%)', opacity: 0}
						 ], 
						 { duration:1000 }
						);
				heladoAnimado.onfinish=function() {
					conveyorBelt.innerHTML = '<img src="img/conveyor.png">';
				}				
			}

}