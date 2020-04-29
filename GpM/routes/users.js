const express = require('express');
const router = express.Router();
const usersCrtl = require('./controllers/users');

router.post('/signup',usersCtrl.signup);