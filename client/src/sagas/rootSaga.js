import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {getLoginSaga, signUpSaga,checkUserEmail} from './usersSaga';
import {isLoginSaga} from './isLoginSaga';
import {getAllUsersSaga} from './getAllUsersSaga';
import {changeBanStatusSaga} from './changeBanStatusSaga';
import {logoutSaga} from './logoutSaga';
import {selectedTypes,sendContest,contestPayment} from './contestSaga';
import {sendRequisites} from './creditCardSaga';
//import {dashboardChange} from './manageToElements';

function* rootSaga() {
    yield takeLatest(ACTION.GET_ALL_USERS, getAllUsersSaga);
    yield takeLatest(ACTION.USER_SIGN_UP, signUpSaga);
    yield takeLatest(ACTION.USER_LOGIN, getLoginSaga);
    yield takeLatest(ACTION.USER_IS_LOGIN, isLoginSaga);
    yield takeLatest(ACTION.CHANGE_IS_BANED, changeBanStatusSaga);
    yield takeLatest(ACTION.IS_LOGOUT, logoutSaga);
    //yield takeLatest(ACTION.SELECTED_CONTEST_TYPE, selectedTypes);
    yield takeLatest(ACTION.SEND_CONTEST, sendContest);
    yield takeLatest(ACTION.CONTEST_PAYMENT, contestPayment);
    yield takeLatest(ACTION.SEND_CARD_REQUISITES, sendRequisites);
    yield takeLatest(ACTION.CHECK_USER_EMAIL, checkUserEmail);
    //yield takeLatest(ACTION.DASHBOARD, dashboardChange);sendContest
}

export default rootSaga;
