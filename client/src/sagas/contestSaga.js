import {put, call} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {createContest,sendContestPayment} from '../api/rest/restContoller';
import pagesContent from '../constants/ContestsFormContet';
const  _ = require('lodash');
function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
}

function isObjectAndHasProperty(obj,property) {
    return _.isObject(obj) && (obj.hasOwnProperty(property));
}

export function* selectedTypes({contestTypes}) {

    yield put({type: ACTION.SET_USER, contestTypes});

}

export function* sendContest({dataToSend}) {
    console.log(dataToSend);
    let FinalDataToSend = new FormData();

    const newDataToSend = _.cloneDeep(dataToSend);

    for(let key in newDataToSend){
        if(newDataToSend.hasOwnProperty(key)){
            const properties=newDataToSend[key];

            if("uploadFile"===key){
                for(let key in properties){
                    if  (properties.hasOwnProperty(key))
                    {
                        FinalDataToSend.append(properties[key].name, properties[key]);
                    }
                }
            }else if (_.isArray(properties)){
                newDataToSend[key] = properties.map((item)=>{
                    if(isObjectAndHasProperty(item,'value'))
                    {return item['value'];}
                });
                FinalDataToSend.append(key, JSON.stringify(newDataToSend[key]));
            } else if(isObjectAndHasProperty(properties,'value')){

                    FinalDataToSend.append(key, JSON.stringify(properties['value']));
                }
            else{
                FinalDataToSend.append(key, JSON.stringify(newDataToSend[key]));
            }
        }
    }
    console.log(FinalDataToSend);
    const {data} = yield createContest(FinalDataToSend);
    const newProps=_.pick(data.contest,['paid','id','price']);

    console.log(data,newProps);

/*
    const preData = _.cloneDeep(data);//_.startCase
    const typeOfIndustry = preData['typeOfIndustry'];
    preData['typeOfIndustry']=typeOfIndustry.map((item)=>{
        const labels = pagesContent.TYPE_OF_INDUSTRY_OPTIONS.map(()=>)
        return{value:item,label:pagesContent.TYPE_OF_INDUSTRY_OPTIONS[item]}});
*/
    yield put({type: ACTION.TEMP_CONTEST, data: {...newProps,...dataToSend}});
}

export function* contestPayment({dataToSend}) {
    const {data} = yield sendContestPayment(dataToSend);
}



export function* signUpSaga({dataToSend}) {
    try {

    } catch (e) {

    }
}

