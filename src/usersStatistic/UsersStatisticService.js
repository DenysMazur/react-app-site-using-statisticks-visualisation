/* eslint-disable camelcase */
const UsersStatistic = require('./UsersStatistic')

const createUserStatistic = async body => {
  const { user_id, date, page_views, clicks } = body
  await UsersStatistic.create({ user_id, date, page_views, clicks })
}

module.exports = {
  createUserStatistic
}
