function anglify() {
	document.getElementById("introduction").innerHTML = "Greetings, comrade!";
	document.getElementById("theproblem").innerHTML = "This website is reserved for the intergalactic communist empire <b>BASE COMUST</b>.";
	document.getElementById("thesis").innerHTML = "You are stationed at the station <b>POLUS</b>.";
	document.getElementById("conclusion").innerHTML = "Enjoy your stay, comrade!";
}

function ñify() {
	document.getElementById("introduction").innerHTML = "¡Buenas tardes, camarada!";
	document.getElementById("theproblem").innerHTML = "Este sitio web está reservado para el imperio comunista intergaláctico <b>BASE COMUST</b>.";
	document.getElementById("thesis").innerHTML = "Estás estacionado en la estación <b>POLUS</b>.";
	document.getElementById("conclusion").innerHTML = "¡Disfruta tu estancia, camarada!";
}

/*
function jugoslavify() {
	document.getElementById("introduction").innerHTML = "Поздрав, друже!";
	document.getElementById("theproblem").innerHTML = "Ова веб страница је резервисана за међугалактичко комунистичко царство <b>БАЗНИ КОМУСТ</b>.";
	document.getElementById("thesis").innerHTML = "Стационирани сте на станици <b>ПОЛУС</b>.";
	document.getElementById("conclusion").innerHTML = "Уживајте у боравку, друже!";
}
*/

function playpropaganda() {
	const sonks = ['red_sun_in_the_sky.mp3', 'der_heimliche_aufmarsch.mp3'];
	var song = new Audio(sonks[Math.floor(Math.random() * sonks.length)]);
	song.play();
}