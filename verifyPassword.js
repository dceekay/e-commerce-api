const bcrypt = require('bcryptjs');

const hashedPassword = "$2a$10$zf2mofkanGOCLQR0cmTIJezFGAE/QEAQdaBwbZvT3Fa08/8SUzHCa"; // Your hash
const plainPassword = "admin123";

bcrypt.compare(plainPassword, hashedPassword, (err, isMatch) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Password match:', isMatch);
    }
});
