import axios from './../axiosConfig/axiosConfig';
import { restURL } from '../baseURL';

export const getUserLogin = data => axios.post(`${restURL}/login`, (data));
export const userIsLogin = () => axios.get(`${restURL}/user`);
export const signUpLogin = data => axios.post(`${restURL}/user`, (data));
export const getAllUsers= () => axios.get(`${restURL}/getAllUsers`);
export const userBanStatusUpdate = (id,data) => axios.post(`${restURL}/banStatusUpdate/${id}`,(data));
export const logout = (data) => axios.delete(`${restURL}/logout`,{data:{data}});





