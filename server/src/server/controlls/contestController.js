const bcrypt = require('bcrypt');
const  _ = require('lodash');
const fs = require('fs');
const { Contest,BankAccount } = require('../models/index');
const  uniqid = require('uniqid');
const sequelize = require('sequelize');


const pathsToFiles=async(files)=>{
    try{const pathsForFiles=[];
    files.map(async(file)=>{
        const path = __dirname+'/../ContestUpload/'+uniqid()+'_'+file.originalname;
        pathsForFiles.push(path);
        await fs.writeFile(path, file.buffer,(e)=>{});
    });
    return pathsForFiles;}
    catch (e) {
    }
};

const preparingData=async(payload,pathsForFiles,id)=>{
try{
    const data ={userId:id};
    const props = await Object.keys(payload);
    for(let key in payload){
        if(props.includes(key)){
            data[key]=await JSON.parse(payload[key])
        }
    }
    data['media']=pathsForFiles;
    return data;}
    catch (e) {
    }

};

const deleteOldFiles=async(pathsForFiles)=>{
    console.log('deleteOldFiles  pathsForFiles', pathsForFiles,typeof pathsForFiles);
    const path = __dirname+'/../ContestUpload/'+'1567171192041_Screenshot_20190802_172055.png';
    try{
        pathsForFiles.forEach(function(item){
                   fs.unlink(item,(e)=>{});
        });
      }
    catch (e) {
        console.log(e,"ERROR WITH DELETE ERROR WITH DELETE ERROR WITH DELETE ERROR WITH DELETE");
    }
};

module.exports.createContest = async (req, res, next) => {
    const files=req.files;
    const payload = req.body;
    const id = req.params.id;
    const {fileNames}=_.pick(payload,'fileNames');
    try {
        const savedFiles=await pathsToFiles(files);
        const data = await preparingData(payload,savedFiles,id);
        const createdContest = await Contest.create(data);
        res.send({
            contest:createdContest.dataValues
        });
    } catch (e) {
        console.log('createContest error');
        console.log(e);
        next(e);
    }
};

module.exports.updateContest = async (req, res, next) => {
    const files=req.files;
    const payload = req.body;
    const id = req.params.id;
    try {
        const savedFiles=await pathsToFiles(files);
        const media = await JSON.parse(payload['media']);
        await deleteOldFiles(media);
        const data =await preparingData(payload,savedFiles,id);
        const [,[updatedContest]] = await Contest.update(data, {returning: true,where: {id:data.id}});
        res.send({
            contest: updatedContest.dataValues
        });
    } catch (e) {
        next(e);
    }
};
module.exports.payment = async (req, res, next) => {
    const payload = req.body;
    let result;
    console.log("SEND CREDIT CARD ******************************************",payload);
    try {
        const updatedUserBalance = await BankAccount.update(
            {balance:sequelize.literal('balance  - '+payload.amountPayable)},
            {returning: true,where: {number:payload.number}}
        );
        const updatedSiteBalance = await BankAccount.update(
            {balance:sequelize.literal('balance  + '+payload.amountPayable)},
            {returning: true,where: {number:'7777 7777 7777 7777'}}
        );
        if(updatedUserBalance && updatedSiteBalance){
            await Contest.update(
                {paid:true},
                {returning: true,where: {id:payload.ids}}
            );
        }else{
            next({ status: 400, message: 'Transaction failed'});
        }
        res.send({
            status:"Successful"
        });
    } catch (e) {
        next(e);
    }
};

module.exports.receiveContests = async (req, res, next) => {
    console.log(req.params.email,"req.params.emailreq.params.emailreq.params.emailreq.params.email")
    const id = req.params.id;
    try {
       const result = await Contest.findAll({ where: {userId: id}});
        console.log(result,"result result result result result result result result result result")
       res.send(result)
    } catch (e) {
        console.log(e)
        next(e);
    }
};


//9494 9494 9494 9494

//sequelize.literal('balance + '+payload.amountPayable)