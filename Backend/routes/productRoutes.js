const router = require('express').Router()
const productControllers = require('../controllers/productControllers')
// Make a create product API
router.post('/create',productControllers.createProduct)

// exporting
module.exports = router;
