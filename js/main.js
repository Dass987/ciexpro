
document.addEventListener('DOMContentLoaded', () => {

	myVar;

});

let myVar = setTimeout(showPage, 2000);
const images = {
	south: {
		src: [
			'../img/south/DSC_8114.jpg',
			'../img/south/DSC_8115.jpg',
			'../img/south/DSC_8116.jpg',
			'../img/south/DSC_8119.jpg'
		]
	},
	north: {
		src: [
			'../img/north/DSC_8137.jpg',
			'../img/north/DSC_8141.jpg',
			'../img/north/DSC_8146.jpg',
			'../img/north/DSC_8157.jpg'
		]
	},
	base: {
		src: [
			'../img/base/DSC_8173.jpg',
			'../img/base/DSC_8176.jpg',
			'../img/base/DSC_8177.jpg',
			'../img/base/DSC_8189.jpg',
			'../img/base/DSC_8191.jpg',
			'../img/base/DSC_8193.jpg'
		]
	}
};

const northImgs = document.querySelectorAll("#north-route img");
const southImgs = document.querySelectorAll("#south-route img");
const baseImgs = document.querySelectorAll("#base-route img");
let counter = 0;

if (northImgs.length > 0) {

	images.north.src.forEach(uri => {
		northImgs[counter].onload = function () { console.log("Height: " + this.height); };
		northImgs[counter].src = uri;
		counter++;
	});

	let north = $('.gallery a.north-route-thumbnail').simpleLightbox();

}

if (southImgs.length > 0) {

	counter = 0;

	images.south.src.forEach(uri => {
		southImgs[counter].onload = function () { console.log("Height: " + this.height); };
		southImgs[counter].src = uri;
		counter++;
	});

	let south = $('.gallery a.south-route-thumbnail').simpleLightbox();

}

if (baseImgs.length > 0) {

	counter = 0;

	images.base.src.forEach(uri => {
		baseImgs[counter].onload = function () { console.log("Height: " + this.height); };
		baseImgs[counter].src = uri;
		counter++;
	});

	let base = $('.gallery a.base-route-thumbnail').simpleLightbox();

}

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