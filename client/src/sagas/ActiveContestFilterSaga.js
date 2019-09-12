import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {contestFilter,getContestById} from '../api/rest/restContoller';
const _ =require("lodash");

export function* changeFilterTags({dataToSend}) {
    try {
        yield put({type: ACTION.CHANGE_FILTER_TAGS,data:dataToSend});
    } catch (e) {
        console.log(e)
        //yield put({type: ACTION.CHANGE_IS_BANED_ERROR, error: e});
    }
}

export function* sendFilterData({dataToSend}) {
    try {
        yield put({type: ACTION.FILTERED_CONTEST_REQUEST});
       console.log(dataToSend)

           const {data} = yield contestFilter({url:dataToSend});
        console.log("resonpse",data);
           yield put({type: ACTION.SET_FILTERED_CONTEST, contests: data});
        // console.log(data);
    } catch (e) {
        console.log(e)
        //yield put({type: ACTION.CHANGE_IS_BANED_ERROR, error: e});
    }
}

export function* getById({id}) {
    try {
        const {data} = yield getContestById(id);
        yield put({type: ACTION.CONTESTS_BY_ID_RESPONSE, contest: data});
        // console.log(data);
    } catch (e) {
        console.log(e)
        //yield put({type: ACTION.CHANGE_IS_BANED_ERROR, error: e});
    }
}



export function* getStarterContests() {
    try {
        console.log("   START   START   START   START   START   START   START   START   START")
        yield put({type: ACTION.FILTERED_CONTEST_REQUEST});
        const {data} = yield contestFilter({url:'http://192.168.0.111:3000/api/contestFilter/?'});
        console.log("resonpse",data);
        yield put({type: ACTION.SET_FILTERED_CONTEST, contests: data});
        //console.log(data);
    } catch (e) {
        console.log(e)
        //yield put({type: ACTION.CHANGE_IS_BANED_ERROR, error: e});
    }
}


