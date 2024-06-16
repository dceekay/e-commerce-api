const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

// Get all products
router.get('/', getProducts);

// Add a new product (admin only)
router.post('/', [auth, roleMiddleware(['admin'])], addProduct);

module.exports = router;
