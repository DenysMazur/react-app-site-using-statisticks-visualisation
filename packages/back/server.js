/* eslint-disable no-await-in-loop */
const cors = require('cors')
const sequelize = require('./src/config/database')
const User = require('./src/user/User')
const UsersStatistic = require('./src/usersStatistic/UsersStatistic')
const UserService = require('./src/user/UserService')
const UsersStatisticService = require('./src/usersStatistic/UsersStatisticService')
const app = require('./src/app')
const { getUsersFromJSON } = require('./src/services/user')
const { getUsersStatisticFromJSON } = require('./src/services/users_statistic')

app.use(cors())

if (process.env.NODE_ENV === 'production') {
  sequelize.sync()
} else {
  sequelize.sync()
  // sequelize.sync({ force: true }).then(async () => {
  //   const users = await getUsersFromJSON()
  //   const usersStatistic = await getUsersStatisticFromJSON()
  //   await User.bulkCreate(users)
  //   await UsersStatistic.bulkCreate(usersStatistic)
  //   // users.forEach(async user => {
  //   //   await UserService.createUser(user)
  //   // })
  //   // usersStatistic.forEach(async userStatistic => {
  //   //   await UsersStatisticService.createUserStatistic(userStatistic)
  //   // })
  //   // for (let i = 0; i < 10; i++) {
  //   //   await UserService.createUser(users[i])
  //   // }
  //   // for (let i = 0; i < 10; i++) {
  //   //   await UsersStatisticService.createUserStatistic(usersStatistic[i])
  //   // }
  // })
}

app.listen(5000, () => {
  console.log('app is running')
})
