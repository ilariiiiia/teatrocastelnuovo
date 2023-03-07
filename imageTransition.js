const presentations = [
	{
		"img": "/assets/foto_biasoli.png",
		"description": "Ciao! [descrizione della prof.ssa Biasoli]",
		"alt": "Foto della professoressa Biasoli"
	},
	{
		"img": "/assets/foto_albisani.png",
		"description": "Sono Sauro Albisani [continua descrizione...]",
		"alt": "Foto del professore Albisani"
	},
	{
		"img": "/assets/foto_manganiello.png",
		"description": "Sono il professore Manganiello e [continua...]",
		"alt" : "Foto del professore Manganiello"
	}
];

const presentationSlideChange = () => {
	let person = presentations[i];
	document.getElementById("presentation-image").src = person.img;
	document.getElementById("presentation-image").alt = person.alt;
	document.getElementById("presentation-image").title = person.alt;
	document.getElementById("presentation-text").innerHTML = person.description;
	i++;
	i = i % length;
}
let i = 0;
let t = 0;
let loading = 0;
let length = 3;
let duration = 40;
const loadingDiv = document.getElementById("loading-staff");
setInterval(() => {
	if (t == 0) {
		presentationSlideChange()
	}
	loadingDiv.style.width = t + "%";
	t++;
	t = t % 100;
}, duration);
const header = document.querySelector("#header");
const backToTop = document.querySelector("#backToTop");
window.onscroll = () => {
	if (window.scrollY <= 0) {
		header.style.height = "90px";
		header.style.fontSize = "25px";
		backToTop.style.opacity = 0;
	} else {
		header.style.height = "70px";
		header.style.fontSize = "inherit";
		if(window.scrollY >= 500) {
			backToTop.style.opacity = 1;
		} else {
			backToTop.style.opacity = 0;
		}
	}
}
window.onscroll();
window.onhashchange = () => {
	window.scrollBy(0, -80);
}
document.querySelector("#mappa").setAttribute("src", document.querySelector("#mappa").getAttribute("data-src"));