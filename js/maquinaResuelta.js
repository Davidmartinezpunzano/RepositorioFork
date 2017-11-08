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
 				hacerVainilla();
			});
			function hacerVainilla(){
				if (isOn) {
					conveyorBelt.innerHTML = '<img src="img/vanilla.jpg"><img src="img/conveyor.png">';
				}
			}
			chocoButton.addEventListener('click', function(event){
 				hacerChoco();
			});

			function hacerChoco(){
				if (isOn) {
					conveyorBelt.innerHTML = '<img src="img/chocolate.jpg"><img src="img/conveyor.png">';
				}
			}
			mixButton.addEventListener('click', function(event){
 				hacerMix();
			});

			function hacerMix(){
				if (isOn) {
					conveyorBelt.innerHTML = '<img src="img/swirl.jpg"><img src="img/conveyor.png">';
				}
			}
}