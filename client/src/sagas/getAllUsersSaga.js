import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionsTypes/actiontsTypes';
import {getAllUsers} from '../api/rest/restContoller';

export function* getAllUsersSaga() {
    try {
        const {data} = yield getAllUsers();
        yield put({type: ACTION.GET_ALL_USERS_SUCCESS, data: data});
    } catch (e) {
        yield put({type: ACTION.GET_ALL_USERS_ERROR, error: e});
    }
}
