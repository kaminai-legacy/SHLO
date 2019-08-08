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


