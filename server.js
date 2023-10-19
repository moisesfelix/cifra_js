const http = require('http')
const app = require('./src/app')

const server = http.createServer(app)
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

const URL = process.env.URL
server.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT} in ${URL}`)
)
