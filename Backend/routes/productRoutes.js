const router = require('express').Router()
const productControllers = require('../controllers/productControllers')
// Make a create product API
router.post('/create',productControllers.createProduct)

// fetch all
router.get('/get_all_products', productControllers.getAllProducts)

// fetch single product
// If POST, body(data)
router.get('/get_single_product/:id', productControllers.getProduct)

// exporting
module.exports = router;
