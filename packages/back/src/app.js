const express = require('express')
const cors = require('cors')

const userRouter = require('./user/UserRouter')
const statisticRouter = require('./usersStatistic/UsersStatisticRouter')
const ErrorHandler = require('./error/ErrorHandler')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', userRouter)
app.use('/api/users-statistic', statisticRouter)
app.use(ErrorHandler)

module.exports = app
