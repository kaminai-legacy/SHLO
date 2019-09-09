import React,{useEffect} from 'react';
import Banner from '../../components/Dashboard/DashboardBanner/DashboardBanner';
import DashboardContestStatus from '../../components/Dashboard/DashboardContestStatus/DashboardContestStatus';
import DashboardContent from '../../components/Dashboard/DashboardContent/DashboardContent';
import style from './Dashboard.module.scss';
import Header from "../../components/commonToAll/Header/Header";
import HeaderBottom from "../../components/commonToAll/HeaderBottom/HeaderBottom";
import {changeAppStatus, changeUserPassword, resetApiMsg, userIsLogin} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import {Redirect} from 'react-router';

function dashboard(props) {
    console.log(props.user,props.isFetching)
    if (!props.isFetching){
        if (props.user === null) {
            return <Redirect to="/notFound"/>
        }}
    return (
        <div className={style.mainDashboard}>
            {/*{(!props.user)?<Redirect to="/notFound"/>:<></>}*/}
            <Header/>
            <HeaderBottom/>
            <Banner/>
            <DashboardContent/>
            {/* <DashboardContestStatus/>*/}
        </div>);
}
const mapStateToProps = (state) => ({
    user: state.userReducers.user,
    isFetching: state.userReducers.isFetching,
});

export default connect(mapStateToProps)(dashboard);