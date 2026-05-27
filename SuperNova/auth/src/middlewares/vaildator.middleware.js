// Middleware to validate register user input⬇️
const registerUserValidations = (req, res, next) => {
  next();
};

// Middleware to validate login user input⬇️
const loginUserValidations = (req, res, next) => {
  next();
};

// Export validators⬇️
module.exports = {
  registerUserValidations,
  loginUserValidations,
};
