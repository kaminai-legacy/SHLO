import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {TOKENS_KEY} from '../constants/consts';
import {userIsLogin} from '../api/rest/restContoller';

export function* isLoginSaga() {
    try {
        const token = localStorage.getItem(TOKENS_KEY);
        if (token) {
            const {data} = yield userIsLogin();
            yield put({type: ACTION.SET_USER, user: data});
        }
    } catch (e) {
        yield put({type: ACTION.IS_LOGIN_ERROR, error: e});
    }
}

