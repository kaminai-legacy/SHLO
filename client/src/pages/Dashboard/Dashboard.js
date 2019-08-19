import React from 'react';
import Banner from '../../components/Dashboard/DashboardBanner';
import style from './Dashboard.module.scss';
import Header from "../../components/commonToAll/Header/Header";
import HeaderBottom from "../../components/commonToAll/HeaderBottom/HeaderBottom";

function dashboard() {
    return (
        <div className={style.mainDashboard}>
            <Header/>
            <HeaderBottom/>
            <Banner/>
        </div>);
}

export default dashboard;
