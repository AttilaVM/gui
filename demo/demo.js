var device = gui.classifyDevice(window.innerWidth, window.innerHeight);

var iconA = document.getElementById("icon-a");

var state = 0;
var multiButton = document.getElementById("multi-button");

var numButton = gui.stackButton.bind(
	this,
	function(icon) {
		icon.classList.add("hide");
	},
	function(icon) {
		icon.classList.remove("hide");
	}
);

var numButtonAct = numButton(
	multiButton,
	function() {
		state = (state + 1) % 3;
		return state;
	}
);

gui.simpleButton(iconA, function() {
	numButtonAct();
});
