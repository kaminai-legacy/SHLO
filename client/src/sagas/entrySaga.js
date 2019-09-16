import {put, call} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {createEntry,changeEntryStatus} from '../api/rest/restContoller';
import pagesContent from '../constants/ContestsFormContet';
const  _ = require('lodash');
function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
}

export function* sendEntry({dataToSend}) {
console.log(dataToSend);
   // const {}=dataToSend;
    let FinalDataToSend = new FormData();

    for (let key in dataToSend){
        if(dataToSend.hasOwnProperty(key)){
            if("file"===key){
                console.log(dataToSend['file'][0]);
                for(let properties in dataToSend['file'][0]){
                    if  (dataToSend['file'][0].hasOwnProperty(properties))
                    {
                        FinalDataToSend.append(dataToSend['file'][0][properties].name, dataToSend['file'][0][properties]);
                    }
                }
            }else{
                FinalDataToSend.append(key, JSON.stringify(dataToSend[key]));
            }
        }
    }
    console.log(FinalDataToSend);



    const {data} = yield createEntry(FinalDataToSend);
    console.log(data);
    if(data==="OK"){
        yield put({type: ACTION.NEW_MESSAGE,msg:"Entry was created",error:false});
    }else{
        yield put({type: ACTION.NEW_MESSAGE,msg:"Something went wrong",error:true});
    }
    // if(data){
    //
    // }
      // console.log(data);
}

export function* managed({dataToSend}) {
    console.log(dataToSend);

        const {data} = yield changeEntryStatus(dataToSend);
        if(data.contest){
            yield put({type: ACTION.CONTEST_UPDATE,contest:data.contest});
        }
        if(data.entry){
        yield put({type: ACTION.ENTRY_UPDATE,entry:data.entry});
        }
console.log(data);

}
//ENTRY_MANAGED