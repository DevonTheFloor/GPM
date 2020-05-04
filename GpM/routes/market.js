const express = require('express');
const router = express.Router();
const multer = require('multer');
const marketCtrl = require('../controllers/market');

router.post('/post', marketCtrl.postOne);
router.get('/all', marketCtrl.getAll);

module.exports = router;