const express = require('express')
const userController = require('../controller/userController')
const router = express.Router()

router.post('/signup',userController.signup)
router.post('/login',userController.login)
router.post('/add-todo',userController.addtodo)
router.get('/get-todos',userController.getTodos)
router.put('/update/:id',userController.updateTodo)
router.delete('/delete/:id',userController.deleteTodo)
module.exports = router