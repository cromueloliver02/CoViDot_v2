class UI {
	constructor() {
		this.countrySelect = document.getElementById('country-select');
		this.country_section = document.getElementById('country-section');
		this.world_section = document.getElementById('world-section');
		this.today = document.getElementById('today');
		this.year = document.getElementById('year');
	}

	setCountrySelection(countries) {
		let output = '';
		countries.forEach((country) => {
			if (country.country === 'Philippines') {
				output += `
                    <option value="${country.country}" selected>${country.country}</option>
                `;
			} else {
				output += `
                    <option value="${country.country}">${country.country}</option>
                `;
			}
		});

		this.countrySelect.innerHTML = output;
	}

	displayCountryCases(country, isChanged) {
		const output = `
            <div class="container">
                <div class="card card-body bg-transparent">
                    <h1 class="text-center mb-4 country-name">
                        ${country.country}
                        <img id="country_logo" src="${country.countryInfo.flag}" alt="" />
                    </h1>
                    <div class="row">
                        <div class="col-md-4 card text-center">
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
                        <div class="col-md-4 card text-center">
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
                        <div class="col-md-4 card text-center">
                            <div class="card-header">
                                <h4 class="m-0">Recovered</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user-plus case-icon text-success"></i>
                                <span class="case-number text-light countup-country-layer1">${country.recovered}</span>
                            </div>
                            <div class="card-footer">
                                <span>New recovered: +<span class="countup-country-layer1">${country.todayRecovered}</span></span>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-4 card text-center">
                            <div class="card-header">
                                <h4 class="m-0">Active</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user case-icon text-warning"></i>
                                <span class="case-number text-light country-layer2 countup-country-layer2">${country.active}</span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center">
                            <div class="card-header">
                                <h4 class="m-0">Critical</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user case-icon text-danger"></i>
                                <span class="case-number text-light countup-country-layer2">${country.critical}</span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center">
                            <div class="card-header">
                                <h4 class="m-0">Tests</h4>
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
            <div class="container">
                <div class="card card-body bg-transparent">
                    <h1 class="text-center mb-4 country-name">
                    World
                    <img id="world_logo" src="./img/world_icon.png" alt="" />
                    </h1>
                    <div class="row">
                        <div class="col-md-4 card text-center">
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
                        <div class="col-md-4 card text-center">
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
                        <div class="col-md-4 card text-center">
                            <div class="card-header">
                                <h4 class="m-0">Recovered</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user-plus case-icon text-success"></i>
                                <span class="case-number text-light countUp-world-layer1">${earth.recovered}</span>
                            </div>
                            <div class="card-footer">
                                <span>New recovered: +<span class="countUp-world-layer1">${earth.todayRecovered}</span></span>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-4 card text-center">
                            <div class="card-header">
                                <h4 class="m-0">Active</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user case-icon text-warning"></i>
                                <span class="case-number text-light world-layer2 countUp-world-layer2">${earth.active}</span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center">
                            <div class="card-header">
                                <h4 class="m-0">Critical</h4>
                            </div>
                            <div class="card-body d-flex flex-column">
                                <i class="fas fa-user case-icon text-danger"></i>
                                <span class="case-number text-light countUp-world-layer2">${earth.critical}</span>
                            </div>
                        </div>
                        <div class="col-md-4 card text-center">
                            <div class="card-header">
                                <h4 class="m-0">Tests</h4>
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
