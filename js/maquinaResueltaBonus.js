window.onload=function(){
			var powerButton = document.getElementById('power'),	isOn = false;
			var vainillaButton = document.getElementById('vanilla');
			var chocoButton = document.getElementById('chocolate');
			var mixButton = document.getElementById('swirl');
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
 				hacerHelado("mix");
			});
			function hacerHelado(sabor){
				if (isOn) {
					switch(sabor){
						case "vainilla":
							conveyorBelt.innerHTML = '<img src="img/vanilla.jpg"><img src="img/conveyor.png">';
							break;
						case "choco":
							conveyorBelt.innerHTML = '<img src="img/chocolate.jpg"><img src="img/conveyor.png">';
							break;
						case "mix":
							conveyorBelt.innerHTML = '<img src="img/swirl.jpg"><img src="img/conveyor.png">';
							break;
					}
				}
			}


}