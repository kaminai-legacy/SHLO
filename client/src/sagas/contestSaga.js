import {put, call} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {createContest,sendContestPayment,updateContest,getUserContests} from '../api/rest/restContoller';
import pagesContent from '../constants/ContestsFormContet';
const  _ = require('lodash');
function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
}

function isObjectAndHasProperty(obj,property) {
    return _.isObject(obj) && (obj.hasOwnProperty(property));
}

function preparingDataToSend(dataToSend) {
    let FinalDataToSend = new FormData();

    const newDataToSend = _.cloneDeep(dataToSend);
    const fileNames=[];
    for(let key in newDataToSend){

        if(newDataToSend.hasOwnProperty(key)){
            const properties=newDataToSend[key];


            if("uploadFile"===key){
                for(let key in properties){
                    if  (properties.hasOwnProperty(key))
                    {
                        FinalDataToSend.append(properties[key].name, properties[key]);
                        fileNames.push(properties[key].name);
                    }
                }
            }else if (_.isArray(properties)){
                newDataToSend[key] = properties.map((item)=>{
                    if(isObjectAndHasProperty(item,'value'))
                    {return item['value'];}else{
                        return item;
                    }
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
    FinalDataToSend.append('fileNames', JSON.stringify(fileNames));
    return FinalDataToSend;
}

export function* sendContest({dataToSend,id}) {
    console.log(dataToSend);

    if(dataToSend.id) {
        console.log("на UPDATE");
        const preDataToSend=_.omit(dataToSend,['paid','price','fileNames']);
        let FinalDataToSend = preparingDataToSend(preDataToSend);
        console.log("на UPDATE с файлами ",FinalDataToSend);
        if(dataToSend['fileNames']){
            dataToSend['fileNames'].forEach(function(item){
                console.log("минус 1-----------------------------------");
                FinalDataToSend.delete(item);
            })
        }
        console.log("на UPDATE без файлами ",FinalDataToSend);
        const {data} = yield updateContest(FinalDataToSend);
        console.log(data,"updateContest");
        const newProps=_.pick(data.contest,['paid','id','price','media']);
        yield put({type: ACTION.TEMP_CONTEST, data: {...dataToSend,...newProps}});
    }else{
        console.log("на CREATE");
        let FinalDataToSend = preparingDataToSend(dataToSend);
        const {data} = yield createContest(FinalDataToSend,id);
        const newProps=_.pick(data.contest,['paid','id','price','media']);
        yield put({type: ACTION.TEMP_CONTEST, data: {...dataToSend,...newProps}});

    }


   // console.log(FinalDataToSend);

    //console.log(data);

    //console.log(data,newProps);


}

export function* receiveUserContests({dataToSend}) {
   // console.log(dataToSend);
    const {data} = yield getUserContests(dataToSend);
    console.log(data);
    let numberInDraft=0,numberInLaunch=0,InDraft=[],InLaunch=[];
    data.map((item) => {
        console.log(item,item['paid']);
        if (item['paid']) {
            numberInLaunch++;
            InLaunch.push(item);
        } else {
            numberInDraft++;
            InDraft.push(item);
        }  console.log(item,numberInLaunch,numberInDraft)
    });
    yield put({type: ACTION.SET_USER_CONTESTS, data,numberInLaunch:numberInLaunch,numberInDraft:numberInDraft,InLaunch:InLaunch,InDraft:InDraft});
}



export function* signUpSaga({dataToSend}) {
    try {

    } catch (e) {

    }
}

