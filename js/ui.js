class UI {
	constructor() {
		this.countrySelect = document.getElementById('country-select');
		this.country_section = document.getElementById('country-section');
		this.world_section = document.getElementById('world-section');
		this.today = document.getElementById('today');
		this.year = document.getElementById('year');
		this.countryChart;
		this.worldChart;
	}

	setCountrySelection(countries) {
		let output = '';

		countries.forEach((country) => {
			if (country.province !== null) {
				output += `
		            <option value="${country.country}">${country.country} ${country.province}</option>
		        `;
			} else {
				output += `
		            <option value="${country.country}">${country.country}</option>
		        `;
			}

			if (country.country === 'Philippines') {
				output += `
			        <option value="${country.country}" selected>${country.country}</option>
			    `;
			}
		});

		// countries.forEach((country) => {
		// 	if (country.country === 'Philippines') {
		// 		output += `
		// 			<option value="${country.country}" selected>${country.country}</option>
		// 		`;
		// 	} else {
		// 		output += `
		// 			<option value="${country.country}">${country.country}</option>
		// 		`;
		// 	}
		// });

		this.countrySelect.innerHTML = output;
	}

	displayCountryCases(country, isChanged) {
		const output = `
            <div class="px-5 mx-5">
                <div class="card card-body bg-transparent">
                    <h1 class="text-center mb-4 country-name">
                        ${country.country}
                        &nbsp;
                        <img id="country-flag" src="${country.countryInfo.flag}" alt="" />
                    </h1>
                    <div class="row">
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Cases</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-users case-icon text-secondary"></i>
                                <span class="case-number text-light country-layer1 countup-country-layer1">${country.cases}</span>
                            </div>
                            <div class="card-footer">
                                <span>New cases: +<span class="countup-country-layer1">${country.todayCases}</span></span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Deaths</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user-minus case-icon text-dark"></i>
                                <span class="case-number text-light countup-country-layer1">${country.deaths}</span>
                            </div>
                            <div class="card-footer">
                                <span>New deaths: +<span class="countup-country-layer1">${country.todayDeaths}</span></span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Recovered</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user-check case-icon text-success"></i>
                                <span class="case-number text-light countup-country-layer1">${country.recovered}</span>
                            </div>
                            <div class="card-footer">
                                <span>New recovered: +<span class="countup-country-layer1">${country.todayRecovered}</span></span>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Active</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user case-icon text-warning"></i>
                                <span class="case-number text-light country-layer2 countup-country-layer2">${country.active}</span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Critical</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user-times case-icon text-danger"></i>
                                <span class="case-number text-light countup-country-layer2">${country.critical}</span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Tested</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user-plus case-icon text-primary"></i>
                                <span class="case-number text-light countup-country-layer2">${country.tests}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

		// DISPLAY OUTPUT
		this.country_section.innerHTML = output;

		// ANIMATE COUNTRY DATAS
		if (isChanged === true) {
			ui.animateCountryDatas1();
			ui.animateCountryDatas2();
		}
	}

	displayWorldCases(earth) {
		const output = `
            <div class="px-5 mx-5">
                <div class="card card-body bg-transparent">
                    <h1 class="text-center mb-4 country-name">
                    World
                    &nbsp;
                    <img id="world-logo" src="./img/world_icon.png" alt="" />
                    </h1>
                    <div class="row">
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Cases</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-users case-icon text-secondary"></i>
                                <span class="case-number text-light world-layer1 countUp-world-layer1">${earth.cases}</span>
                            </div>
                            <div class="card-footer">
                                <span>New cases: +<span class="countUp-world-layer1">${earth.todayCases}</span></span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Deaths</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user-minus case-icon text-dark"></i>
                                <span class="case-number text-light countUp-world-layer1">${earth.deaths}</span>
                            </div>
                            <div class="card-footer">
                                <span>New deaths: +<span class="countUp-world-layer1">${earth.todayDeaths}</span></span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Recovered</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user-check case-icon text-success"></i>
                                <span class="case-number text-light countUp-world-layer1">${earth.recovered}</span>
                            </div>
                            <div class="card-footer">
                                <span>New recovered: +<span class="countUp-world-layer1">${earth.todayRecovered}</span></span>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center mb-resp">
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Active</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user case-icon text-warning"></i>
                                <span class="case-number text-light world-layer2 countUp-world-layer2">${earth.active}</span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Critical</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user-times case-icon text-danger"></i>
                                <span class="case-number text-light countUp-world-layer2">${earth.critical}</span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center mb-resp">
                            <div class="card-header">
                                <h4 class="m-0">Tested</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user-plus case-icon text-primary"></i>
                                <span class="case-number text-light countUp-world-layer2">${earth.tests}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

		// DISPLAY OUTPUT
		this.world_section.innerHTML = output;
	}

	// DISPLAY COUNTRY TEMPLATE CHART
	displayCountryTemplateChart() {
		const countryCtx = document
			.getElementById('country-chart')
			.getContext('2d');

		this.countryChart = new Chart(countryCtx, {
			type: 'line',
			data: {
				labels: ['0', '1', '2', '3', '4'],
				datasets: [
					{
						label: 'Cases',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(220,	53,	69, 0.4)',
						borderColor: 'rgba(220,	53,	69, 1)',
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJointStyle: 'miter',
						pointBorderColor: 'rgba(220, 53, 69, 1)',
						pointBackgroundColor: 'rgba(220, 53, 69, 1)',
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(220, 53, 69, 1)',
						pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						cubicInterpolationMode: 'monotone',
						data: ['0', '1', '2', '3', '4']
					},
					{
						label: 'Deaths',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(0, 0, 0, 0.4)',
						borderColor: 'rgba(0, 0, 0, 1)',
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJointStyle: 'miter',
						pointBorderColor: 'rgba(0, 0, 0, 1)',
						pointBackgroundColor: 'rgba(0, 0, 0, 1)',
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(0, 0, 0, 1)',
						pointHoverBorderColor: 'rgba(220,220,220, 1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						cubicInterpolationMode: 'monotone',
						data: ['3', '4', '3', '5', '2']
					},
					{
						label: 'Recovered',
						fill: false,
						lineTension: 0.5,
						backgroundColor: 'rgba(40, 167, 69, 0.4)',
						borderColor: 'rgba(40, 167, 69, 1)',
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJointStyle: 'miter',
						pointBorderColor: 'rgba(40, 167, 69, 1)',
						pointBackgroundColor: 'rgba(40, 167, 69, 1)',
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(40, 167, 69, 1)',
						pointHoverBorderColor: 'rgba(220,220,220, 1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						cubicInterpolationMode: 'monotone',
						data: ['2', '1', '5', '4', '3']
					}
				]
			},
			options: {
				title: {
					display: true,
					text: `Cases in Philippines since the pandemic began`,
					fontSize: 25,
					fontColor: 'rgb(211, 211, 211)'
				},
				legend: {
					display: true,
					position: 'top',
					labels: {
						fontColor: 'rgb(211, 211, 211)'
					}
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						bottom: 0,
						top: 0
					}
				},
				tooltips: {
					enabled: true
				},
				scales: {
					yAxes: [
						{
							ticks: {
								fontColor: 'rgb(211, 211, 211)',
								beginAtZero: true
							}
						}
					],
					xAxes: [
						{
							ticks: {
								fontColor: 'rgb(211, 211, 211)',
								beginAtZero: true
							}
						}
					]
				}
			}
		});
	}

	displayWorldChartTemplate() {
		const worldCtx = document.getElementById('world-chart').getContext('2d');

		this.worldChart = new Chart(worldCtx, {
			type: 'line',
			data: {
				labels: ['0', '1', '2', '3', '4'],
				datasets: [
					{
						label: 'Cases',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(220,	53,	69, 0.4)',
						borderColor: 'rgba(220,	53,	69, 1)',
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJointStyle: 'miter',
						pointBorderColor: 'rgba(220, 53, 69, 1)',
						pointBackgroundColor: 'rgba(220, 53, 69, 1)',
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(220, 53, 69, 1)',
						pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						cubicInterpolationMode: 'monotone',
						data: ['0', '1', '2', '3', '4']
					},
					{
						label: 'Deaths',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(0, 0, 0, 0.4)',
						borderColor: 'rgba(0, 0, 0, 1)',
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJointStyle: 'miter',
						pointBorderColor: 'rgba(0, 0, 0, 1)',
						pointBackgroundColor: 'rgba(0, 0, 0, 1)',
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(0, 0, 0, 1)',
						pointHoverBorderColor: 'rgba(220,220,220, 1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						cubicInterpolationMode: 'monotone',
						data: ['3', '4', '3', '5', '2']
					},
					{
						label: 'Recovered',
						fill: false,
						lineTension: 0.5,
						backgroundColor: 'rgba(40, 167, 69, 0.4)',
						borderColor: 'rgba(40, 167, 69, 1)',
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJointStyle: 'miter',
						pointBorderColor: 'rgba(40, 167, 69, 1)',
						pointBackgroundColor: 'rgba(40, 167, 69, 1)',
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(40, 167, 69, 1)',
						pointHoverBorderColor: 'rgba(220,220,220, 1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						cubicInterpolationMode: 'monotone',
						data: ['2', '1', '5', '4', '3']
					}
				]
			},
			options: {
				title: {
					display: true,
					text: `Over all cases since the pandemic began`,
					fontSize: 25,
					fontColor: 'rgb(211, 211, 211)'
				},
				legend: {
					display: true,
					position: 'top',
					labels: {
						fontColor: 'rgb(211, 211, 211)'
					}
				},
				layout: {
					padding: {
						left: 0,
						right: 0,
						bottom: 0,
						top: 0
					}
				},
				tooltips: {
					enabled: true
				},
				scales: {
					yAxes: [
						{
							ticks: {
								fontColor: 'rgb(211, 211, 211)',
								beginAtZero: true
							}
						}
					],
					xAxes: [
						{
							ticks: {
								fontColor: 'rgb(211, 211, 211)',
								beginAtZero: true
							}
						}
					]
				}
			}
		});
	}

	// UPDATE CHART DATAS
	updateChartData(chart, labels, cases, deaths, recovered, country) {
		if (country) {
			chart.options.title.text = `Cases in ${country} since the pandemic began`;
		}

		for (let i = 0; i < labels.length; i++) {
			chart.data.labels[i] = labels[i];
		}

		for (let i = 0; i < labels.length; i++) {
			chart.data.datasets[0].data[i] = cases[i];
		}

		for (let i = 0; i < labels.length; i++) {
			chart.data.datasets[1].data[i] = deaths[i];
		}

		for (let i = 0; i < labels.length; i++) {
			chart.data.datasets[2].data[i] = recovered[i];
		}

		chart.update();
	}

	animateCountryDatas1() {
		$('.countup-country-layer1').each(function () {
			const element = $(this);
			const endVal = parseInt(element.text());

			element.countup(endVal);
		});
	}

	animateCountryDatas2() {
		$('.countup-country-layer2').each(function () {
			const element = $(this);
			const endVal = parseInt(element.text());

			element.countup(endVal);
		});
	}

	animateWorldDatas1() {
		$('.countUp-world-layer1').each(function () {
			var element = $(this);
			var endVal = parseInt(element.text());

			element.countup(endVal);
		});
	}

	animateWorldDatas2() {
		$('.countUp-world-layer2').each(function () {
			var element = $(this);
			var endVal = parseInt(element.text());

			element.countup(endVal);
		});
	}

	// get realtime
	displayTime() {
		let currentDate = new Date();
		let currentTime = new Date();
		let hh = String(currentTime.getHours());
		let mm = String(currentTime.getMinutes()).padStart(2, '0');
		let ss = String(currentTime.getSeconds()).padStart(2, '0');
		let noon = '',
			today = '',
			time = '';
		const month = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		const day = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];
		let current_month = month[currentDate.getMonth()];
		const current_date = currentDate.getDate();
		const current_day = day[currentDate.getDay()];
		const current_year = currentDate.getFullYear();

		// AM    24 - 11
		if ((hh >= 1 && hh <= 11) || hh === 24) {
			noon = 'AM';
		}
		// PM    12 - 23
		if (hh >= 12 && hh <= 23) {
			noon = 'PM';
		}
		// convert to standard time
		if (hh > 12) {
			hh -= 12;
		}

		time = `${hh} : ${mm} : ${ss} ${noon}`;
		today = `${current_month} ${current_date}(${current_day}), ${current_year}`;

		this.today.innerHTML = `${today} | ${time}`;
	}

	displayYear() {
		const year = new Date().getFullYear();

		this.year.textContent = year;
	}
}

