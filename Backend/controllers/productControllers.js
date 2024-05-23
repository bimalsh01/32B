const path = require('path');
const Products = require('../models/productModel');
const { error } = require('console');

const createProduct = async (req, res) => {
    // Check incoming data
    console.log(req.body);
    console.log(req.files);
}

module.exports = {
    createProduct
}
