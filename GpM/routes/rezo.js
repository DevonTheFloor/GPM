const express = require('express');
const router = express.Router();
const rezoCtrl = require('../controllers/rezo');

router.post('/post',rezoCtrl.postOne);
router.get('/posts',rezoCtrl.getAll);

module.exports = router;