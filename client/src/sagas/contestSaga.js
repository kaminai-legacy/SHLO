import {put, call} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {createContest} from '../api/rest/restContoller';

import {TOKENS_KEY} from '../constants/consts';
import history from '../boot/browserHistory';
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
}

export function* signUpSaga({dataToSend}) {
    try {

    } catch (e) {

    }
}

