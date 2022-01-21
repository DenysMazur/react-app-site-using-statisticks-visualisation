const express = require('express')

const router = express.Router()
const pagination = require('../shared/pagination')
const idNumberControl = require('../shared/idNumberControl')
const UserService = require('./UserService')

router.get('/', pagination, async (req, res) => {
  const page = await UserService.getUsers(req.pagination)
  res.send(page)
})
router.get('/user/:id', idNumberControl, async (req, res, next) => {
  try {
    const user = await UserService.getUser(req.params.id)
    res.send(user)
  } catch (err) {
    next(err)
  }
})

module.exports = router
