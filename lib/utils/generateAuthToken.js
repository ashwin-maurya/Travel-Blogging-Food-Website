const jwt = require("jsonwebtoken");
const JWT_SECRET = "YouwillDieforThat"; // Replace with your actual secret

const generateAuthToken = (adminId, isAdmin) => {
  const payload = {
    Admin: {
      id: adminId,
      isAdmin,
    },
  };

  // Set expiration time to 1 hour (60 minutes)
  const expiresIn = 60 * 60;

  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

module.exports = generateAuthToken;
