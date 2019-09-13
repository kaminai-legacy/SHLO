const {FILTER_TAGS,
  FILTER_TAGS_IN_NEED_CHANGED}=require('../utils/Consts');
const _ = require('lodash');
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports.prepare = async (req, res, next) => {
  try {
    const getPriceFilter = (filterItem) =>{
      if(filterItem.indexOf('>')!==-1){
        const filterValue= filterItem.replace(/>/g,'');
      ///  console.log(">",filterValue);
        return {[Op.gt]:filterValue};
      }else{
        const filterValue= filterItem.split('-');
        //console.log("-",filterValue);
        return {[Op.between]:filterValue};
      }
    };
    const reducer = (accumulator, currentValue, index, array) =>{
      console.log("tik",accumulator, currentValue, index,array.length, array,accumulator[Op.or]);
      if(index===array.length-1){
        if(!accumulator[Op.or]){
          accumulator=getPriceFilter(currentValue);
          //const result= getPriceFilter(currentValue);
          console.log("\ndata On return end without OR",accumulator,"\n")
          return accumulator
        }else{
          const value=getPriceFilter(currentValue);
          console.log("accumulator[Op.or]",accumulator[Op.or],value);
          const result= accumulator[Op.or].push(value);
          console.log("\ndata On return  end with OR",accumulator,accumulator[Op.or],result,"\n")
          return accumulator;
        }
      }else{
        if(!accumulator[Op.or]){accumulator[Op.or]=[];console.log("\ncreate acccum OR\n")}
        const value=getPriceFilter(currentValue);
        console.log("accumulator[Op.or]",accumulator[Op.or],value);
        const result= accumulator[Op.or].push(value);
        console.log("\ndata On return",accumulator,accumulator[Op.or],result,"\n")
        return accumulator;
      }
    };

    console.log(req.query,"req.queryreq.queryreq.queryreq.query")
    const {query} = req;
    const contestFilter = _.pick(query, FILTER_TAGS);
    if(contestFilter['status']){
      if(contestFilter['status'].indexOf(',')!==-1){
        contestFilter['status']=contestFilter['status'].split(',');
      }else{
        contestFilter['status']=[contestFilter['status']];
      }
    }
    if(contestFilter['price']){
      contestFilter['price']=contestFilter['price'].replace(/\$/g,'');
      if(contestFilter['price'].indexOf(',')!==-1){

        contestFilter['price']=contestFilter['price'].split(',');
        console.log("its array",contestFilter['price']);
      }else{
        console.log("its one item");
        contestFilter['price']=[contestFilter['price']];
      }
      //console.log("\n\n\n",contestFilter['price'].reduce(reducer,{}),"\n\n\n");
      contestFilter['price']=contestFilter['price'].reduce(reducer,{});





      console.log("hasPrice\n\n\n\n\n\n\n\n\n");


    }
    for(let key in contestFilter){
      if(contestFilter.hasOwnProperty(key)&&(key!=="typeOfContest")){
        if(FILTER_TAGS_IN_NEED_CHANGED.includes(key)){
          contestFilter[key]=[contestFilter[key].replace(/and/g,'&').replace(/_/g,' ')];
        }
      }
    }
    if( contestFilter['status']){
      contestFilter['status']={[Op.in]:contestFilter['status'],[Op.notIn]:['Not Paid']};}
    else{
      contestFilter['status']={[Op.notIn]:['Not Paid']};
    }


    req.contestFilter = contestFilter;
    next();
  } catch (e) {
    console.log("Error in middle",e)
    next({ status: 404, message: 'User not founds' });
  }
};

