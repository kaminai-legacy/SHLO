import ACTION from './actiontsTypes';

export const userLogin = (dataToSend) => ({
    type: ACTION.USER_LOGIN,
    dataToSend,
});

export const userSignUp = (dataToSend) => ({
    type: ACTION.USER_SIGN_UP,
    dataToSend,
});

export const userIsLogin = () => ({
    type: ACTION.USER_IS_LOGIN,
});

export const getAllUsers = () => ({
    type: ACTION.GET_ALL_USERS,
});

export const userBaned = (id, banStatus) => ({
    type: ACTION.CHANGE_IS_BANED,
    id,
    banStatus
});

export const logout = () => ({
    type: ACTION.IS_LOGOUT,
});

export const selectedContestType = (contestTypes) =>{
   // console.log("catch");
    return ({
    type: ACTION.SELECTED_CONTEST_TYPE,
   contestTypes
})};

export const contestProgressing = (stage) =>{
    //console.log("catch",stage,"empty");
    return ({
        type: ACTION.CONTEST_PROGRESSING,
        stage
    })};

export const sendContest = (dataToSend) =>{
    console.log(dataToSend,"dataToSend");
    return ({
        type: ACTION.SEND_CONTEST,
        dataToSend
    })};