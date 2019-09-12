import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {contestFilter} from '../api/rest/restContoller';
const _ =require("lodash");

export function* changeFilterTags({dataToSend}) {
    try {
       // console.log(dataToSend);
        const params = {};
        for (let key in dataToSend){
            if(dataToSend.hasOwnProperty(key)){
                if(dataToSend[key].hasOwnProperty('value')){
                    params[key]=dataToSend[key]['value'];
                }else{
                    params[key]=dataToSend[key];
                }
            }
        }
        console.log(params);
        const dataOnServer=_.cloneDeep(params);
        for (let key in dataOnServer){
            if(dataOnServer.hasOwnProperty(key)){
                if(_.isString(dataOnServer[key])&&(key!=='id')){
                    dataOnServer[key]=dataOnServer[key].replace( / /g,'_').replace( /&/g,'and');
                    }
                }
            }
        console.log(dataOnServer);
        yield put({type: ACTION.CHANGE_FILTER_TAGS,data:params});
        const {data} = yield contestFilter(dataOnServer);
        yield put({type: ACTION.SET_FILTERED_CONTEST, contests: data['contests']});
        console.log(data);
    } catch (e) {
        console.log(e)
        //yield put({type: ACTION.CHANGE_IS_BANED_ERROR, error: e});
    }
}

export function* getStarterContests() {
    try {
        const {data} = yield contestFilter({});
        console.log("resonpse",data)
        yield put({type: ACTION.SET_FILTERED_CONTEST, contests: data});
        //console.log(data);
    } catch (e) {
        console.log(e)
        //yield put({type: ACTION.CHANGE_IS_BANED_ERROR, error: e});
    }
}


