/* eslint-disable camelcase */
const { Op } = require('sequelize')
const User = require('./User')
const sequelize = require('../config/database')
const UserNotFoundException = require('./UserNotFoundException')

const createUser = async body => {
  const { id, first_name, last_name, email, gender, ip_address } = body
  await User.create({ id, first_name, last_name, email, gender, ip_address })
}

const getUsers = async pagination => {
  const { page, size } = pagination
  const usersWithCount = await User.findAndCountAll({
    group: ['User.user_id'],
    limit: size,
    offset: page * size,
    include: [
      {
        association: 'statistic',
        attributes: [
          [sequelize.fn('SUM', sequelize.col('statistic.page_views')), 'total_page_views'],
          [sequelize.fn('SUM', sequelize.col('statistic.clicks')), 'total_clicks']
        ],
        duplicating: false
      }
    ]
  })
  return {
    content: usersWithCount.rows,
    totalPages: Math.ceil(usersWithCount.count.length / Number.parseInt(size, 10))
  }
}

const getUser = async req => {
  const { startDate, endDate } = req.query
  const { id } = req.params
  const user = await User.findOne({
    where: { id: id }
    // include: [
    //   {
    //     association: 'statistic',
    //     where: {
    //       date: {
    //         [Op.between]: [startDate, endDate]
    //       }
    //     }
    //   }
    // ]
  })
  if (!user) {
    throw new UserNotFoundException()
  }
  return user
}

const getUserStatistics = async req => {
  const { id, startDate, endDate } = req.body
  const user = await User.findOne({
    where: { id: id },
    include: [
      {
        association: 'statistic',
        where: {
          date: {
            [Op.between]: [startDate, endDate]
          }
        }
      }
    ]
  })
  if (!user) {
    throw new UserNotFoundException()
  }
  return user
}
module.exports = {
  createUser,
  getUsers,
  getUser,
  getUserStatistics
}
