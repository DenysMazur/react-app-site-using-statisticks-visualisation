const router = require('express').Router()
const User = require('../user/User')
const UsersStatistic = require('./UsersStatistic')

router.get('/', async (req, res) => {
  const usersStatistic = await UsersStatistic.findAll({
    include: [
      {
        model: User,
        as: 'user'
      }
    ]
  })
  res.send({
    content: usersStatistic
  })
})

module.exports = router
