const {FILTER_TAGS,
  FILTER_TAGS_IN_NEED_CHANGED}=require('../utils/Consts');
const _ = require('lodash');

module.exports.prepare = async (req, res, next) => {
  try {

    console.log(req.query)
    const {query} = req;
    const contestFilter = _.pick(query, FILTER_TAGS);
    for(let key in contestFilter){
      if(contestFilter.hasOwnProperty(key)&&(key!=="typeOfContest")){
        if(FILTER_TAGS_IN_NEED_CHANGED.includes(key)){
          contestFilter[key]=[contestFilter[key].replace(/and/g,'&').replace(/_/g,' ')];
        }
      }
    }
    req.contestFilter = contestFilter;
    next();
  } catch (e) {
    console.log("Error in middle")
    next({ status: 404, message: 'User not founds' });
  }
};

