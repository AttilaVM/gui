var device = gui.classifyDevice(window.innerWidth, window.innerHeight);

var iconA = document.getElementById("icon-a");

gui.simpleButton(iconA, function() {
	alert("works");
});

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

numButton(
	multiButton,
	function() {
		state = (state + 1) % 3;
		return state;
	}
);
