const bcrypt = require('bcryptjs');

const plainPassword = "admin123";

bcrypt.genSalt(10, (err, salt) => {
    if (err) {
        console.error(err);
    } else {
        bcrypt.hash(plainPassword, salt, (err, hash) => {
            if (err) {
                console.error(err);
            } else {
                console.log('New hashed password:', hash);
            }
        });
    }
});
