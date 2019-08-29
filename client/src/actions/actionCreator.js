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

export const contestProgressing = (stage,form) =>{
    console.log("catch",stage,form,"empty");
    return ({
        type: ACTION.CONTEST_PROGRESSING,
        stage,
        form
    })};

export const sendContest = (dataToSend) =>{
    console.log(dataToSend,"dataToSend");
    return ({
        type: ACTION.SEND_CONTEST,
        dataToSend
    })};

export const contestPayment = (dataToSend) =>{
    console.log(dataToSend,"реквизиты");
    return ({
        type: ACTION.CONTEST_PAYMENT,
        dataToSend
    })};

/*export const loadInitialValue = (data) =>{
    console.log(data,"init");
    return ({
        type: ACTION.LOAD_INITIAL_VALUES,
        data
    })};*/

export const loadInitialValue = data => ({ type: ACTION.LOAD_INITIAL_VALUES, data });