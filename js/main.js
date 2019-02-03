let myVar = setTimeout(showPage, 2000);

window.addEventListener('load', () => {
	myVar;
});

function showPage() {
  document.getElementById("preloader").style.display = "none";
	document.querySelector("header").style.display = "block";
	document.querySelector("main").style.display = "block";
	document.querySelector("footer").style.display = "block";
}