const models = require('@SETUP')

module.exports = (app) => {
	const api = app.api.user

	app.route('/api/v1/signup').post(api.signup(models.User))
}