import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {getAllUsersToManage} from '../api/rest/restContoller';

export function* getAllUsersSaga() {

    try {
        const {data} = yield getAllUsersToManage();
        yield put({type: ACTION.GET_ALL_USERS_SUCCESS, data: data});
    } catch (e) {
        yield put({type: ACTION.GET_ALL_USERS_ERROR, error: e});
    }
}

