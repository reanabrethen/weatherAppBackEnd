const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const weatherRouter = require('./weather/routes/weatherRouter')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/currentWeather', weatherRouter)

module.exports = app