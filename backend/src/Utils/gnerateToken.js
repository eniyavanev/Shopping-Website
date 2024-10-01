const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


const generateToken = (id,res) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
    });
};

module.exports = generateToken