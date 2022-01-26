const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const UsersStatistic = require('../usersStatistic/UsersStatistic')

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    ip_address: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    underscored: true,
    modelName: 'user',
    tableName: 'users',
    timestamps: false
  }
)
User.hasMany(UsersStatistic, { foreignKey: 'user_id', as: 'statistic' })
UsersStatistic.belongsTo(User, { foreignKey: 'user_id' })
module.exports = User
