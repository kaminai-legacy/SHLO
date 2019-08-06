const bcrypt = require('bcrypt');
const { User, RefreshToken } = require('../models/index');
const  {
  SECRETS_ACCESS,
  SECRETS_REFRESH,
  LIVE_TIME_ACCESS,
  LIVE_TIME_REFRESH,
  ALGORITHM,
  OTHER_FIELDS
} = require('../utils/Consts');
const tokenController = require('./tokenController');

module.exports.createUser = async (req, res, next) => {
  const user = req.body;
  const password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
  const DataToCreate = Object.assign({},user,{password:password});
  try {

    const currentUser = await User.create(
      DataToCreate
    );
    const id = currentUser.dataValues.id;
    const refreshTokenString = await tokenController.createToken(id, SECRETS_REFRESH, LIVE_TIME_REFRESH, ALGORITHM);
    const accessToken = await tokenController.createToken(id, SECRETS_ACCESS, LIVE_TIME_ACCESS, ALGORITHM);
    const refreshToken = await RefreshToken
      .create({
        userId: id,
        tokenString: refreshTokenString,
      });
    const tokenPair = { access: accessToken, refresh: refreshToken.dataValues.tokenString };
    const userToSend=currentUser.dataValues;
    for (let key in userToSend) {
      if (userToSend.hasOwnProperty(key)) {
        if(OTHER_FIELDS.includes(key)){
          delete userToSend[key];
        }
      }
    }

    res.send({
      user: userToSend,
      tokenPair,
    });
  } catch (e) {
    next({ status: 400, message: 'Entered relevant data' });
  }
};

module.exports.refreshUser = async (req, res, next) => {
  const id = req.id;
  try {
    const refreshTokenString = await tokenController.createToken(id, SECRETS_REFRESH, LIVE_TIME_REFRESH, ALGORITHM);
    const accessToken = await tokenController.createToken(id, SECRETS_ACCESS, LIVE_TIME_ACCESS, ALGORITHM);
    const createdRefreshToken = await RefreshToken
      .create({
        userId: id,
        tokenString: refreshTokenString,
      });
    const tokenPair = { access: accessToken, refresh: createdRefreshToken.dataValues.tokenString };
    res.send({ tokenPair });
  } catch (e) {
    next({ status: 401, message: 'Your session ended. Please re login.' });
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const id = req.user.id;
    const refreshTokenString = await tokenController.createToken(id, SECRETS_REFRESH, LIVE_TIME_REFRESH, ALGORITHM);
    const accessToken = await tokenController.createToken(id, SECRETS_ACCESS, LIVE_TIME_ACCESS, ALGORITHM);
    const createdRefreshToken = await RefreshToken
      .create({
        userId: id,
        tokenString: refreshTokenString,
      });

    const user = req.user;
    for (let key in user) {
      if (user.hasOwnProperty(key)) {

        if(OTHER_FIELDS.includes(key)){

          delete user[key];

        }
      }
    }


    const tokenPair = { access: accessToken, refresh: createdRefreshToken.dataValues.tokenString };
    res.send({ user: req.user, tokenPair: tokenPair });
  } catch (e) {
    next({ status: 404, message: 'User not found' });
  }
};

module.exports.getUser = async (req, res, next) => {
  const id = req.id;


  try {
    const result = await User.findOne({ where: { id } });
    const user = result.dataValues;
    for (let key in user) {
      if (user.hasOwnProperty(key)) {
        if(OTHER_FIELDS.includes(key)){
          delete user[key];
        }
      }
    }
    res.send(user);
  } catch (e) {
    next({ status: 404, message: 'User not found' });
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await User.findAll({order: [
        ['id', 'ASC'],
      ]});

    res.send(result);
  } catch (e) {
    next({ status: 404, message: 'Users not found' });
  }
};

module.exports.userBanStatusUpdate = async (req, res, next) => {
  try {

    const result = await User.update(
    {isBaned: !req.body.banStatus},
    {returning: true,where: {id:req.params.id}}
  );
    const newResult = result[1][0].dataValues;
    res.send(newResult);
  }
  catch (e){
      next({ status: 404, message: 'Users not found' });
    }
};

module.exports.logout = async (req, res, next) => {
  try {
    const numberOfField = await RefreshToken.destroy({
      where: {
       tokenString:req.body.data.token
      }
    });
    res.send("OK");
  }
  catch (e){
    next(/*{ status: 404, message: 'Error' }*/e);
  }
};


