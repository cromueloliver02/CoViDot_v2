// INIT API
const api = new API();
// INIT UI
const ui = new UI();

document.getElementById('country-select').addEventListener('change', () => {
	// GET COUNTRY SELECT VALUE
	const country = document.getElementById('country-select').value;

	api
		.getCountryCases(country)
		.then((casesJSON) => {
			ui.displayCountryCases(casesJSON, true);
		})
		.catch((error) => {
			console.log(error);
		});

	// DISPLAY GLOBAL CASES
	api
		.getGlobalCases()
		.then((worldCasesJSON) => {
			ui.displayWorldCases(worldCasesJSON);
		})
		.catch((error) => {
			console.log(error);
		});
});

document.addEventListener('DOMContentLoaded', () => {
	// SET COUNTRY SELECTION OF THE COUNTRY SELECT OPTION
	api
		.getCountries()
		.then((countryJSON) => {
			ui.setCountrySelection(countryJSON);
		})
		.catch((error) => {
			console.log(error);
		});

	// SET DEFAULT COUNTRY TO DISPLAY INITIALLY
	api
		.getCountryCases('Philippines')
		.then((casesJSON) => {
			ui.displayCountryCases(casesJSON, false);
		})
		.catch((error) => {
			console.log(error);
		});

	// DISPLAY GLOBAL CASES
	api
		.getGlobalCases()
		.then((worldCasesJSON) => {
			ui.displayWorldCases(worldCasesJSON);
		})
		.catch((error) => {
			console.log(error);
		});

	// DISPLAY TIME
	setInterval(() => {
		ui.displayTime();
	}, 1000);

	// DISPLAY COPYRIGHT YEAR
	ui.displayYear();
});

setTimeout(() => {
	// WORLD SECTION TOP OFFSET
	const countryOffsetLayer1 = $('.country-layer1').offset().top;
	const countryOffsetLayer2 = $('.country-layer2').offset().top;
	const worldOffsetLayer1 = $('.world-layer1').offset().top;
	const worldOffsetLayer2 = $('.world-layer2').offset().top;
	let countUpCountryLayer1Finished = false;
	let countUpCountryLayer2Finished = false;
	let countUpWorldLayer1Finished = false;
	let countUpWorldLayer2Finished = false;

	$(window).scroll(function () {
		// COUNTRY LAYER 1
		if (
			!countUpCountryLayer1Finished &&
			window.pageYOffset > countryOffsetLayer1 - $(window).height()
		) {
			ui.animateCountryDatas1();

			countUpCountryLayer1Finished = true;
		}

		// COUNTRY LAYER 2
		if (
			!countUpCountryLayer2Finished &&
			window.pageYOffset > countryOffsetLayer2 - $(window).height()
		) {
			ui.animateCountryDatas2();

			countUpCountryLayer2Finished = true;
		}

		// WORLD LAYER 1
		if (
			!countUpWorldLayer1Finished &&
			window.pageYOffset > worldOffsetLayer1 - $(window).height()
		) {
			ui.animateWorldDatas1();

			countUpWorldLayer1Finished = true;
		}

		// WORLD LAYER 2
		if (
			!countUpWorldLayer2Finished &&
			window.pageYOffset > worldOffsetLayer2 - $(window).height()
		) {
			ui.animateWorldDatas2();

			countUpWorldLayer2Finished = true;
		}
	});
}, 1000);

/* SMOOTH SCROLLING */
$('#showcase a').on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 70
			},
			800
		);
	}
});
