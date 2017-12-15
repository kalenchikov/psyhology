module.exports = (mongoose, config) => {
	const database = mongoose.connection
	mongoose.Promise = Promise

	mongoose.connect = (config.database, {
		useMongoClient: true,
    promiseLibrary: global.Promise
	})

	database.on('error', error => console.log(`Connection to psyhology database failed: ${error}`))
	database.on('connected', () => console.log('Connected to psyhology database'))
	database.on('disconnected', () => console.log('Disconnected from psyhology database'))

	process.on('SIGINT', () => {
		database.close(() => {
			console.log('psyhology terminated, connection closed')
			process.exit(0)
		})
	})

}
