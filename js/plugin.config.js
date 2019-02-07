// --- Responsive Touch-enabled jQuery Image Lightbox Plugin
// -- Url: https://www.jqueryscript.net/lightbox/Responsive-Touch-enabled-jQuery-Image-Lightbox-Plugin.html

// --- Default options

const options = {
	sourceAttr: 'href', // default source attribute
	overlay: true, // shows fullscreen overlay
	spinner: true, // shows loading spinner		
	nav: true, // shows navigation arrows
	navText: ['&larr;', '&rarr;'], // text for navigation arrows

	// shows image captions
	captions: true,
	captionDelay: 0,
	captionSelector: 'img',
	captionType: 'attr',
	captionPosition: 'bottom',
	captionClass: '',

	captionsData: 'title', // captions attribute (title or data-title)
	close: true, // shows close button
	closeText: 'X', // text for close button
	swipeClose: true, // swipe up or down to close gallery
	showCounter: true, // show counter
	fileExt: 'png|jpg|jpeg|gif', // file extensions
	animationSlide: true, // weather to slide in new photos or not, disable to fade
	animationSpeed: 250, // animation speed in ms
	preloading: true, // image preloading
	enableKeyboard: true, // keyboard navigation
	loop: true, // endless looping
	rel: false, // group images by rel attribute of link with same selector
	docClose: true, // closes the lightbox when clicking outside
	swipeTolerance: 50, // how much pixel you have to swipe
	className: 'simple-lightbox',	// lightbox wrapper Class
	widthRatio: 0.8, // width ratio
	heightRatio: 0.9, // height ratio
	scaleImageToRatio: false, // scales the image up to the defined ratio size
	disableRightClick: false, // disable right click
	disable: true, // disable page scroll
	alertError: true, // show an alert if image was not found
	alertErrorMessage: 'Image not found, next image will be loaded', // alert message
	additionalHtml: false, // additional HTML showing inside every image
	history: true, // enable history back closes lightbox instead of reloading the page
	throttleInterval: 0 // time to wait between slides
};

// --- Events

// -- open.simplelightbox: fires before the lightbox opens
// -- opened.simplelightbox: fires after the lightbox was opened
// -- close.simplelightbox: fires before the lightbox closes
// -- closed.simplelightbox: fires after the lightbox was closed
// -- change.simplelightbox: fires before image changes
// -- changed.simplelightbox : fires after image was changed
// -- next.simplelightbox: fires before next image arrives
// -- nextDone.simplelightbox: fires after next image was arrived
// -- prev.simplelightbox: fires before previous image arrives
// -- prevDone.simplelightbox: fires after previous image was arrived
// -- nextImageLoaded.simplelightbox : fires after next image was loaded(if preload activated)
// -- prevImageLoaded.simplelightbox : fires after previous image was loaded(if preload activated)
// -- error.simplelightbox : fires on image load error

/**
 * 
 * 
 	
	$('.gallery a').on('open.simplelightbox', function () {
  	// do something…
	});

 */