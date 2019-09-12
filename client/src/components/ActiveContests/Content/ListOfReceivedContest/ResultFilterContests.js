import React from 'react';
import style from './ResultFilterContests.module.scss';
import timeAgo from '../../../../utils/timeAgo';
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";



let resultFilterContests = props => {

    return (
                <div className={style.resultBody}>
                    <div className={style.filters}>
                    </div>
                    <div className={style.count}>
                        {(props.filter.confirmedContests)?props.filter.confirmedContests.length:0} Contests
                        <div className={style.hrline}/>
                    </div>
                    <div className={style.content}>

                        {(props.filter.confirmedContests) && props.filter.confirmedContests.map((contest,id)=>{
                            const duration=timeAgo(contest.updatedAt);
                            return  <div key={id} className={style.contest}>
                                <div className={style.flexRow}>
                                    <div className={style.text}>
                                        <div className={style.contestTitle}>
                                            <Link to={`/contest/${contest.id}`}>{contest.titleOfContest}</Link>
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
                                        <div><i className="fas fa-users"/> {contest['numberOfEntries']}</div>
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


export default connect(mapStateToProps)(resultFilterContests);
