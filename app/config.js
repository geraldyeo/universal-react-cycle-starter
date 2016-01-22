const environment = {
	development: {
		isProduction: false
	},
	production: {
		isProduction: true
	}
}[process.env.NODE_ENV || 'development'];

export default Object.assign({
	host: process.env.HOST || 'localhost',
	port: process.env.PORT || 9000,
	apiHost: process.env.APIHOST || 'localhost',
	apiPort: process.env.APIPORT || 9030,
	app: {
		title: 'Universal React Frontend Boilerplate',
		description: 'Universal React Frontend Boilerplate',
		head: {
			titleTemplate: 'Universal React Redux Example: %s',
			meta: [
				{
					name: 'description',
					content: 'Universal React Frontend Boilerplate.'
				},
				{charset: 'utf-8'},
				{
					property: 'og:site_name',
					content: 'React Redux Example'
				},
				{
					property: 'og:image',
					content: 'https://react-redux.herokuapp.com/logo.jpg'
				},
				{
					property: 'og:locale',
					content: 'en_US'
				},
				{
					property: 'og:title',
					content: 'React Redux Example'
				},
				{
					property: 'og:description',
					content: 'All the modern best practices in one example.'
				},
				{
					property: 'og:card',
					content: 'summary'
				},
				{
					property: 'og:site',
					content: '@erikras'
				},
				{
					property: 'og:creator',
					content: '@erikras'
				},
				{
					property: 'og:title',
					content: 'React Redux Example'
				},
				{
					property: 'og:description',
					content: 'All the modern best practices in one example.'
				},
				{
					property: 'og:image',
					content: 'https://react-redux.herokuapp.com/logo.jpg'
				},
				{
					property: 'og:image:width',
					content: '200'
				},
				{
					property: 'og:image:height',
					content: '200'
				}
			]
		}
	}
}, environment);
