const { check, validationResult } = require('express-validator');
const { checkPasswordStrength } = require('../services/passwordService');

exports.checkPasswordStrength = [
  check('password')
    .isLength({ min: 1 })
    .withMessage('Password cannot be empty'),

  async (req, res) => {
    const { password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const result = await checkPasswordStrength(password);
      res.json(result);
    } catch (error) {
      console.error('Error checking password strength:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];
