const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(403).send("Access denied.");

        const decoded = jwt.verify(token, process.env.NODE_ENV === "production" ? process.env.JWT_SECRERT : "123");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};
