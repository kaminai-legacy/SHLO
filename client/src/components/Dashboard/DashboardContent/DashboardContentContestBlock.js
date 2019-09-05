import React from 'react';
import style from './DashboardContent.module.scss';
import {Link} from "react-router-dom";
const _ = require("lodash");

function contestBlock(props) {
    console.log(props.contest)
    // 2019-09-05T14:22:30.787Z
    const updatedAt=_.cloneDeep(props.contest.updatedAt);
    const YYYY=updatedAt.slice(0,4);
    const MM=updatedAt.slice(5,7)-1;
    const DD=updatedAt.slice(8,10);
    const HH=updatedAt.slice(11,13);
//     const contestDate=new Date(YYYY,MM,DD,HH);
//     const dateNow=new Date();
// console.log(contestDate);
//     console.log(dateNow);

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
                                            (Saved 20 hours ago)
                                        </div>
                                    </div>
                                    <div className={style.buttonPosition}>
                                        <Link to="">
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

export default contestBlock;