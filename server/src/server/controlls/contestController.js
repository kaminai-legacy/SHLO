const bcrypt = require('bcrypt');
const _ = require('lodash');
const fs = require('fs');
const {Contest, BankAccount, Entry} = require('../models/index');
const uniqid = require('uniqid');
const sequelize = require('sequelize');


const pathsToFiles = async (files) => {
    try {
        const pathsForFiles = [];
        files.map(async (file) => {
            const path = __dirname + '/../ContestUpload/' + uniqid() + '_' + file.originalname;
            pathsForFiles.push(path);
            await fs.writeFile(path, file.buffer, (e) => {
            });
        });
        return pathsForFiles;
    } catch (e) {
    }
};

const preparingData = async (payload, pathsForFiles, id) => {
    try {
        const data = {userId: id};
        const props = await Object.keys(payload);
        for (let key in payload) {
            if (props.includes(key)) {
                data[key] = await JSON.parse(payload[key])
            }
        }
        data['media'] = pathsForFiles;
        return data;
    } catch (e) {
    }

};

const deleteOldFiles = async (pathsForFiles) => {
    //  console.log('deleteOldFiles  pathsForFiles', pathsForFiles,typeof pathsForFiles);
    const path = __dirname + '/../ContestUpload/' + '1567171192041_Screenshot_20190802_172055.png';
    try {
        pathsForFiles.forEach(function (item) {
            fs.unlink(item, (e) => {
            });
        });
    } catch (e) {
        console.log(e, "ERROR WITH DELETE ERROR WITH DELETE ERROR WITH DELETE ERROR WITH DELETE");
    }
};

module.exports.createContest = async (req, res, next) => {
    const files = req.files;
    const payload = req.body;
    const id = req.params.id;
    const {fileNames} = _.pick(payload, 'fileNames');
    try {
        const savedFiles = await pathsToFiles(files);
        const data = await preparingData(payload, savedFiles, id);
        const createdContest = await Contest.create(data);
        res.send({
            contest: createdContest.dataValues
        });
    } catch (e) {
        console.log('createContest error');
        console.log(e);
        next(e);
    }
};

module.exports.updateContest = async (req, res, next) => {
    const files = req.files;
    const payload = req.body;
    const id = req.params.id;


    try {
        const savedFiles = await pathsToFiles(files);
        const media = await JSON.parse(payload['media']);
        await deleteOldFiles(media);
        const data = await preparingData(payload, savedFiles, id);
        const [, [updatedContest]] = await Contest.update(data, {returning: true, where: {id: data.id}});
        res.send({
            contest: updatedContest.dataValues
        });
    } catch (e) {
        console.log(e);
        next(e);
    }
};
module.exports.payment = async (req, res, next) => {
    const payload = req.body;
    let result;
    // console.log("SEND CREDIT CARD ******************************************",payload);
    try {
        const updatedUserBalance = await BankAccount.update(
            {balance: sequelize.literal('balance  - ' + payload.amountPayable)},
            {returning: true, where: {number: payload.number}}
        );
        const updatedSiteBalance = await BankAccount.update(
            {balance: sequelize.literal('balance  + ' + payload.amountPayable)},
            {returning: true, where: {number: '7777 7777 7777 7777'}}
        );
        if (updatedUserBalance && updatedSiteBalance) {
            await Contest.update(
                {paid: true},
                {returning: true, where: {id: payload.ids}}
            );
        } else {
            next({status: 400, message: 'Transaction failed'});
        }
        res.send({
            status: "Successful"
        });
    } catch (e) {
        next(e);
    }
};

module.exports.receiveContests = async (req, res, next) => {
    //  console.log(req.params.email,"req.params.emailreq.params.emailreq.params.emailreq.params.email")
    const id = req.params.id;
    try {
        const result = await Contest.findAll({where: {userId: id}});
        //console.log(result,"result result result result result result result result result result")
        res.send(result)
    } catch (e) {
        console.log(e);
        next(e);
    }
};

