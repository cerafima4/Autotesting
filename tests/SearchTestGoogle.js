module.exports = {
	'перейти на сайт google.com': function (browser) {
		browser
			.url('https://www.google.com/')
			.waitForElementVisible(
				'cssSelector',
				'#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input',
				5000
			);
	},

	'ввести запрос в поисковую строку google': function (browser) {
		browser
			.setValue('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input', 'огурец')
			.click('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > div.tfB0Bf > center > input.gNO89b')
			.waitForElementVisible('#logo > img',5000);

	},
	'проверяем наличие результатов поиска': function (browser) {
		browser
			.assert
			.elementPresent('#result-stats')
			.end();
	}
}
