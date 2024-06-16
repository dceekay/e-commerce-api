const express = require('express');
const { placeOrder } = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Place an order
router.post('/', auth, placeOrder);

module.exports = router;
