const jwt = require("jsonwebtoken");

const libraryMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure JWT_SECRET is in your .env
    req.user = decoded; // Attach decoded user data to request

    if (req.user.role === 103) {
      // Only allow admin users
      return res.status(403).json({
        success: false,
        message: "Forbidden: Only Library Admin And Admin can create a library",
      });
    }

    next(); // User is admin, proceed to controller
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
      error: err.message,
    });
  }
};

module.exports = libraryMiddleware;
