module.exports = {
	'перейти на сайт google.com': function (browser) {
		browser
			.url('https://www.google.com/')
			.waitForElementVisible(
				'css selector',
				'body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input',
				5000
			);
	},

	'ввести запрос в поисковую строку google': function (browser) {
		browser
			.setValue(
				'css selector',
				'body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input',
				'огурец'
			)
			.click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > div.tfB0Bf > center > input.gNO89b')
			.waitForElementVisible(
				'css selector',
				'#logo > img',
				5000
			);

	},
	'проверяем наличие результатов поиска': function (browser) {
		browser
			.assert
			.elementPresent('#result-stats')
			.end();
	}
}
