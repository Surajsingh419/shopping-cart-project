const express = require('express')
const router = express.Router()

const menuController = require('../controllers/menuController')




//*...... USER SECTION APIs
router.post('/register', menuController.registerMenu)
// router.post('/login', userController.login)
 router.get('/getAllMenu', menuController.getAllMenu)
// router.put('/user/:userId/profile', MW.userAuth, userController.updateUserProfile)


// //*...... PRODUCT SECTION APIs
// router.post('/products', productController.createProduct)
// router.get('/products', productController.getAllProducts)
// router.get('/products/:productId', productController.getProductsById)
// router.put('/products/:productId', productController.updateProduct)
// router.delete('/products/:productId', productController.deleteProduct)


// //*...... CART SECTION APIs
// router.post('/users/:userId/cart', cartController.cartCreation)
// router.put('/users/:userId/cart', cartController.updateCart)
// router.get('/users/:userId/cart', cartController.getCart)
// router.delete('/users/:userId/cart', cartController.deleteCart)


// //*...... ORDER SECTION APIs
// router.post('/users/:userId/orders', orderController.orderCreation)
// router.put('/users/:userId/orders', orderController.updateOrder)


module.exports = router;