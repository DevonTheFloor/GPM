const express = require('express');
const router = express.Router();
const forumCtrl = require('../controllers/forum');

router.post('/post',forumCtrl.postOne);
router.get('/posts',forumCtrl.getAll);

module.exports = router;
