import React,{useState,useEffect} from 'react';
import style from './DashboardContestStatus.module.scss';
import StatusBlock from './DashboardContestStatusBlock/StatusBlock';
import connect from "react-redux/es/connect/connect";
import {getUserContests} from "../../../actions/actionCreator";


function dashboardContestStatus(props) {
    useEffect(()=>{
        console.log(props.user);
        if(props.user && !props.userContests.contests){
            props.getUserContests(props.user.id)
        }
    });
    return (
        <div className={style.displayBlockRow}>
                {/*{console.log(props.contests)}*/}

            <StatusBlock imgColor={"#16a085"} imgIcon={<i className="fas fa-pen-square"/>} count={props.userContests.numberInDraft}
                         text={"Contests in Draft"} linkText={"Continue Editing"} link={"/notYet"}/>
                <StatusBlock imgColor={"#8e44ad"} imgIcon={<i className="far fa-lightbulb"/>} count={props.userContests.numberInLaunch}
                         text={"Launched Contests"} linkText={"Launch Contest"} link={"/notYet"}/>
        </div>);
}


const mapStateToProps = (state) => {
    return {
        state,
        user:state.userReducers.user,
        userContests:state.userContestsReducers,
    };
};
const mapDispatchToProps = (dispatch) => ({
    getUserContests:(data) => dispatch(getUserContests(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(dashboardContestStatus);
