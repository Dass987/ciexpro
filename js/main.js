let myVar = setTimeout(showPage, 2000);

window.addEventListener('load', () => {
	myVar;
});

window.addEventListener('scroll', () => {

	
	if (document.getElementsByTagName("html")[0].scrollTop >= 620) {
		/*document.getElementById("main-navbar").style.height = "60px";
		document.getElementById("main-navbar").style.backgroundColor = "#fafafa";*/
		//document.querySelector(".features-first").style.borderRight = "1px solid #512da8";
	} else if (document.getElementsByTagName("html")[0].scrollTop < 620) {
		//document.querySelector(".features-first").style.borderColor = "#e0e0e0";
		/*document.getElementById("main-navbar").style.height = "100px";
		document.getElementById("main-navbar").style.backgroundColor = "transparent";*/
	}

});

/* Set the width of the side navigation to 250px */
document.querySelector(".sidenav-trigger").addEventListener('click', () => { document.getElementById("ciexpro-sidenav").style.width = "250px"; });
/* Set the width of the side navigation to 0 */
document.querySelector(".close-sidenav").addEventListener("click", () => { document.getElementById("ciexpro-sidenav").style.width = "0"; });

// ---------------------------------------------------------------------------------------------------------------------------- //

function showPage() {
  document.getElementById("preloader").style.display = "none";
	document.querySelector("header").style.display = "block";
	document.querySelector("main").style.display = "block";
	document.querySelector("footer").style.display = "block";
}