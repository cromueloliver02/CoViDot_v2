// INIT API
const api = new API();
// INIT UI
const ui = new UI();

// CHANGE COUNTRY EVENT LISTENER
document.getElementById('country-select').addEventListener('change', () => {
	// GET COUNTRY SELECT VALUE
	const country = document.getElementById('country-select').value;

	// DISPLAY COUNTRY DATA
	api
		.getCountryCases(country)
		.then((datasJSON) => {
			ui.displayCountryCases(datasJSON, true);
		})
		.catch((error) => {
			console.log(error);
		});

	// UPDATE COUNTRY CHART
	api
		.getHistoCountryCases(country)
		.then((response) => {
			if (!response.message) {
				const labels = Object.keys(response.timeline.cases);
				const cases = Object.values(response.timeline.cases);
				const deaths = Object.values(response.timeline.deaths);
				const recovered = Object.values(response.timeline.recovered);

				ui.updateChartData(
					ui.countryChart,
					labels,
					cases,
					deaths,
					recovered,
					country
				);
			} else {
				console.log('Country not found');
			}
		})
		.catch((error) => {
			console.log(error);
		});
});

// LOAD DOM EVENT LISTENER
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

	// DISPLAY PHILIPPINE CASES AS DEFAULT COUNTRY
	api
		.getCountryCases('Philippines')
		.then((datasJSON) => {
			ui.displayCountryCases(datasJSON, false);
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

	// DISPLAY TEMPLATE CHARTS
	ui.displayCountryTemplateChart();
	ui.displayWorldChartTemplate();

	// DISPLAY PHILIPPINE CHART AS DEFAULT CHART
	api
		.getHistoCountryCases('Philippines')
		.then((response) => {
			if (!response.message) {
				const labels = Object.keys(response.timeline.cases);
				const cases = Object.values(response.timeline.cases);
				const deaths = Object.values(response.timeline.deaths);
				const recovered = Object.values(response.timeline.recovered);

				ui.updateChartData(
					ui.countryChart,
					labels,
					cases,
					deaths,
					recovered,
					'Philippines'
				);
			} else {
				console.log('Country not found');
			}
		})
		.catch((error) => {
			console.log(error);
		});

	// DISPLAY GLOBAL CHART
	api
		.getHistoGlobalCases()
		.then((response) => {
			if (!response.message) {
				const labels = Object.keys(response.cases);
				const cases = Object.values(response.cases);
				const deaths = Object.values(response.deaths);
				const recovered = Object.values(response.recovered);

				ui.updateChartData(ui.worldChart, labels, cases, deaths, recovered);
			} else {
				console.log('Country not found');
			}
		})
		.catch((error) => {
			console.log(error);
		});

	// DISPLAY TIME
	setInterval(() => {
		ui.displayTime();
	}, 500);

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
}, 2000);

/* SMOOTH SCROLLING */
$('#showcase a').on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 130
			},
			800
		);
	}
});
