const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

const createAdminUser = async () => {
    await connectDB();

    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    // Check if the admin user already exists
    let user = await User.findOne({ email: adminEmail });
    if (user) {
        console.log("Admin user already exists");
        return;
    }

    // Create a new admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);

    user = new User({
        name: "Admin User",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
        date: new Date()
    });

    await user.save();
    console.log("Admin user created successfully");
    process.exit();
};

createAdminUser();
