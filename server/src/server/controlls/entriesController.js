const bcrypt = require('bcrypt');
const _ = require('lodash');
const fs = require('fs');
const {Contest, BankAccount, Entry} = require('../models/index');
const uniqid = require('uniqid');
const {sequelize} = require('../models');
const Op = sequelize.Op;

const pathToFile = async (files) => {
    try {
        let path=null;
        files.map(async (file) => {
            //console.log("\n",file,"\n");
            path = __dirname + '/../tmp/EntriesUpload/' + uniqid() + '_' + file.originalname;

            await fs.writeFile(path, file.buffer, (e) => {
            });
        });
        return path;
    } catch (e) {
    }
};

module.exports.createEntry = async (req, res, next) => {
    //  console.log(req.params.email,"req.params.emailreq.params.emailreq.params.emailreq.params.email")
const {body,files,idUser}= req;
console.log(body,files);
const dataToCreate={
    contestId:JSON.parse(body.id),
    userId:idUser,
    nickName:JSON.parse(body.nickName),
};
    try {
        const savedFiles = await pathToFile(files);
        if (savedFiles){
            dataToCreate['media']=savedFiles;
        }else{
            dataToCreate['prospectiveText']=JSON.parse(body.values)[0];
        }
        const createdEntry = await Entry.create(
            dataToCreate
        );
        if(createdEntry){
            res.send("OK");
        }
//console.log(result,"result result result result result result result result result result")
        //res.send(result)
    } catch (e) {
        res.send("FAILED");
    }
};

module.exports.changeStatus = async (req, res, next) => {
    //  console.log(req.params.email,"req.params.emailreq.params.emailreq.params.emailreq.params.email")
    const {body,params}= req;
    console.log(body,params);
    let transaction;
    try {
        transaction=await sequelize.transaction();
        if(body.action==="ACCEPT"){
            const result = await Entry.update(
                {status: body.action},
                {returning: true,where: {id:params.id},transaction}
            );
            if(result){
                const [,[newResult]] = result;
                const dataOnUpdate=newResult.dataValues;
                const [,[updatedContest]] =await Contest.update({winner:dataOnUpdate.userId,
                    status:"Closed"},
                    {returning: true,where: {id:dataOnUpdate.contestId},transaction});

                const [,updatedEntries] = await Entry.update(
                    {status: "REJECT"},
                    {returning: true,
                        where: {
                        contestId: dataOnUpdate.contestId,
                        id : {[Op.ne]:params.id}
                    },transaction}
                );
                // console.log("\n\nupdatedEntries",updatedEntries,"\n\n");
                // console.log("\n\nnewResult",newResult,"\n\n");
                // console.log("\n\nupdatedContest",updatedContest,"\n\n");
                updatedEntries.unshift(newResult);
const entriesToSend=updatedEntries.map((item)=>{
    return  item.dataValues;
});
if(updatedEntries){
    transaction.commit();
}else{
    transaction.rollback();
}
                const objectToSend={entry:entriesToSend,contest:updatedContest.dataValues};
                // console.log("\n\nobjectToSend",objectToSend,"\n\n");
                res.send(objectToSend)
            }
        }else{
            const result = await Entry.update(
                {status: body.action},
                {returning: true,where: {id:params.id},transaction}
            );
            if(result){
                console.log("resultresultre/*/*/*/*//*sultresultresultresult",result)
                transaction.commit();
                const [,[newResult]] = result;
                console.log("rewarfwehgerhjdrjdrtjresult",newResult)
                const dataOnUpdate=newResult.dataValues;
                //console.log("rewarfwehgerhjdrjdrtjresult",newResult)
                res.send({entry:dataOnUpdate})
            }else{
                transaction.rollback();
            }
        }
        // const result = await Entry.update(
        //     {status: body.action},
        //     {returning: true,where: {id:params.id}}
        // );
        // //console.log(result);
        // if(result){
        //     const [,[newResult]] = result;
        //     const dataOnUpdate=newResult.dataValues;
        //     if(body.action==="ACCEPT"){
        //         const [,[updatedContest]] =await Contest.update({winner:dataOnUpdate.userId},
        //             {returning: true,where: {id:dataOnUpdate.contestId}});
        //
        //     }else{
        //         res.send(newResult.dataValues)
        //     }
        // }
    } catch (e) {
        transaction.rollback();
        console.log(e);
        next(e);
    }
};

