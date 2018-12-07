window.onload=function(){
	var lama=document.getElementById("Lama");
	lama.className="slideUp";
	lama.addEventListener("click",rotateLama);
	lama.addEventListener("dblclick",quitter);
	function rotateLama(){
		document.getElementById("Lama").classList.add("rotateLama");
	}
	function quitter(){
		document.getElementById("Lama").className="quitter";
	}
}

