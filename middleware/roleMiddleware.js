const roleMiddleware = (roles) => (req, res, next) => {
    console.log('User role:', req.user.role);
    if (!roles.includes(req.user.role)) {
        console.log('Access denied: User role is not authorized');
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

module.exports = roleMiddleware;
