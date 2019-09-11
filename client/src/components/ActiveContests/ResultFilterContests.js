import React from 'react';
import style from './ResultFilterContests.module.scss'
import {changeFilterTags} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";
const moment = require('moment');
const _ = require("lodash");

let resultFilterContests = props => {

    const time=(contestTime)=>{
        const dateUpdate=_.cloneDeep(contestTime);
        const YYYY=parseInt(dateUpdate.slice(0,4));
        const MM=parseInt(dateUpdate.slice(5,7))-1;
        const DD=parseInt(dateUpdate.slice(8,10));
        const HH=parseInt(dateUpdate.slice(11,13));
        const mm=parseInt(dateUpdate.slice(14,16));
        const date = new Date(Date.now());
        const userTimezoneOffset = date.getTimezoneOffset();
        const DateNow=moment().set({'minute':userTimezoneOffset, 'second': 0, 'millisecond': 0});
        const updateDate=moment().set({'year': YYYY, 'month': MM, 'date': DD,'hour': HH,'minute': mm, 'second': 0, 'millisecond': 0});
        return moment.duration(moment(updateDate).diff(moment(DateNow)));
    };

    return (
                <div className={style.resultBody}>
                    <div className={style.filters}>
                    </div>
                    <div className={style.count}>
                        {props.filter.confirmedContests.length} Contests
                        <div className={style.hrline}/>
                    </div>
                    <div className={style.content}>

                        {props.filter.confirmedContests.map((contest,id)=>{
                            console.log(contest);
                            const duration=time(contest.updatedAt);
                            return  <div key={id} className={style.contest}>
                                <div className={style.flexRow}>
                                    <div className={style.text}>
                                        <div className={style.contestTitle}>
                                            <Link to="">{contest.titleOfContest}</Link>
                                        </div>
                                        <div className={style.typeAndTime}>
                                            <Link to=""> <span className={style.contestType}>{(contest.typeOfContest==="TAGLINE_OR_SLOGAN")?"Branding & identity":"Naming"} / {contest.typeOfContest.replace(/_/g, ' ')}</span></Link>
                                            <span className={style.timeAgo}>{" "}(Saved {(duration.humanize({precision: 4}).indexOf('ago')!==-1)?duration.humanize({precision: 4}):duration.humanize({precision: 4}) + "  ago"})</span>
                                        </div>

                                        <div className={style.preferences}>
                                            <div>preferences : {contest.visualBrandStyle || contest.preferenceForName || contest.preferenceForTagline}   </div>
                                                <div> target customers : {contest.targetCustomers}   </div>
                                        </div>
                                        <div className={style.raiting}>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
                                            <i className="far fa-gem"/> {contest.price}
                                        </div>
                                    </div>
                                    <div className={style.entries}>
                                        <div><i className="fas fa-users"/> {contest.entries}</div>
                                        <span>Entries</span>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filter: state.ActiveContestFilterReducer
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeFilterTags: (contestTypes) => dispatch(changeFilterTags(contestTypes)),

});

export default connect(mapStateToProps,mapDispatchToProps)(resultFilterContests);
