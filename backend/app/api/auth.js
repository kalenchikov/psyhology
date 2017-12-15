const mongoose = require('mongoose')
			jwt = require('jsonwebtoken')
			config = require('@CONFIG')

const api = {}

api.login = (User) => (req, res) => {
	User.findOne({ username: req.body.username }, (error, user) => {
		if (error) throw error

		if (!user) res.status(401).send({ success: false, message: 'Authentication failed. User not found.' })
		else {
			user.comparePassword(req.body.password, (error, matches) => {
				if (matches && !error) {
					const token = jwt.sign({ user }, config.secret)
					res.json({ success: true, message: 'Token granted', token, user: user })
				}
				else {
					res.status(401).send({ success: false, message: 'Authentication failed. Wrong password.' })
				}
			})
		}
	})
}

api.verify = (headers) => {
	if (headers && headers.autorization) {
		const spheaders = headers.autorization.split(' ')

		if (spheaders.length === 2) return spheaders[1]
		else return null
	}
	else return null
}

module.exports = api