const jwt = require("jsonwebtoken");
const JWT_SECRET = "YouwillDieforThat"; // Replace with your actual secret

const authMiddleware = (authtoken) => {
  // Check if authtoken is provided
  if (!authtoken) {
    return {
      success: false,
      error: "No authtoken found, authorization denied",
    };
  }

  try {
    const decoded = jwt.verify(authtoken, JWT_SECRET);
    return decoded.Admin; // Return the decoded admin information
  } catch (err) {
    console.log("Invalid authtoken, authorization denied");
    return {
      success: false,
      error: "Internal Server Error",
    };
  }
};

module.exports = authMiddleware;
