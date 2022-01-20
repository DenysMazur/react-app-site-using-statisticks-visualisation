const fsPromises = require('fs').promises

const getUsersStatisticFromJSON = () =>
  new Promise((resolve, reject) => {
    fsPromises.readFile('./users_statistic.json', 'utf8').then(data => {
      const usersStatistic = JSON.parse(data)
      resolve(usersStatistic)
    })
  })

module.exports = {
  getUsersStatisticFromJSON
}
