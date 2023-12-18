const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

router.post('/checkPassword', passwordController.checkPasswordStrength);

module.exports = router;