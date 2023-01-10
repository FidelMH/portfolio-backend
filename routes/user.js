// require('dotenv').config();
const express =  require('express')

const UserController = require('../controllers/user')
const router = express.Router()

// console.log(process.env.TOKEN_SECRET)
router.post('/signup',UserController.signup)

router.post('/login',UserController.login)

module.exports = router