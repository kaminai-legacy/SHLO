import 'babel-polyfill';
import express from 'express';

const router = express.Router();
const userController = require('../controlls/userController');
const verifyRefreshToken = require('../middleWare/verifyRefreshToken');
const verifyAccessToken = require('../middleWare/verifyAccessToken');
const refreshTokenFindAndCount = require('../middleWare/refreshTokenFindAndCount');
const verifyUser = require('../middleWare/verifyUser');
const checkCountRefreshToken = require('../middleWare/checkCountRefreshToken');

router.post('/user', userController.createUser);
router.get('/user', verifyAccessToken.check, userController.getUser);
router.get('/getAllUsers',verifyAccessToken.check, userController.getAllUsers);
router.post('/refresh', verifyRefreshToken.check,refreshTokenFindAndCount.check, userController.refreshUser);
router.post('/login', verifyUser.verify, checkCountRefreshToken.check, userController.loginUser);
router.post('/banStatusUpdate/:id',verifyAccessToken.check, userController.userBanStatusUpdate);
router.delete('/logout', userController.logout);
/*router.post('/ban/:id', (req, res, next) => {
  res.send('Hello world');
});*/

router.get('/test', (req, res, next) => {
  res.send('Hello world');
});

module.exports = router;

