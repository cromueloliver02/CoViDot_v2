class API {
	async getCountries() {
		// FETCH COUNTRIES
		// const response = await fetch('https://disease.sh/v3/covid-19/countries');
		// const response = await fetch('https://disease.sh/v3/covid-19/historical');
		const response = await fetch('https://disease.sh/v3/covid-19/jhucsse');
		const countryJSON = await response.json();
		return countryJSON;
	}

	// FETCH COUNTRY CASES
	async getCountryCases(country) {
		const cases = await fetch(
			// `https://disease.sh/v3/covid-19/countries/${country}?yesterday=false&allowNull=true`
			`https://disease.sh/v3/covid-19/countries/${country}?yesterday=true`
		);
		const casesJSON = await cases.json();

		return casesJSON;
	}

	// FETCH HISTORICAL COUNTRY CASES
	async getHistoCountryCases(country) {
		const histoCases = await fetch(
			`https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`
		);
		const histoCasesJSON = await histoCases.json();

		return histoCasesJSON;
	}

	// FETCH GLOBAL CASES
	async getGlobalCases() {
		// const response = await fetch('https://disease.sh/v2/all');
		const response = await fetch(
			'https://disease.sh/v3/covid-19/all?yesterday=true'
		);
		const responseJSON = await response.json();

		return responseJSON;
	}

	// FETCH HISTORICAL GLOBAL CASES
	async getHistoGlobalCases() {
		const response = await fetch(
			`https://disease.sh/v3/covid-19/historical/all?lastdays=all`
		);
		const responseJSON = await response.json();

		return responseJSON;
	}
}
