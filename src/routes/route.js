const express = require('express')
const router = express.Router()

const menuController = require('../controllers/menuController')
const bodyController = require('../controllers/bodyController')
const emailController = require('../controllers/emailController')
const userController = require('../controllers/userController')

//*...... USER SECTION APIs
router.post('/register', menuController.registerMenu);
 router.post('/registerBody', bodyController.bodyRegister);
 router.get('/getAllMenu', menuController.getAllMenu)
 router.get('/getBodyMenu',  bodyController.getBodyItems)
 router.post('/registerEmail', emailController.emailRegister);
 router.get('/getEmail',  emailController.getEmail);
router.post('/createUser',userController.requiresAuth);

module.exports = router;