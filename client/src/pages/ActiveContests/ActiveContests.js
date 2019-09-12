import React,{useEffect} from 'react';
import DashboardContent from '../../components/Dashboard/DashboardContent/DashboardContent';
import style from './ActiveContests.module.scss';
import Header from "../../components/commonToAll/Header/Header";
import Footer from '../../components/commonToAll/Footer/footer';
import HeaderBottom from "../../components/commonToAll/HeaderBottom/HeaderBottom";
import ActiveContestContent from "../../components/ActiveContests/Content/ActiveContestContent";
import connect from "react-redux/es/connect/connect";
import {getContestByFilter} from "../../actions/actionCreator";
const _=require('lodash');

function activeContests(props) {
    useEffect(()=>{
        console.log(props.filter)
        if((props.filter.confirmedContests===null) && (props.filter.isFetching===false)){

            console.log("STARTED VALUE   STARTED VALUE   STARTED VALUE   STARTED VALUE   STARTED VALUE   STARTED VALUE   ")

            props.getContestByFilter();}
    });
    return (
        <div>
            <Header/>
            <HeaderBottom/>
            <ActiveContestContent/>
            <Footer/>
        </div>);
}
const mapStateToProps = (state) => ({
    filter: state.ActiveContestFilterReducer
});

const mapDispatchToProps = (dispatch) => ({
    getContestByFilter: () => dispatch(getContestByFilter()),

});


export default connect(mapStateToProps,mapDispatchToProps)(activeContests);