const express = require('express');
const { getCart, addToCart } = require('../controllers/cartController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Get user's cart
router.get('/', auth, getCart);

// Add to cart
router.post('/', auth, addToCart);

module.exports = router;
