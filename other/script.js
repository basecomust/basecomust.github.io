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