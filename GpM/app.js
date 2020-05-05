const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRouter = require('./routes/users');
const forumRouter = require('./routes/forum');
const marketRouter = require('./routes/market');
const rezoRouter = require('./routes/rezo');
const mysql = require('mysql');
const connectdb = require('./queries/connectdb');

const multer = require('./middleware/multer-config');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'localhost');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",express.static(path.join(__dirname, 'public')));
app.use("/api/",express.static(path.join(__dirname, 'front')));
app.use('/api/auth',usersRouter);
app.use("/api/forum",forumRouter);
app.use('/api/market', marketRouter);
app.use('/api/rezo',rezoRouter);


module.exports = app;