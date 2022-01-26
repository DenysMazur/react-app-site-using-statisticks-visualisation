const express = require('express')
const cors = require('cors')
const path = require('path')

const userRouter = require('./user/UserRouter')
const statisticRouter = require('./usersStatistic/UsersStatisticRouter')
const ErrorHandler = require('./error/ErrorHandler')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', userRouter)
app.use('/api/users-statistic', statisticRouter)
app.use(ErrorHandler)

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

module.exports = app
