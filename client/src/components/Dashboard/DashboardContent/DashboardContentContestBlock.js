import React from 'react';
import style from './DashboardContent.module.scss';
import {Link} from "react-router-dom";
import {contestProgressing, selectedContestType,createOrUpdateTempContest,deleteContest} from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import timeAgo from '../../../utils/timeAgo'
const _ = require("lodash");

function contestBlock(props) {
    const updatedAt=_.cloneDeep(props.contest.updatedAt);
    const duration = timeAgo(updatedAt);
    return (<div className={style.contestInDraft}>
            <div className={style.contestInDraftContainer}>
                <div className={style.contestInDraftContainerInside}>
                    <div className={style.contestInDraftContainerColumn}>
                        <div className={style.contestInDraftContainerRow}>
                            <div className={style.contestInDraftContainerRowInsideColumn}>
                                <div className={style.firstRow}>
                                    {/*<Link to={`/contest/${contest.id}`}>{contest.titleOfContest}</Link>*/}
                                    <Link to={`/contest/${props.contest.id}`}> #{props.contest.id} - {props.contest.titleOfContest}</Link>
                                </div>
                                <div className={style.secondRow}>
                                    <Link to=""> {(props.contest.typeOfContest==="TAGLINE_OR_SLOGAN")?"Branding & identity":"Naming"} / {props.contest.typeOfContest.replace(/_/g, ' ')}</Link>
                                    {" "}(Saved {(duration.humanize({precision: 4}).indexOf('ago')!==-1)?duration.humanize({precision: 4}):duration.humanize({precision: 4}) + "  ago"})
                                </div>
                            </div>
                            <div className={style.buttonPosition}>
                                {(props.contest['status']==='Not Paid')&&<Link to="/contest_creating/" onClick={()=>{props.selectedContestType([props.contest.typeOfContest]);props.contestProgressing(2,props.contest.typeOfContest);
                                    props.createOrUpdateTempContest(props.contest)}}>
                                    <div className={style.button}>
                                        <i className="fas fa-pen-square"/> Continue Editing
                                    </div>
                                </Link>}</div>
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
                                    className="far fa-gem"/> ${(props.contest['status']==='Not Paid')?0:props.contest.price}
                                </div>
                            </div>
                            <div className={style.sixthRow}>
                                {(props.contest['status']==='Not Paid')&& <i onClick={()=>props.deleteContest(props.contest.id,props.user.id)} className={"fas fa-trash-alt "+`${style.trash}`}/>}
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
        user: state.userReducers.user,
    };
};
const mapDispatchToProps = (dispatch) => ({
    selectedContestType: (contestTypes) => dispatch(selectedContestType(contestTypes)),
    contestProgressing: (currentStage,type) => dispatch(contestProgressing(currentStage,type)),
    createOrUpdateTempContest: (currentStage,type) => dispatch(createOrUpdateTempContest(currentStage,type)),
    deleteContest: (idContest,idUser) => dispatch(deleteContest(idContest,idUser)),

});
export default connect(mapStateToProps, mapDispatchToProps)(contestBlock);