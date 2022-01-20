const express = require('express')

const userRouter = require('./user/UserRouter')
const statisticRouter = require('./usersStatistic/UsersStatisticRouter')
const ErrorHandler = require('./error/ErrorHandler')

const app = express()

app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/users-statistic', statisticRouter)
app.use(ErrorHandler)

module.exports = app
