const bcrypt = require('bcrypt');
const  _ = require('lodash');
const fs = require('fs');
const { Contest } = require('../models/index');
const MODELS_INDEX = require('../models/index');

module.exports.createContest = async (req, res, next) => {
    const pathsForFiles=[];
    const files=req.files;
    const payload = req.body;
   console.log(!!MODELS_INDEX['Contest'],!!MODELS_INDEX['Contests'],"new value");

    try {

        files.map(async(file)=>{
            const path = __dirname+'/../ContestUpload/'+Date.now()+'_'+file.originalname;
            pathsForFiles.push(path);
            await fs.writeFile(path, file.buffer,(e)=>{console.log("success",e)});
        });
        const data ={
            userId:1,
            media:pathsForFiles
        };
        const props = await Object.keys(payload);
        for(let key in payload){
            if(props.includes(key)){
                 data[key]=await JSON.parse(payload[key])
            }
        }
        const createdContest = await Contest.create(data);
        res.send({
            contest: createdContest,
        });

    } catch (e) {
        console.log(e);
        next(e);
    }
};


