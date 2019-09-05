import axios from './../axiosConfig/axiosConfig';
import { restURL } from '../baseURL';

export const getUserLogin = data => axios.post(`${restURL}/login`, (data));
export const userIsLogin = () => axios.get(`${restURL}/user`);
export const signUpLogin = data => axios.post(`${restURL}/user`, (data));
export const getAllUsers= () => axios.get(`${restURL}/getAllUsers`);
export const userBanStatusUpdate = (id,data) => axios.post(`${restURL}/banStatusUpdate/${id}`,(data));
export const logout = (data) => axios.delete(`${restURL}/logout`,{data:{data}});
export const createContest = (dataToSend,id) => axios.post(`${restURL}/contest/${id}`,dataToSend);
export const updateContest = (dataToSend) => axios.put(`${restURL}/contest`,dataToSend);
export const sendContestPayment = (dataToSend) => axios.post(`${restURL}/contestPayment`,dataToSend);
export const checkEmail = (dataToSend) => { return axios.post(`${restURL}/userEmail`,dataToSend)};
export const sendApi = (dataToSend) => axios.get(`${restURL}/service/${dataToSend}`);
export const createApiLink = (dataToSend) => axios.post(`${restURL}/createLinkApi/`,dataToSend);
export const changePassword = (dataToSend) => axios.put(`${restURL}/changePassword/`,dataToSend);
export const getUserContests = (dataToSend) => axios.get(`${restURL}/getUserContests/${dataToSend}`);
//export const checkEmail = (dataToSend) =>console.log(dataToSend);

//export const sendContestPayment = (dataToSend) => console.log(dataToSend);


