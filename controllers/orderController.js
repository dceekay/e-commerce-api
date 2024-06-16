const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.placeOrder = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user.id }).populate('products.product');

        if (!cart) {
            return res.status(400).json({ msg: 'Cart is empty' });
        }

        const orderProducts = cart.products.map(p => ({
            product: p.product._id,
            quantity: p.quantity,
        }));

        const total = cart.products.reduce((sum, p) => sum + p.product.price * p.quantity, 0);

        const newOrder = new Order({
            user: req.user.id,
            products: orderProducts,
            total,
        });

        await newOrder.save();
        await Cart.findOneAndRemove({ user: req.user.id });

        res.json(newOrder);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
