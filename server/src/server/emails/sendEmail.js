import express from 'express';
import router from './server/router/index';
import cors from 'cors';
const bodyParser = require("body-parser");
import multer from 'multer';
const nodemailer = require('nodemailer');

//var io = require('socket.io')(http);

const funcErrorHandling = require('./server/middleWare/funcErrorHandling');
const PORT = process.env.PORT || 3000;
const app = express();
//app.use("/static", express.static(__dirname + "/server/ContestUpload/"));
app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use(funcErrorHandling);

app.listen(PORT);


