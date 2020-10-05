function loader1() {
	const paths = document.querySelectorAll("[data-name='loader-1'] path");

	[...paths].map((path) => {
		let name = path.getAttribute("data-name");
		let length = path.getTotalLength();

		path.setAttribute("stroke-dasharray", length);
		path.setAttribute("stroke-dashoffset", length);

		console.info(name, length);
	});
}

function loader2() {
	const paths = document.querySelectorAll("[data-name='loader-2'] path:not([data-name='line'])");

	[...paths].map((path) => {
		let center = path.getBoundingClientRect().width;
		let name = path.getAttribute("data-name");
		let length = path.getTotalLength();

		path.setAttribute("stroke-dasharray", length);
		path.setAttribute("stroke-dashoffset", length);

		console.info({
			name: name,
			length: length,
			center: center
		});
	});
}


function loaderAnim(){
	const loaders = document.querySelectorAll("[data-name^='loader-']");

	[...loaders].map(loader => loader.classList.remove("loader-anim"));
	setTimeout(function(){
		[...loaders].map(loader => loader.classList.add("loader-anim"));
	}, 200);
}

function switchTheme() {
	const checkbox = document.querySelector(".theme-switcher");

	checkbox.addEventListener("change", function () {
		const themeContainer = document.querySelector(".theme-container");
		if (themeContainer && this.checked) {
			themeContainer.classList.add("light");
		} else {
			themeContainer.classList.remove("light");
		}
		loaderAnim();
	});
}




(function(){
	loader1();
	loader2();
	loaderAnim();
	switchTheme();
})();