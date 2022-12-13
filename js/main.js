let swiper = new Swiper(".slider-container", {
	centeredSlides: true,
	spaceBetween: 50,
	slidesPerView: 2,
	// slidesPerView: "auto",
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
		dynamicBullets: true,
		renderBullet: function (index, className) {
			return ' <span class = "' + className + '">' + (index + 1) + "</span>";
		},
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	// mousewheel: {
	// 	invert: true,
	// 	eventsTarget: ".swiper-slide__img",
	// 	sensitivity: 1,
	// },
});
const sw = document.querySelector(".slider-container");

console.log(swiper, ":swiper");
