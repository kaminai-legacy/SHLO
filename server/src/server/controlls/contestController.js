const bcrypt = require('bcrypt');
const  _ = require('lodash');


module.exports.createContest = async (req, res, next) => {
    console.log("createContest-----------------------------------------------------");
    console.log("req = ", req.files);
    const user = req.body;
    const file = req.files;
    const otherField = req.otherField;

    try {/*
        const password = await bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
        const DataToCreate = await Object.assign({},user,{password:password});
        const createdUser = await User.create(DataToCreate);
        const id = createdUser.dataValues.id;
        const tokenPair= await createTokenPair(id);
        const  userForSend = await  _.omit(createdUser.dataValues,OTHER_FIELDS);
        res.send({
            user: userForSend,
            tokenPair,
        });*/
        console.log(user,"sended contest-----------------------------------------------------",user.file);
    } catch (e) {
        next({ status: 400, message: 'Entered relevant data' });
    }
};


