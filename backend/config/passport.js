const PassportJWT = require('passport-jwt'),
			ExtractJWT = PassportJWT.ExtractJwt,
			JwtStrategy = PassportJWT.Strategy,
			config = require('@CONFIG'),
			models = require('@SETUP')

module.exports = (passport) => {
	const User = models.User

	const params = {
		secretOrKey: config.secret,
		jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
	}

	passport.use(new JwtStrategy(params, (payload, done) => {
		User.findOne({ id: payload.id }, (error, user) => {
			if (error) return done(error, false)
			if (user) return done(null, user)
			else done(null, false)
		})
	}))
}
