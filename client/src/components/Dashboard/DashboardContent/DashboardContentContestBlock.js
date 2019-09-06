import React from 'react';
import style from './DashboardContent.module.scss';
import {Link} from "react-router-dom";
import {contestProgressing, selectedContestType,createOrUpdateTempContest} from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import {put} from "@redux-saga/core/effects";
import ACTION from "../../../actions/actiontsTypes";
const moment = require('moment');
const _ = require("lodash");

function contestBlock(props) {
    console.log(props.contest);
    // 2019-09-05T14:22:30.787Z
    const updatedAt=_.cloneDeep(props.contest.updatedAt);
    const YYYY=parseInt(updatedAt.slice(0,4));
    const MM=parseInt(updatedAt.slice(5,7))-1;
    const DD=parseInt(updatedAt.slice(8,10));
    const HH=parseInt(updatedAt.slice(11,13));
    //const mom= moment();
    //console.log(mom.get("date"));


    const preDateNow=moment().set({'minute': 0, 'second': 0, 'millisecond': 0});
   // console.log(mom.get('year'),mom.get('month'),mom.get('date'),mom.get('hour'),);
     const ppreDateNow=moment().set({'year': YYYY, 'month': MM, 'date': DD,'hour': HH,'minute': 0, 'second': 0, 'millisecond': 0});
    //console.log(ppreDateNow,preDateNow);
     const duration = moment.duration(moment(ppreDateNow).diff(moment(preDateNow)));
    // console.log(duration.humanize({precision: 4}));
    //onsole.log(moment(duration).get('year'),moment(duration).get('month'),moment(duration).get('date'),moment(duration).get('hour'),"duration");
//     console.log(preDateNow);
//     console.log(YYYY,MM,DD,HH);
//     const dateNow=moment(preDateNow).subtract(HH, 'hour');//.subtract(6, 'days')  .subtract(MM, 'month').subtract(YYYY, 'year')
//     console.log(dateNow);
//     const YYYY_PASSED=dateNow.get('year')-YYYY;
//     const MM_PASSED=dateNow.get('month')-MM;
//     const DD_PASSED=dateNow.get('date');
//     const HH_PASSED=dateNow.get('hour');
//     const TIME_HAS_PASSED={
//         YYYY:YYYY_PASSED,
//         MM:MM_PASSED,
//         DD:DD_PASSED,
//         HH:HH_PASSED,
//     };
// console.log(TIME_HAS_PASSED);
    return (<div className={style.contestInDraft}>
                    <div className={style.contestInDraftContainer}>
                        <div className={style.contestInDraftContainerInside}>
                            <div className={style.contestInDraftContainerColumn}>
                                <div className={style.contestInDraftContainerRow}>
                                    <div className={style.contestInDraftContainerRowInsideColumn}>
                                        <div className={style.firstRow}>
                                            <Link to=""> #{props.contest.id} - {props.contest.titleOfContest}</Link>
                                        </div>
                                        <div className={style.secondRow}>
                                            <Link to=""> {(props.contest.typeOfContest==="TAGLINE_OR_SLOGAN")?"Branding & identity":"Naming"} / {props.contest.typeOfContest.replace(/_/g, ' ')}</Link>
                                           {" "}(Saved {duration.humanize({precision: 4})})
                                        </div>
                                    </div>
                                    <div className={style.buttonPosition}>
                                        <Link to="/contest_creating/" onClick={()=>{props.selectedContestType([props.contest.typeOfContest]);props.contestProgressing(2,props.contest.typeOfContest);
                                        props.createOrUpdateTempContest(props.contest)}}>
                                            <div className={style.button}>
                                                <i className="fas fa-pen-square"/> Continue Editing
                                            </div>
                                        </Link></div>
                                </div>
                                <div className={style.contestInDraftContainerRow}>
                                    <div className={style.contestInDraftContainerRowInsideColumn}>
                                        <div className={style.thirdRow}>
                                            preferences : {props.contest.visualBrandStyle || props.contest.preferenceForName || props.contest.preferenceForTagline}
                                        </div>
                                        <div className={style.fourthRow}>
                                            target customers : {props.contest.targetCustomers}
                                        </div>
                                    </div>
                                    <div>
                                        {}
                                    </div>
                                </div>
                                <div className={style.contestInDraftContainerRow}>
                                    <div className={style.fifthRow}>
                                        <div>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>&nbsp;&nbsp; {props.nickName}   &nbsp;&nbsp;&nbsp; <i
                                            className="far fa-gem"/> ${(props.contest.paid)?props.contest.price:0}
                                        </div>
                                    </div>
                                    <div className={style.sixthRow}>
                                        <i className="fas fa-trash-alt"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
       );
}
const mapStateToProps = (state) => {
    return {
        state,
    };
};
const mapDispatchToProps = (dispatch) => ({
    selectedContestType: (contestTypes) => dispatch(selectedContestType(contestTypes)),
    contestProgressing: (currentStage,type) => dispatch(contestProgressing(currentStage,type)),
    createOrUpdateTempContest: (currentStage,type) => dispatch(createOrUpdateTempContest(currentStage,type)),

});
export default connect(mapStateToProps, mapDispatchToProps)(contestBlock);
//yield put({type: ACTION.TEMP_CONTEST, data: {...dataToSend,...newProps}});

        // {(TIME_HAS_PASSED.HH===0 && TIME_HAS_PASSED.YYYY===0 &&TIME_HAS_PASSED.MM===0 &&TIME_HAS_PASSED.DD===0)?"less than an hour":""}*/}
        //                                     {/*{(TIME_HAS_PASSED.YYYY!==0)?" "+TIME_HAS_PASSED.YYYY+" year ":""}*/}
        //                                     {/*{(TIME_HAS_PASSED.MM!==0)?" "+TIME_HAS_PASSED.MM+" month ":""}*/}
        //                                     {/*{(TIME_HAS_PASSED.DD!==0)?" "+TIME_HAS_PASSED.DD+" day ":""}*/}
        //                                     {/*{(TIME_HAS_PASSED.HH!==0)?" "+TIME_HAS_PASSED.HH+" hour ":""}*/}
        //                                     {/*ago)*/}