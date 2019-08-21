import React from 'react';
import style from './DashboardContestStatus.module.scss';
import StatusBlock from './DashboardContestStatusBlock/StatusBlock';

function dashboardContestStatus(props) {
    return (
        <div className={style.displayBlockRow}>
            <StatusBlock imgColor={"#16a085"} imgIcon={<i className="fas fa-pen-square"/>} count={1}
                         text={"Contests in Draft"} linkText={"Continue Editing"} link={"/notYet"}/>
            <StatusBlock imgColor={"#8e44ad"} imgIcon={<i className="far fa-lightbulb"/>} count={0}
                         text={"Launched Contests"} linkText={"Launch Contest"} link={"/notYet"}/>
        </div>);
}

export default dashboardContestStatus;