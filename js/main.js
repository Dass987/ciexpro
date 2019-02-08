let myVar = setTimeout(showPage, 2000);

window.addEventListener('load', async () => {

	let north = await $('.gallery a.north-route-thumbnail').simpleLightbox(),
		south = await $('.gallery a.south-route-thumbnail').simpleLightbox(),
		base = await $('.gallery a.base-route-thumbnail').simpleLightbox();

	myVar;
	
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