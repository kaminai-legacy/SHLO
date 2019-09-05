import {put} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {sendApi,createApiLink} from '../api/rest/restContoller';
import history from '../boot/browserHistory';
import {TOKENS_KEY} from "../constants/consts";
const  _ = require('lodash');


export function* sendApiToServer({dataToSend}) {
    try {
        const {data} = yield sendApi(dataToSend);
        console.log(data);
        console.log(data.hasOwnProperty('otherData'));
        {if(data.hasOwnProperty('otherData')){if(data.otherData.hasOwnProperty('tokenPair')){

            const TOKENS_JSON = JSON.stringify(data.otherData.tokenPair);
            sessionStorage.setItem(TOKENS_KEY, TOKENS_JSON);
        }
            if(data.otherData.hasOwnProperty('resetPassword')){
                yield put({type: ACTION.MODAL_STATE, data:{resetPassword:true}});
                console.log(data.email);
                yield put({type: ACTION.GET_MAIL_SERVICE_RESULT,result:null,err:false,email:data.email});
            }
        }}
        yield put({type: ACTION.GET_MAIL_SERVICE_RESULT, result:data['msg'],err:data.err});
        console.log(data['linkToRedirect']);
        history.push(data['linkToRedirect']);
        }
     catch (e){
    }
}