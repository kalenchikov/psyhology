const models = require('@SETUP')

module.exports = (app) => {
	const api = app.api.auth

	app.route('/').get((req, res) => res.send('psyhology'))
	app.route('/api/v1/auth').post(api.login(models.User))
}