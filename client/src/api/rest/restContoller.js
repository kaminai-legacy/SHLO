import axios from './../axiosConfig/axiosConfig';
//import axios from 'axios';
import { restURL } from '../baseURL';


//export const getGoods = () => axios.get(`${restURL}/goods`);
//export const getOneGoods = id => axios.get(`${restURL}/goods/id/${id}`);

export const getUserLogin = data => axios.post(`${restURL}/login`, (data));
//export const getUserLogin = data => console.log(data);

export const userIsLogin = () => axios.get(`${restURL}/user`);
export const signUpLogin = data => axios.post(`${restURL}/user`, (data));
export const getAllUsersToManage = () => axios.get(`${restURL}/getAllUsers`);
export const userBanStatusUpdate = (id,data) => axios.post(`${restURL}/banStatusUpdate/${id}`,(data));
export const logout = (data) => axios.delete(`${restURL}/logout`,{data:{data}});





