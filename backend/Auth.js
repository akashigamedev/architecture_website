const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({message: "Access token required"});
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch(e) {
        res.status(403).json({message: "Token expired or invalid"});
    }
};

module.exports = Auth;