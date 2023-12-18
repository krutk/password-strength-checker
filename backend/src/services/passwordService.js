const { validationResult } = require('express-validator');
const strongPasswordChecker = require('../utils/strongPasswordChecker');
const Password = require('../models/Password');

const checkPasswordStrength = async (password) => {
  try {
    const errors = validationResult(password);
    if (!errors.isEmpty()) {
      return { errors: errors.array() };
    }

    const result = strongPasswordChecker(password);

    if (result.isStrong) {
      const newPassword = new Password({ password, strength: result });
      await newPassword.save();
    }else {
      console.log("Password is not strong enough to be saved");
    }

    return result;
  } catch (error) {
    console.error('Error storing password:', error);
    throw new Error('Error storing password');
  }
};

module.exports = { checkPasswordStrength };