module.exports.receiveFilterContests = async (req, res, next) => {
    try {
        const {contestFilter} = req;
        const contests = await Contest.findAll({
            attributes: {include: ['"Contest".*', [sequelize.fn('count', sequelize.col('Entries.contestId')), 'numberOfEntries']]},
            include: [
                {
                    model: Entry,
                    attributes: [],
                }
            ],
            where: contestFilter,
            group: ['Contest.id']
        });
        if(contests){
            res.send(contests)
        }
        return next({status: 404, message: "not found"})
    } catch (e) {
        console.log(e);
        next(e);
    }
};


module.exports.deleteContest = async (req, res, next) => {
    //  console.log(req.params.email,"req.params.emailreq.params.emailreq.params.emailreq.params.email")
    const id = req.params.id;
    const userId = req.body.userId;
    try {
        const result = await Contest.find({where: {id: id}});
        if (result) {
            const smt = await Contest.destroy({
                returning: true,
                where: {id: id}
            });
            //console.log(smt);
            if (smt === 1) {
                res.send(result)
            }
        }
        //console.log(result,"result result result result result result result result result result")
        //res.send(result)
    } catch (e) {
        console.log(e);
        next(e);
    }
};


//9494 9494 9494 9494

// include: [{model: models.Vendor, as: 'vendor'}],

//sequelize.literal('balance + '+payload.amountPayable)


/*
        if(_.isEmpty(findParams)){
        const result = await Contest.findAll()}
else{
                const result = await Contest.findAll({ where: findParams});
            }
        res.send({contests:result})

            const cloneResult=_.cloneDeep(result);
            const dataToReceive = cloneResult.map((item)=>{
                return item['dataValues'];
            });
            console.log("result1",dataToReceive);
            res.send({contests:dataToReceive})
        }else{

            const cloneResult=_.cloneDeep(result);
            const dataToReceive = await cloneResult.map(async(item)=>{
                try{ const contest=item['dataValues'];
                    contest['entries']=await Entry.count({
                        where: {contestId: contest['id']}
                    });
                    console.log("contestcontestcontestcontestcontestcontestcontestcontest",contest);
                    return contest;
                }
                catch (e) {
                    console.log(e)
                }

            });
            console.log("result2",dataToReceive);
            res.send({contests:dataToReceive})
        }
*/


////    work


// const result = await Contest.findAll({
//     //ttributes:[Entry.sequelize.fn('COUNT', Entry.sequelize.col('Entry.contestId'))],
//
//     attributes: [,[sequelize.fn('count', sequelize.col('Entries.contestId')), 'Counter']],
//     include: [{ attributes: [], model: Entry }],
//
//     //attributes: ["Challenge.*", [models.sequelize.fn('COUNT', models.sequelize.col('Ideas.idea_id')), 'IdeaCount']],
//     // include: [{
//     //     model: Entry,
//     //     as: 'Entries',
//     // }],
//     // include: [{model: Entry}],
//     where: findParams,
//     group: ['Contest.id']
// });


/*

    try {
        console.log("findParams",findParams);
        if(_.isEmpty(findParams)){
            const result = await Contest.findAll();
            const cloneResult=_.cloneDeep(result);
            const dataToReceive = cloneResult.map((item)=>{
                return item['dataValues'];
            });
            console.log("result1",dataToReceive);
            res.send({contests:dataToReceive})
        }else{
            const result = await Contest.findAll({
                where: findParams,
                include: {
                    model: Entry
                    sequelize.fn('COUNT'){}
                }
            });
            const cloneResult=_.cloneDeep(result);
            const dataToReceive = await cloneResult.map(async(item)=>{
                try{ const contest=item['dataValues'];
                const entry = await Entry.count({
                    where: {contestId: contest['id']}
                });
                console.log("entryentryentryentryentryentryentryentryentryentry",entry)
                    contest['entries']= entry;
                    console.log("contestcontestcontestcontestcontestcontestcontestcontest",contest);
                    return contest;
                }
                   catch (e) {
                    console.log(e)
                }

            });
            console.log("result2",dataToReceive);
            res.send({contests:dataToReceive})
        }






 */