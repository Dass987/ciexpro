let myVar = setTimeout(showPage, 2000);

window.addEventListener('load', () => {
	myVar;
});

window.addEventListener('scroll', () => {
	
	if (document.getElementsByTagName("html")[0].scrollTop > 620) {
		document.getElementById("main-navbar").style.height = "60px";
		document.getElementById("main-navbar").style.backgroundColor = "#fafafa";
	} else if (document.getElementsByTagName("html")[0].scrollTop < 420) {
		document.getElementById("main-navbar").style.height = "100px";
		document.getElementById("main-navbar").style.backgroundColor = "transparent";
	}

});

// ---------------------------------------------------------------------------------------------------------------------------- //

function showPage() {
  document.getElementById("preloader").style.display = "none";
	document.querySelector("header").style.display = "block";
	document.querySelector("main").style.display = "block";
	document.querySelector("footer").style.display = "block";
}
