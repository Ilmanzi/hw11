const Sequelize = require('sequelize')
const sequelize = require('../config/index');

const TodoList = sequelize.define('todolist', {
  id: {
  type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
name: {
  type: Sequelize.STRING,
  allowNull: false
}},
{ tableName: 'todolist', timestamps: false });

module.exports = TodoList;
