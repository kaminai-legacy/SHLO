import 'babel-polyfill';
import express from 'express';
import multer from 'multer';
const {ROLE_BUYER,ROLE_CREATIVE,CREATE, CHANGE, WATCH ,CONTESTS} = require('../utils/Consts');
const RIGHTS_OF_USERS = require('../utils/Permisions');

const router = express.Router();
const userController = require('../controlls/userController');
const mailServiceController = require('../controlls/mailServiceController');
const contestController = require('../controlls/contestController');
const verifyRefreshToken = require('../middleWare/verifyRefreshToken');
const verifyAccessToken = require('../middleWare/verifyAccessToken');
const refreshTokenFindAndCount = require('../middleWare/refreshTokenFindAndCount');
const verifyUser = require('../middleWare/verifyUser');
const checkCountRefreshToken = require('../middleWare/checkCountRefreshToken');
const checkCardExists = require('../middleWare/checkCardExistsAndBalance');
const role = require('../middleWare/checkPermissions');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer(storage);


router.post('/user', userController.createUser);
router.get('/user', verifyAccessToken.check, userController.getUser);
router.get('/getAllUsers',verifyAccessToken.check, userController.getAllUsers);
router.post('/refresh', verifyRefreshToken.check,refreshTokenFindAndCount.check, userController.refreshUser);
router.post('/login', verifyUser.verify, checkCountRefreshToken.check, userController.loginUser);
router.post('/contest/:id', upload.any(),contestController.createContest);
router.put('/contest/:id', upload.any(),contestController.updateContest);
router.delete('/contest/:id', contestController.deleteContest);
router.put('/changePassword', userController.changeUserPassword);
router.post('/contestPayment',checkCardExists.check,contestController.payment);
router.post('/banStatusUpdate/:id',verifyAccessToken.check, userController.updateUserBanStatus);
router.delete('/logout', userController.logout);
router.post('/userEmail', userController.hasEmail);
router.post('/createLinkApi', mailServiceController.createLink);
router.get('/service/:api', mailServiceController.receiveApi);
router.get('/getUserContests/:id', contestController.receiveContests);
// router.get('/test', (req, res, next) => {
//     const result = role.verifyPermissions({ownerId:4},CONTESTS,CHANGE,{role:ROLE_BUYER,id:5});
//     res.send(result);
// });
router.get('/test', (req, res, next) => {
    const result = role.verifyPermissions({ownerId:4},CONTESTS,CHANGE,{role:ROLE_BUYER,id:5});
    res.send(result);
});

module.exports = router;

//createContest