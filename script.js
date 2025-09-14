function anglify() {
	document.getElementById("introduction").innerHTML = "Greetings, comrade!";
	document.getElementById("theproblem").innerHTML = "This website is reserved for the intergalactic communist empire <b>BASE COMUST</b>.";
	document.getElementById("thesis").innerHTML = "You are stationed at the station <b>POLUS</b>.";
	document.getElementById("conclusion").innerHTML = "Enjoy your stay, comrade!";
	document.getElementById("greatness").innerHTML = "-=[CLICK FOR GREATNESS]=-";
	document.getElementById("shoutout").innerHTML = "Also check out!";
	document.getElementById("semilegalnotice").innerHTML = "The contents of this site are purely fictional and satirical and do not have any affiliation with any real communist or socialist movements. Everything should be taken half-seriously and not viewed from an actual communist perspective. This website\'s owner strongly opposes communism, socialism, Serbian nationalism and recognizes the independence of the Republic of Lithuania. This website does not in any way endorse the communist ideology and due to its content it should not be viewed by anyone.";
	document.getElementById("en").style.filter = "none";
	document.getElementById("es").style.filter = "grayscale(50%)";
}

function ñify() {
	document.getElementById("introduction").innerHTML = "¡Buenas tardes, camarada!";
	document.getElementById("theproblem").innerHTML = "Este sitio web está reservado para el imperio comunista intergaláctico <b>BASE COMUST</b>.";
	document.getElementById("thesis").innerHTML = "Estás estacionado en la estación <b>POLUS</b>.";
	document.getElementById("conclusion").innerHTML = "¡Disfruta tu estancia, camarada!";
	document.getElementById("greatness").innerHTML = "-=[CLICAME PARA ALGO DIVERTIDO]=-";
	document.getElementById("shoutout").innerHTML = "¡Tambien mira estos!";
	document.getElementById("semilegalnotice").innerHTML = "El contenido de este sitio es solamente ficticio y satírico y no tiene ninguna afiliación con ningúnes movimientos comunistas o socialistas real. Todo debe tomarse en media en serio y no desde una perspectiva comunista actual. El creador de este sitio web se opone firmemente al comunismo, socialismo, nacionalismo serbio y reconoce la independencia de la República de Lituania. Este sitio web no endosa de ninguna manera la ideología comunista y debido a su contenido no debe ser visto por nadie.";
	document.getElementById("en").style.filter = "grayscale(50%)";
	document.getElementById("es").style.filter = "none";
}

// Likely will never be finished unless I somehow get my shit together

/*
function jugoslavify() {
	document.getElementById("introduction").innerHTML = "Поздрав, друже!";
	document.getElementById("theproblem").innerHTML = "Ова веб страница је резервисана за међугалактичко комунистичко царство <b>БАЗНИ КОМУСТ</b>.";
	document.getElementById("thesis").innerHTML = "Стационирани сте на станици <b>ПОЛУС</b>.";
	document.getElementById("conclusion").innerHTML = "Уживајте у боравку, друже!";
}
*/

let song;
const sonks = ['red_sun_in_the_sky.mp3', 'der_heimliche_aufmarsch.mp3', 'bosanska_artiljerija.mp3',
				'freie_deutsche_jugend.mp3', 'god_syria_and_bashar.mp3', 'potato_pride.mp3',
				'my_dad_is_a_war_criminal.mp3', 'zelyonka.mp3'];

function playpropaganda() {
	if (song) {
		song.pause()
	}
	song = new Audio(`musik/${sonks[Math.floor(Math.random() * sonks.length)]}`);
	song.play();
}

window.onload = () => {
	document.getElementById("es").style.filter = "grayscale(50%)";
}