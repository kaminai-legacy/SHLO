import React,{useState} from 'react';
import style from './Contest.module.scss';
import {NO_NEEDED_FIELDS} from '../../constants/consts';
import connect from "react-redux/es/connect/connect";
import timeAgo from '../../utils/timeAgo'
const _= require('lodash');

const contest =(props)=> {
    const {contest}=props.contest;
    const fieldsToRender=[];
    let duration;
    if(contest){
        duration=timeAgo(contest.updatedAt);
        const fieldsToShow=_.omit(contest,NO_NEEDED_FIELDS);

        for (let key in fieldsToShow){
            if(fieldsToShow.hasOwnProperty(key)){
                if(fieldsToShow[key]){
                    fieldsToRender.push( <div className={style.field}>
                        <div className={style.title}>
                            {key}
                        </div>
                        <div className={style.text}>
                            {fieldsToShow[key]}
                        </div>
                    </div>)
                }
            }
        }
    }

    //const [formValues, setFormValues] = useState({});
    if(props.contest){console.log(props.contest,typeof props.contest)}
    return (<>
       {(contest)? <div className={style.ContestMain}>
            <div className={style.banner}>
                <div className={style.container}>
                    <div className={style.flexRowTitle}>
                        <div><i className="fas fa-flask flask-icon"/></div>
                            <div>{contest["titleOfContest"]}</div>
                    </div>
                </div>
            </div>
            <div className={style.brief}>
                <div className={`${style.container} ${style.flexRowBrief}`}>
                    <div className={`${style.container} ${style.info}`}>
                        {fieldsToRender}
                    </div>
                    <div className={`${style.container} ${style.status}`} >
                        <div className={style.block} >

                            <div className={style.header} >
                                <div><i className="far fa-gem"/></div><div>&nbsp;&nbsp;${contest.price}</div>
                            </div>
                            <div className={style.text} >
                                <div className={style.entries}>
                                    <div><i className="fas fa-users"/> {contest['numberOfEntries']}</div>
                                    <span>Entries</span>
                                </div>
                                <span  className={style.time} >{" "}Saved {(duration.humanize({precision: 4}).indexOf('ago')!==-1)?duration.humanize({precision: 4}):duration.humanize({precision: 4}) + "  ago"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>:null}</>
    );
};

const mapStateToProps = (state) => {
    return {
        contest: state.ContestReducer
    };
};

const mapDispatchToProps = (dispatch) => ({
  //  changeFilterTags: (contestTypes) => dispatch(changeFilterTags(contestTypes)),
});

export default connect(mapStateToProps,mapDispatchToProps)(contest);
