import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';

export function* dashboardChange() {
    try {
        yield put({type: ACTION.DASHBOARD_CHANGED});
    } catch (e) {
    }
}

