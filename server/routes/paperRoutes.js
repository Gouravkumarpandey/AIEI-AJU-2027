const express = require('express');
const router = express.Router();
const { submitPaper } = require('../controllers/paperController');

router.post('/submit', submitPaper);

module.exports = router;
