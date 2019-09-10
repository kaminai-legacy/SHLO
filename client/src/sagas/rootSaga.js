import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {getLoginSaga, signUpSaga,checkUserEmail,changeUserPassword} from './usersSaga';
import {isLoginSaga} from './isLoginSaga';
import {getAllUsersSaga} from './getAllUsersSaga';
import {changeBanStatusSaga} from './changeBanStatusSaga';
import {logoutSaga} from './logoutSaga';
import {sendContest,receiveUserContests,deleteUserContest} from './contestSaga';
import {sendApiToServer} from './mailServicesSaga';
import {sendRequisites} from './creditCardSaga';

function* rootSaga() {
    yield takeLatest(ACTION.GET_ALL_USERS, getAllUsersSaga);
    yield takeLatest(ACTION.USER_SIGN_UP, signUpSaga);
    yield takeLatest(ACTION.USER_LOGIN, getLoginSaga);
    yield takeLatest(ACTION.USER_IS_LOGIN, isLoginSaga);
    yield takeLatest(ACTION.CHANGE_IS_BANED, changeBanStatusSaga);
    yield takeLatest(ACTION.IS_LOGOUT, logoutSaga);
    yield takeLatest(ACTION.SEND_CONTEST, sendContest);
    yield takeLatest(ACTION.SEND_CARD_REQUISITES, sendRequisites);
    yield takeLatest(ACTION.CHECK_USER_EMAIL, checkUserEmail);
    yield takeLatest(ACTION.MAIL_SERVICE, sendApiToServer);
    yield takeLatest(ACTION.CHANGE_USER_PASSWORD, changeUserPassword);
    yield takeLatest(ACTION.GET_USER_CONTESTS, receiveUserContests);
    yield takeLatest(ACTION.DELETE_CONTEST, deleteUserContest);
    //yield takeLatest(ACTION.CHANGE_FILTER_TAGS, deleteUserContest);

    //yield takeLatest(ACTION.CREATE_LINK_FOR_MAIL, createLink);
}
//createLink
export default rootSaga;
