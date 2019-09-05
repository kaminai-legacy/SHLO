import jwt from 'jsonwebtoken';
const bcrypt = require('bcrypt');
const { User } = require('../models/index');
const tokenController = require('./tokenController');
import send from '../../server/emails/sendEmail';
const  {
  SECRETS_MAIL,
  LIVE_TIME_MAIL,
  ALGORITHM,
} = require('../utils/Consts');

module.exports.createLink = async (req, res, next) => {
  const payload = req.body;
  console.log(payload,"payloadpayloadpayloadpayload");
  const dataToHash={
    title:payload['title'],
    email:payload['email']
  };
  console.log(dataToHash,"dataToHash");
  try {
//console.log(SECRETS_MAIL,LIVE_TIME_MAIL,ALGORITHM);
    const linkApi = jwt.sign(
      dataToHash
    , SECRETS_MAIL, {
      expiresIn: LIVE_TIME_MAIL,
      algorithm: ALGORITHM,
    });
    console.log(linkApi,"linkApi");
    send.sendEmail(payload['longTitle'],`http://192.168.0.111:5000/service/${linkApi}`,payload['title'],
        payload['email']);//aleksosnova_3@mail.ru'//payload['email']//'squadhelpservice@gmail.com'
    res.send(
      'The letter was sent to the mail '+payload['email']
    );
  } catch (e) {
    console.log(e);
    next({ status: 400, message: 'Entered relevant data' });
  }
};

module.exports.receiveApi = async (req, res, next) => {
  const token = req.params.api;
  //console.log("api",req.params.api);
  const decoded = jwt.verify(token, SECRETS_MAIL);
  console.log("api",decoded);

  const confirmEmail= async ()=> {
  } ;

  switch (decoded.title) {
    case "Reset the password":{
      res.send({linkToRedirect:"/",title:decoded.title,msg:null,otherData:{resetPassword:true},err:false,email:decoded.email});break; }
    case "Confirm email":{
      const result = await User.update(
        {emailConfirmed: true},
        {returning: true, where: {email: decoded.email}}
    );
      const [,[newResult]] = result;
      console.log(newResult.dataValues['id'],"newResult.dataValues['id']     newResult.dataValues['id']");
      const tokenPair= await tokenController.createTokenPair(newResult.dataValues['id']);
      if(result){
        res.send({linkToRedirect:"/",msg:"Email confirmed",otherData:{tokenPair:tokenPair},err:false})
      }else{
        res.send({linkToRedirect:"/",msg:"Email not confirmed",err:true})
      }
      break;
      }
  }

 // res.send({linkToRedirect:"/"});
  //res.redirect('/');
  console.log("redirect");
};
//payload['email']