// this.config = {
// 	type: 'line',
// 	data: {
// 		labels: ['1', '2', '3', '4', '5'],
// 		datasets: [
// 			{
// 				label: 'Cases',
// 				fill: false,
// 				lineTension: 0.1,
// 				backgroundColor: 'rgba(220,	53,	69, 0.4)',
// 				borderColor: 'rgba(220,	53,	69, 1)',
// 				borderCapStyle: 'butt',
// 				borderDash: [],
// 				borderDashOffset: 0.0,
// 				borderJointStyle: 'miter',
// 				pointBorderColor: 'rgba(220, 53, 69, 1)',
// 				pointBackgroundColor: 'rgba(220, 53, 69, 1)',
// 				pointBorderWidth: 1,
// 				pointHoverRadius: 5,
// 				pointHoverBackgroundColor: 'rgba(220, 53, 69, 1)',
// 				pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
// 				pointHoverBorderWidth: 2,
// 				pointRadius: 1,
// 				pointHitRadius: 10,
// 				cubicInterpolationMode: 'monotone',
// 				data: ['1', '2', '3', '4', '5']
// 			},
// {
// 	label: 'Deaths',
// 	fill: false,
// 	lineTension: 0.1,
// 	backgroundColor: 'rgba(0, 0, 0, 0.4)',
// 	borderColor: 'rgba(0, 0, 0, 1)',
// 	borderCapStyle: 'butt',
// 	borderDash: [],
// 	borderDashOffset: 0.0,
// 	borderJointStyle: 'miter',
// 	pointBorderColor: 'rgba(0, 0, 0, 1)',
// 	pointBackgroundColor: 'rgba(0, 0, 0, 1)',
// 	pointBorderWidth: 1,
// 	pointHoverRadius: 5,
// 	pointHoverBackgroundColor: 'rgba(0, 0, 0, 1)',
// 	pointHoverBorderColor: 'rgba(220,220,220, 1)',
// 	pointHoverBorderWidth: 2,
// 	pointRadius: 1,
// 	pointHitRadius: 10,
// 	cubicInterpolationMode: 'monotone',
// 	data: ['3', '4', '3', '5', '2']
// },
// {
// 	label: 'Recovered',
// 	fill: false,
// 	lineTension: 0.5,
// 	backgroundColor: 'rgba(40, 167, 69, 0.4)',
// 	borderColor: 'rgba(40, 167, 69, 1)',
// 	borderCapStyle: 'butt',
// 	borderDash: [],
// 	borderDashOffset: 0.0,
// 	borderJointStyle: 'miter',
// 	pointBorderColor: 'rgba(40, 167, 69, 1)',
// 	pointBackgroundColor: 'rgba(40, 167, 69, 1)',
// 	pointBorderWidth: 1,
// 	pointHoverRadius: 5,
// 	pointHoverBackgroundColor: 'rgba(40, 167, 69, 1)',
// 	pointHoverBorderColor: 'rgba(220,220,220, 1)',
// 	pointHoverBorderWidth: 2,
// 	pointRadius: 1,
// 	pointHitRadius: 10,
// 	cubicInterpolationMode: 'monotone',
// 	data: ['2', '1', '5', '4', '3']
// }
// 		]
// 	},
// 	options: {
// 		title: {
// 			display: true,
// 			text: `Cases in Philippines since the pandemic began`,
// 			fontSize: 25,
// 			fontColor: 'rgb(211, 211, 211)'
// 		},
// 		legend: {
// 			display: true,
// 			position: 'top',
// 			labels: {
// 				fontColor: 'rgb(211, 211, 211)'
// 			}
// 		},
// 		layout: {
// 			padding: {
// 				left: 0,
// 				right: 0,
// 				bottom: 0,
// 				top: 0
// 			}
// 		},
// 		tooltips: {
// 			enabled: true
// 		},
// 		scales: {
// 			yAxes: [
// 				{
// 					ticks: {
// 						fontColor: 'rgb(211, 211, 211)',
// 						beginAtZero: true
// 					}
// 				}
// 			],
// 			xAxes: [
// 				{
// 					ticks: {
// 						fontColor: 'rgb(211, 211, 211)',
// 						beginAtZero: true
// 					}
// 				}
// 			]
// 		}
// 	}
// };

