import React,{useState} from 'react';
import style from './Contest.module.scss';
import {NO_NEEDED_FIELDS} from '../../constants/consts';
import connect from "react-redux/es/connect/connect";
import timeAgo from '../../utils/timeAgo';
import FormForEntry from "./FormForEntry/FormForEntry";
import check from '../../utils/checkFile(s)Size';
const _= require('lodash');


const contest =(props)=> {
    const submit = (values) =>{

        const errors={};
        console.log("isEmpty",!_.isEmpty(values['logoEntry']),values['logoEntry']);

        if(contest["typeOfContest"]==="LOGO"){if (_.isEmpty(values['logoEntry'])){
            console.log("isEmpty");
            errors['logoEntry']="required";
        }else{
            const resOfChecking = check(values['logoEntry'],50);
            console.log("logoEntry");
            if(resOfChecking){
                errors['logoEntry']=resOfChecking;
            }
        }}
        console.log(values,errors);
    };
    console.log(check);
    const [entryView,setEntryView]=useState(false);
    const {contest}=props.contest;
    const fieldsToRender=[];
    let duration;
    if(contest){
        duration=timeAgo(contest.updatedAt);
        const fieldsToShow=_.omit(contest,NO_NEEDED_FIELDS);

        for (let key in fieldsToShow){
            if(fieldsToShow.hasOwnProperty(key)){
                if(fieldsToShow[key]){
                    fieldsToRender.push( <div key={key} className={style.field}>
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
    let button=null;
    if(props.user){
        if(props.user.role==="Creative"){
            button="Start Entry";
        }
    }
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
                    <div className={`${style.container} ${style.contestContain}`}>
                        <div className={`${style.container} ${style.info}`}>
                        {fieldsToRender}
                        {/*<div>{button}</div>*/}
                    </div>
                    <div className={style.startEntryBlock}>
                        <div className={style.startEntry} onClick={()=>setEntryView(true)}>{button}</div>
                    </div>
                        {entryView && <FormForEntry type={contest["typeOfContest"]} onSubmit={submit}/>}
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
        contest: state.ContestReducer,
        user: state.userReducers.user
    };
};

const mapDispatchToProps = (dispatch) => ({
  //  changeFilterTags: (contestTypes) => dispatch(changeFilterTags(contestTypes)),
});

export default connect(mapStateToProps,mapDispatchToProps)(contest);
