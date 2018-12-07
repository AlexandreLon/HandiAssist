
function lama() {
	let lama = document.getElementById("Lama");
	lama.className = "slideUp";
}

function rotateLama() {
	let lama = document.getElementById("Lama");
	if (lama.classList.contains("rotateLama")) {
		quitter();
	}
	else {
		document.getElementById("Lama").classList.add("rotateLama");

	}
}
function quitter() {
	document.getElementById("Lama").className = "quitter";
}

