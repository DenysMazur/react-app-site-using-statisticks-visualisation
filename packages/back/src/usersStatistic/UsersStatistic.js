const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class UsersStatistic extends Model {}

UsersStatistic.init(
  {
    user_id: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATEONLY
    },
    page_views: {
      type: DataTypes.NUMBER
    },
    clicks: {
      type: DataTypes.NUMBER
    }
  },
  {
    sequelize,
    modelName: 'usersStatistic',
    tableName: 'users-statistic',
    timestamps: false
  }
)

module.exports = UsersStatistic
