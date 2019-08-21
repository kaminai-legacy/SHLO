import React from 'react';
import Banner from '../../components/Dashboard/DashboardBanner/DashboardBanner';
import DashboardContestStatus from '../../components/Dashboard/DashboardContestStatus/DashboardContestStatus';
import DashboardContent from '../../components/Dashboard/DashboardContent/DashboardContent';
import style from './Dashboard.module.scss';
import Header from "../../components/commonToAll/Header/Header";
import HeaderBottom from "../../components/commonToAll/HeaderBottom/HeaderBottom";


function dashboard(props) {
    return (
        <div className={style.mainDashboard}>
            <Header/>
            <HeaderBottom/>
            <Banner/>
            <DashboardContent/>
            {/* <DashboardContestStatus/>*/}
        </div>);
}

export default (dashboard);