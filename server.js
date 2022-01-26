/* eslint-disable no-await-in-loop */
const express = require('express')
const fs = require('fs')
const path = require('path')
const sequelize = require('./src/config/database')
const User = require('./src/user/User')
const UsersStatistic = require('./src/usersStatistic/UsersStatistic')
const app = require('./src/app')
const { getUsersFromJSON } = require('./src/services/user')
const { getUsersStatisticFromJSON } = require('./src/services/users_statistic')

if (process.env.NODE_ENV === 'production') {
  const pathD = './prod-database.sqlite'
  if (fs.existsSync(pathD)) {
    sequelize.sync()
  } else {
    sequelize.sync({ force: true }).then(async () => {
      const users = await getUsersFromJSON()
      const usersStatistic = await getUsersStatisticFromJSON()
      await User.bulkCreate(users)
      await UsersStatistic.bulkCreate(usersStatistic)
    })
  }
} else {
  const pathD = './dev-database.sqlite'
  if (fs.existsSync(pathD)) {
    sequelize.sync()
  } else {
    sequelize.sync({ force: true }).then(async () => {
      const users = await getUsersFromJSON()
      const usersStatistic = await getUsersStatisticFromJSON()
      await User.bulkCreate(users)
      await UsersStatistic.bulkCreate(usersStatistic)
    })
  }
}

const port = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log('app is running')
})
