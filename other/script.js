function get_time_since(date_text) {
	const now = new Date();
	const date = new Date(date_text);

	let y = now.getFullYear() - date.getFullYear();
	let m = now.getMonth() - date.getMonth();
	let d = now.getDate() - date.getDate();

	if (d < 0) {
		m--;
		const prev_month = new Date(now.getFullYear(), now.getMonth(), 0);
		d += prev_month.getDate();
	}

	if (m < 0) {
		y--;
		m += 12;
	}

	return { y, m, d };
}

function display_time(date, element_id) {
	const { y, m, d } = get_time_since(date);
	document.getElementById(element_id).innerHTML = `${y} years, ${m} months, ${d} days`;
}

window.onload = () => {
	display_time(new Date("2025-01-17"), "websitedate");
	display_time(new Date("2022-05-30"), "bcdate");
	display_time(new Date("1991-12-25"), "ussrdate");
	display_time(new Date("1990-03-11"), "lithdate");
}

function anglify() {
	document.getElementById("dates").innerHTML = "DATES";
	document.getElementById("wsdate2").innerHTML = "Since the creation of this website";
	document.getElementById("bcdate2").innerHTML = "Since the creation of Base Comust";
	document.getElementById("ussrdate2").innerHTML = "Since the dissolution of the Soviet Union";
	document.getElementById("lithdate2").innerHTML = "Since the independence of the Republic of Lithuania";
	document.getElementById("credits").innerHTML = "CREDITS";
	document.getElementById("mecredit").innerHTML = "[REDACTED], the creator of the website";
	document.getElementById("katcredit").innerHTML = "Katrewkate, the main partner and inspiration";
	document.getElementById("fuckasswebsitecredit").innerHTML = "wallpaperflare.com, a shitty sketchy ad-infested website that I downloaded some iconic images from, most notably the website backgrounds";
	document.getElementById("vuciccredit").innerHTML = "Aleksandar Vucic, one extremely repulsive motherfucker that apparently also runs Comust";
	document.getElementById("semilegalnotice").innerHTML = "The contents of this site are purely fictional and satirical and do not have any affiliation with any real communist or socialist movements. Everything should be taken half-seriously and not viewed from an actual communist perspective. This website\'s owner strongly opposes communism, socialism, Serbian nationalism and recognizes the independence of the Republic of Lithuania. This website does not in any way endorse the communist ideology and due to its content it should not be viewed by anyone.";
}

function ñify() {
	document.getElementById("dates").innerHTML = "FECHAS";
	document.getElementById("wsdate2").innerHTML = "Desde la creación de este sitio web";
	document.getElementById("bcdate2").innerHTML = "Desde la creación de la Base Comust";
	document.getElementById("ussrdate2").innerHTML = "Desde la disolución del Unión Soviético";
	document.getElementById("lithdate2").innerHTML = "Desde la independencia de la República de Lituania";
	document.getElementById("credits").innerHTML = "CRÉDITOS";
	document.getElementById("mecredit").innerHTML = "[REDACTADO], el creador de este sitio web";
	document.getElementById("katcredit").innerHTML = "Katrewkate, el socio principal e inspiración";
	document.getElementById("fuckasswebsitecredit").innerHTML = "wallpaperflare.com, un sitio suspechoso de mierda que está infestadode anuncios de donde descargué algunas imágenes icónicas, lo más notable son los fondos";
	document.getElementById("vuciccredit").innerHTML = "Aleksandar Vucic, un bastardo repulsivo extremadamente que aparentemente también goberna la Comust";
	document.getElementById("semilegalnotice").innerHTML = "El contenido de este sitio es solamente ficticio y satírico y no tiene ninguna afiliación con ningúnes movimientos comunistas o socialistas real. Todo debe tomarse en media en serio y no desde una perspectiva comunista actual. El creador de este sitio web se opone firmemente al comunismo, socialismo, nacionalismo serbio y reconoce la independencia de la República de Lituania. Este sitio web no endosa de ninguna manera la ideología comunista y debido a su contenido no debe ser visto por nadie.";
}