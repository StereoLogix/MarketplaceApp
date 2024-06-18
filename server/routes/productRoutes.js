const express = require('express');
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteAllProducts,
    findProductsByName
} = require('../controllers/productController');

const router = express.Router();

// Find products by name
router.get('/products/search', findProductsByName);

// Get all products
router.get('/products', getProducts);

// Get a product by ID
router.get('/products/:id', getProductById);

// Create a new product
router.post('/products', createProduct);

// Update a product by ID
router.put('/products/:id', updateProduct);

// Delete a product by ID
router.delete('/products/:id', deleteProduct);

// Delete all products
router.delete('/products', deleteAllProducts);

module.exports = router;
