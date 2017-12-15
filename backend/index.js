require('module-alias/register')

const http = require('http'),
			API = require('@API'),
			SERVER = http.Server(API),
			PORT = process.env.PORT || 3000,
			HOST = process.env.HOST || '10.14.17.190'

SERVER.listen(PORT, HOST, () => console.log(`Server successfully running on port ${PORT}`))
