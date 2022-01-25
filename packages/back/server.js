/* eslint-disable no-await-in-loop */
const fs = require('fs')
const sequelize = require('./src/config/database')
const User = require('./src/user/User')
const UsersStatistic = require('./src/usersStatistic/UsersStatistic')
const app = require('./src/app')
const { getUsersFromJSON } = require('./src/services/user')
const { getUsersStatisticFromJSON } = require('./src/services/users_statistic')

if (process.env.NODE_ENV === 'production') {
  const path = './prod-database.sqlite'
  if (fs.existsSync(path)) {
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
  const path = './dev-database.sqlite'
  if (fs.existsSync(path)) {
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

app.listen(port, () => {
  console.log('app is running')
})
