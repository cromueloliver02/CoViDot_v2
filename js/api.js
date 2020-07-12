class API {
	async getCountries() {
		// FETCH COUNTRIES
		const response = await fetch('https://disease.sh/v3/covid-19/countries');
		const countryJSON = await response.json();
		return countryJSON;
	}

	// FETCH CASES
	async getCountryCases(country) {
		const cases = await fetch(
			`https://disease.sh/v3/covid-19/countries/${country}`
		);
		const caseJSON = await cases.json();
		return caseJSON;
	}

	// FETCH GLOBAL CASES
	async getGlobalCases() {
		const response = await fetch('https://disease.sh/v2/all');
		const responseJSON = await response.json();

		return responseJSON;
	}
}
