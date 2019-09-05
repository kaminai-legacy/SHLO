import React from 'react';
import style from './CreateContest.module.scss';
import Header from '../../components/commonToAll/Header/Header';
import HeaderBottom from '../../components/commonToAll/HeaderBottom/HeaderBottom';
import HeaderCreateContest from '../../components/CreatContestComponents/Header/Header';
import ContestCategories from '../../components/CreatContestComponents/contestCategories/contestCategories';
import PackagesAndOther from '../../components/CreatContestComponents/PackagesAndOther/PackagesAndOther';
import Form from '../../components/CreatContestComponents/threeStepContestForm/threeStepContestForm'
import connect from "react-redux/es/connect/connect";
import { startValueContestProgressing} from "../../constants/consts";
import {contestProgressing, logout, selectedContestType} from "../../actions/actionCreator";

//const STAGE = 1;

function CreateContest(props) {
    if(props.stage!==1){
        props.contestProgressing(startValueContestProgressing,null);
        props.selectedContestType([]);
    }
    return (
        <div className={style.body}>

            <Header />
            <HeaderBottom/>
            <HeaderCreateContest/>
            <ContestCategories/>
            <PackagesAndOther/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        state,
        stage:state.contestReducers.contestStage,
        selectedContestTypes:state.contestReducers.selectedContestTypes,
    };
};
const mapDispatchToProps = (dispatch) => ({
    selectedContestType: (contestTypes) => dispatch(selectedContestType(contestTypes)),
    contestProgressing: (firstValue,secondValue) => dispatch(contestProgressing(firstValue,secondValue)),
});
export default connect(mapStateToProps,mapDispatchToProps)(CreateContest);
//export default CreateContest;

/*
*

*
* */