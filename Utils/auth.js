const bcrypt = require("bcrypt");
const saltRounds = 10;

function hashPassword(myPlaintextPassword) {
    return bcrypt.hashSync(myPlaintextPassword, saltRounds);
}

function comparePassword(myPlaintextPassword, hash) {
    return bcrypt.compareSync(myPlaintextPassword, hash);
}

module.exports = {
    hashPassword,
    comparePassword
};
