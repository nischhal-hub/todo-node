const express = require('express')
const router = express.Router()

const {
    createTodo,
    getTodobyId,
    getTodo,
    deleteTodo,
    getAllTodo,
    updateTodo,
} = require('../controllers/todo')

router.param('todoId', getTodobyId)

router.get('/todos/', getAllTodo)

router.get('/todos/:todoId/', getTodo)

router.post('/todos/create/', createTodo)

router.put('/todos/update/', updateTodo)

router.delete('/todos/:todoId/delete/', deleteTodo)

module.exports = router;