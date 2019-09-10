import React from 'react';
import DashboardContent from '../../components/Dashboard/DashboardContent/DashboardContent';
import style from './ActiveContests.module.scss';
import Header from "../../components/commonToAll/Header/Header";
import Footer from '../../components/commonToAll/Footer/footer';
import HeaderBottom from "../../components/commonToAll/HeaderBottom/HeaderBottom";
import ActiveContestContent from "../../components/ActiveContests/ActiveContestContent";
import connect from "react-redux/es/connect/connect";

function activeContests(props) {
    return (
        <div className={style.mainDashboard}>
            <Header/>
            <HeaderBottom/>
            <ActiveContestContent/>
            <Footer/>
        </div>);
}
const mapStateToProps = (state) => ({
    user: state.userReducers.user,
    isFetching: state.userReducers.isFetching,
});

export default connect(mapStateToProps)(activeContests);