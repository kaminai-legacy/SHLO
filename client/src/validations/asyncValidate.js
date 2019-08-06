const yup = require('yup');
const schema = require('../models/userSchema');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let resEmail,resPassword;
const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(async() => {
    const errors = {};
    // simulate server latency
    try{resEmail= await yup.reach(schema, 'email').isValid(values.email);
      resPassword= await yup.reach(schema, 'password').isValid(values.password);
      console.log(resPassword);
    }
    catch (e) {
    }
     if(!resEmail){
       errors.email = 'Email is not valid format';
     }
     if(!resPassword){
       errors.password = 'Password is not valid. Use password with at least 8 chars,one lowercase and uppercase char and 1 number or special char ';
         }
     if (!resEmail|| !resPassword){
       throw errors
     }
       //return errors


  })
};

export default asyncValidate

