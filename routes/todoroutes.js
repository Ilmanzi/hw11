const express = require('express')
const router = express.Router()
const todoroutes = require('../controllers/todo-controller')

router.get('/todo', todoroutes.findAllTodo)
router.get('/todo/:id', todoroutes.findById)
router.post('/todo/add', todoroutes.PostTodo)
router.put('/todo/update/:id', todoroutes.updateTodo)
router.delete('/todo/del/:id', todoroutes.deleteTodo)

module.exports = router