const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/auth'); // For protected routes

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get('/', productController.getProducts);

// @route   GET /api/products/:id
// @desc    Get single product by ID
// @access  Public
router.get('/:id', productController.getProductById);

// @route   POST /api/products
// @desc    Create a product (Requires admin)
// @access  Private (Admin)
router.post('/', authMiddleware, productController.createProduct); // You'd add role check in controller

// @route   PUT /api/products/:id
// @desc    Update a product (Requires admin)
// @access  Private (Admin)
router.put('/:id', authMiddleware, productController.updateProduct);

// @route   DELETE /api/products/:id
// @desc    Delete a product (Requires admin)
// @access  Private (Admin)
router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;