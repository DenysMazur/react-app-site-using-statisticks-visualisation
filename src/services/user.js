const fsPromises = require('fs').promises

const getUsersFromJSON = () =>
  new Promise((resolve, reject) => {
    fsPromises.readFile('./users.json', 'utf8').then(data => {
      const users = JSON.parse(data)
      resolve(users)
    })
  })

module.exports = {
  getUsersFromJSON
}
