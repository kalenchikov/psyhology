const mongoose = require('mongoose')
			UserModel = require('@MODELS/user')

const models = {
	User: mongoose.model('User')
}

module.exports = models
