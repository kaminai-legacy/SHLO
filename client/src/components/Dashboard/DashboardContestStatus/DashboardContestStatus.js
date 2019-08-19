import React from 'react';
import style from './DashboardContestStatus.module.scss';
import StatusBlock from './DashboardContestStatusBlock/StatusBlock';

function dashboardContestStatus(props) {
    return (
            <div className={style.displayBlockRow}>
               <StatusBlock imgColor={"#16a085"} imgIcon={<i className="fab fa-pencil-square-o text-info"/>} count={1} text={"Contests in Draft"} linkText={"Continue Editing"} link={"/notYet"}/>
                <StatusBlock imgColor={"#8e44ad"} imgIcon={<i className="fab fa-pencil-square-o text-info"/>} count={0} text={"Launched Contests"} linkText={"Launch Contest"} link={"/notYet"}/>
                <i id={"icon"} className="fal fa-pencil-square-o text-info"/>
                <i className="fas fa-lightbulb-o text-info"/>
            </div>);
}

export default dashboardContestStatus;