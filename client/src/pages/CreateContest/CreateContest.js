import React from 'react';
import style from './CreateContest.module.scss';
import Header from '../../components/commonToAll/Header/Header';
import HeaderBottom from '../../components/commonToAll/HeaderBottom/HeaderBottom';
import HeaderCreateContest from '../../components/CreatContestComponents/Header/Header';
import ContestCategories from '../../components/CreatContestComponents/contestCategories/contestCategories';
import PackagesAndOther from '../../components/CreatContestComponents/PackagesAndOther/PackagesAndOther';
import Form from '../../components/CreatContestComponents/threeStepContestForm/threeStepContestForm'
import connect from "react-redux/es/connect/connect";
import {Redirect} from 'react-router';
import {SubmissionError} from "redux-form";
import {checkEmail} from "../../actions/actionCreator";
const promises = () => new Promise(resolve => resolve());
const yup = require('yup');
const schema = require('../../models/userSchema');


//const STAGE = 1;


function CreateContest(props) {
   /* const submit = (values) => {
        return promises().then(async () => {
            let resEmail;
            try {
                resEmail = await yup.reach(schema, 'email').isValid(values.email);
            } catch (e) {
            }
            if (!resEmail) {
                throw new SubmissionError({
                    email: 'Email is not valid format',
                    _error: 'Login failed!',
                });
            }
            console.log("ALL props", values);
            props.checkEmail(values);
        });
    };*/
    return (
        <div className={style.body}>
            {(props.stage===1)?<Redirect to="/contest_creating_choose_type"/>:<></>}
            <Header />
            <HeaderBottom/>
            <HeaderCreateContest/>
            <Form local={props.local}/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        state,
        stage:state.contestReducers.contestStage,
        selectedContestTypes:state.contestReducers.selectedContestTypes
    };
};

export default connect(mapStateToProps)(CreateContest);
//export default CreateContest;

