const {createUser } = require('../controllers/userController')

const express = require('express');
const router = express.Router();
router.post('/register', createUser)

module.exports = router

