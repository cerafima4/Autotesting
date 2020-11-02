module.exports = {
	'Через браузер переходим на сайт habr.com': function (browser) {
		browser
			.url('https://habr.com/ru/')
			.waitForElementVisible('#search-form-btn', 5000);
	},

	'По клику на лупу разворачиваем окно поиска': function (browser) {
		browser
			.click('#search-form-btn')
			.waitForElementVisible('#search-form-field', 5000);
	},

	'Вводим в строку поиска запрос (репозиторий) и нажимаем enter': function (browser) {
		browser
			.setValue('#search-form-field', 'репозиторий')
			.keys(browser.Keys.ENTER)
			.waitForElementVisible('#inner_search_form > div > input', 5000);
	},

	'Проверяем наличие найденный результатов, находящихся под поисковой стройой': function (browser) {
		browser
			.assert
			.elementPresent('body > div.layout > div.layout__row.layout__row_body > div > section > div.content_left.search-page.js-content_left > div.tabs > div > a:nth-child(1) > h3')
			.end();
	}




}
