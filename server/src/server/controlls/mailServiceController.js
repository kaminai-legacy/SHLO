const bcrypt = require('bcrypt');
const  _ = require('lodash');
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

const createTokenPair=async (id)=>{
  try{
  const refreshTokenString = await tokenController.createToken(id, SECRETS_REFRESH, LIVE_TIME_REFRESH, ALGORITHM);
  const accessToken = await tokenController.createToken(id, SECRETS_ACCESS, LIVE_TIME_ACCESS, ALGORITHM);
  const refreshToken = await RefreshToken
      .create({
        userId: id,
        tokenString: refreshTokenString,
      });
    return { access: accessToken, refresh: refreshToken.dataValues.tokenString };
  }
  catch (e) {
    return e
  }
};

module.exports.createUser = async (req, res, next) => {
  const user = req.body;
  try {
    const password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
    const DataToCreate = await Object.assign({},user,{password:password});
    const createdUser = await User.create(DataToCreate);
    const id = createdUser.dataValues.id;
    const tokenPair= await createTokenPair(id);
    const  userForSend = await  _.omit(createdUser.dataValues,OTHER_FIELDS);
    res.send({
      user: userForSend,
      tokenPair,
    });
  } catch (e) {
    next({ status: 400, message: 'Entered relevant data' });
  }
};

module.exports.refreshUser = async (req, res, next) => {
  const id = req.id;
  try {
    const tokenPair= await createTokenPair(id);
    res.send({ tokenPair });
  } catch (e) {
    next({ status: 401, message: 'Your session ended. Please re login.' });
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const id = req.user.id;
    const user = req.user;
    const tokenPair= await createTokenPair(id);
    const  userForSend = _.omit(user,OTHER_FIELDS);
    res.send({ user: userForSend, tokenPair: tokenPair });
  } catch (e) {
    next({ status: 404, message: 'User not found' });
  }
};

module.exports.getUser = async (req, res, next) => {
  const id = req.id;
  try {
    const result = await User.findOne({ where: { id } });
    const user = result.dataValues;
    const  userForSend = _.omit(user,OTHER_FIELDS);
    res.send(userForSend);
  } catch (e) {
    next({ status: 404, message: 'User not found' });
  }
};

module.exports.hasEmail = async (req, res, next) => {
  const payload = req.body;
  //console.log(req.body,"req.body req.body req.bodyreq.bodyreq.bodyreq.bodyreq.body");
  try {
    const result = await User.findOne({ where: payload });
    //console.log(result);
    if(result) {
      res.send({result:'has Email'});
    }else{
      res.send({result:'hasn\'t Email'});
    }

  } catch (e) {

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

module.exports.updateUserBanStatus = async (req, res, next) => {
    const result = await User.update(
    {isBaned: req.body.banStatus},
    {returning: true,where: {id:req.params.id}}
  );
    const [,[newResult]] = result;
    res.send(newResult.dataValues);
  };

module.exports.logout = async (req, res, next) => {
  console.log("logout                                   ",req.body);
    await RefreshToken.destroy({
      where: {
       tokenString:req.body.data.token
      }
    });
    res.send("OK");
};
//justin333@gmail.com
