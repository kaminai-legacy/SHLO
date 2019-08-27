import {put, call} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {createContest} from '../api/rest/restContoller';
import {TOKENS_KEY} from '../constants/consts';
import history from '../boot/browserHistory';
const  _ = require('lodash');


export function* selectedTypes({contestTypes}) {

    yield put({type: ACTION.SET_USER, contestTypes});

   /* try {
        const rememberMeStatus=_.pick(dataToSend,["rememberMe"]);
        const RES = yield getUserLogin(_.omit(dataToSend,["rememberMe"]));
        if (RES.data) {
            const USER = RES.data.user;
            const TOKENS = RES.data.tokenPair;
            yield put({type: ACTION.SET_USER, user: USER});
            const TOKENS_JSON = JSON.stringify(TOKENS);
            if(rememberMeStatus)
                {sessionStorage.setItem(TOKENS_KEY, TOKENS_JSON);}
            else
                {localStorage.setItem(TOKENS_KEY, TOKENS_JSON);}
            yield call(history.push('/'));
        } else if (RES.response.data === "User is baned") {
            yield put({type: ACTION.LOGIN_BANNED});
        } else if (RES.response.data === "User not founds") {
            yield put({type: ACTION.USER_ERROR, error: RES.response});
        }
    } catch (e) {
    }*/
}

export function* sendContest({dataToSend}) {

    let newDataToSend = new FormData();
    const otherField= _.omit(dataToSend,["uploadFile"]);
    const files= _.pick(dataToSend,["uploadFile"]);

    console.log(otherField,files);

    for(let key in otherField){
        if(otherField.hasOwnProperty(key)){
            console.log(otherField[key],"otherField.key");
            newDataToSend.append(key, otherField.key);
        }
    }
    //newDataToSend.append(dataToSend.uploadFile[0].name, dataToSend.uploadFile[0]);
    //formData.append('avatar', $('#photo-filename')[0].files[0]);
  //  console.log(newDataToSend,"hm strano");
  //  const otherField= _.omit(dataToSend,["uploadFile"]);
  // console.log(otherField);
  //  newDataToSend.append('otherField', otherField);
 //   newDataToSend.append('file', dataToSend.uploadFile);
 //   console.log(dataToSend,"dataToSend saga");
   /*const newDataToSend = {
        ...dataToSend,
        uploadFile:dataToSend.uploadFile[0]
    };*/
    console.log(newDataToSend,"dataToSend saga new",dataToSend.uploadFile[0]);
    const {data} = yield createContest(newDataToSend);
    //yield put({type: ACTION.SEND_CONTEST, DataToSend});

    /* try {
         const rememberMeStatus=_.pick(dataToSend,["rememberMe"]);
         const RES = yield getUserLogin(_.omit(dataToSend,["rememberMe"]));
         if (RES.data) {
             const USER = RES.data.user;
             const TOKENS = RES.data.tokenPair;
             yield put({type: ACTION.SET_USER, user: USER});
             const TOKENS_JSON = JSON.stringify(TOKENS);
             if(rememberMeStatus)
                 {sessionStorage.setItem(TOKENS_KEY, TOKENS_JSON);}
             else
                 {localStorage.setItem(TOKENS_KEY, TOKENS_JSON);}
             yield call(history.push('/'));
         } else if (RES.response.data === "User is baned") {
             yield put({type: ACTION.LOGIN_BANNED});
         } else if (RES.response.data === "User not founds") {
             yield put({type: ACTION.USER_ERROR, error: RES.response});
         }
     } catch (e) {
     }*/
}

export function* signUpSaga({dataToSend}) {
    try {

    } catch (e) {

    }
}