// const ctx = document.getElementById('country-chart').getContext('2d');
// this.lineChart = new Chart(ctx, this.config);

// this.worldConfig = {
// 	type: 'line',
// 	data: {
// 		labels: ['1', '2', '3', '4', '5'],
// 		datasets: [
// 			{
// 				label: 'Cases',
// 				fill: false,
// 				lineTension: 0.1,
// 				backgroundColor: 'rgba(220,	53,	69, 0.4)',
// 				borderColor: 'rgba(220,	53,	69, 1)',
// 				borderCapStyle: 'butt',
// 				borderDash: [],
// 				borderDashOffset: 0.0,
// 				borderJointStyle: 'miter',
// 				pointBorderColor: 'rgba(220, 53, 69, 1)',
// 				pointBackgroundColor: 'rgba(220, 53, 69, 1)',
// 				pointBorderWidth: 1,
// 				pointHoverRadius: 5,
// 				pointHoverBackgroundColor: 'rgba(220, 53, 69, 1)',
// 				pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
// 				pointHoverBorderWidth: 2,
// 				pointRadius: 1,
// 				pointHitRadius: 10,
// 				cubicInterpolationMode: 'monotone',
// 				data: ['1', '2', '3', '4', '5']
// 			},
// 			{
// 				label: 'Deaths',
// 				fill: false,
// 				lineTension: 0.1,
// 				backgroundColor: 'rgba(0, 0, 0, 0.4)',
// 				borderColor: 'rgba(0, 0, 0, 1)',
// 				borderCapStyle: 'butt',
// 				borderDash: [],
// 				borderDashOffset: 0.0,
// 				borderJointStyle: 'miter',
// 				pointBorderColor: 'rgba(0, 0, 0, 1)',
// 				pointBackgroundColor: 'rgba(0, 0, 0, 1)',
// 				pointBorderWidth: 1,
// 				pointHoverRadius: 5,
// 				pointHoverBackgroundColor: 'rgba(0, 0, 0, 1)',
// 				pointHoverBorderColor: 'rgba(220,220,220, 1)',
// 				pointHoverBorderWidth: 2,
// 				pointRadius: 1,
// 				pointHitRadius: 10,
// 				cubicInterpolationMode: 'monotone',
// 				data: ['3', '4', '3', '5', '2']
// 			},
// 			{
// 				label: 'Recovered',
// 				fill: false,
// 				lineTension: 0.1,
// 				backgroundColor: 'rgba(40, 167, 69, 0.4)',
// 				borderColor: 'rgba(40, 167, 69, 1)',
// 				borderCapStyle: 'butt',
// 				borderDash: [],
// 				borderDashOffset: 0.0,
// 				borderJointStyle: 'miter',
// 				pointBorderColor: 'rgba(40, 167, 69, 1)',
// 				pointBackgroundColor: 'rgba(40, 167, 69, 1)',
// 				pointBorderWidth: 1,
// 				pointHoverRadius: 5,
// 				pointHoverBackgroundColor: 'rgba(40, 167, 69, 1)',
// 				pointHoverBorderColor: 'rgba(220,220,220, 1)',
// 				pointHoverBorderWidth: 2,
// 				pointRadius: 1,
// 				pointHitRadius: 10,
// 				cubicInterpolationMode: 'monotone',
// 				data: ['2', '1', '5', '4', '3']
// 			}
// 		]
// 	},
// 	options: {
// 		title: {
// 			display: true,
// 			text: `Global cases since the pandemic began`,
// 			fontSize: 25,
// 			fontColor: 'rgb(211, 211, 211)'
// 		},
// 		legend: {
// 			display: true,
// 			position: 'top',
// 			labels: {
// 				fontColor: 'rgb(211, 211, 211)'
// 			}
// 		},
// 		layout: {
// 			padding: {
// 				left: 0,
// 				right: 0,
// 				bottom: 0,
// 				top: 0
// 			}
// 		},
// 		tooltips: {
// 			enabled: true
// 		},
// 		scales: {
// 			yAxes: [
// 				{
// 					ticks: {
// 						fontColor: 'rgb(211, 211, 211)',
// 						beginAtZero: true
// 					}
// 				}
// 			],
// 			xAxes: [
// 				{
// 					ticks: {
// 						fontColor: 'rgb(211, 211, 211)',
// 						beginAtZero: true
// 					}
// 				}
// 			]
// 		}
// 	}
// };

// const ctx = document.getElementById('world-chart').getContext('2d');
// this.worldLineChart = new Chart(ctx, this.worldConfig);
