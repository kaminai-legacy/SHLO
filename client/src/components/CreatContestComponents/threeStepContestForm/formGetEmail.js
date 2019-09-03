import React from 'react';
import {Field, reduxForm, formValueSelector, getFormValues, SubmissionError,} from 'redux-form';
import 'react-widgets/dist/css/react-widgets.css';
import style from "./threeStepContestForm.module.scss";
import connect from "react-redux/es/connect/connect";
import {checkEmail} from "../../../actions/actionCreator";
const promises = () => new Promise(resolve => resolve());
const yup = require('yup');
const schema = require('../../../models/userSchema');

const renderField = ({input, placeholder, label, type, meta, meta: {touched, error, active}}) => {
    return <div >
            <input  className={style.inputEmail}{...input} placeholder={placeholder} type={type}/>
        {touched && error && <div className={style.errorMsg}>{error}</div>}
    </div>
};



let formGetEmail = props => {
    const {handleSubmit,previousPage,textSubmit,formContent,formValues} = props;

    const submit = (values) => {
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
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={style.formGetEmail}>
            <div className={style.title}>Let's Get Started</div>
            <div className={style.preInput}>First, tell us your email address so we can automatically save your contest brief. This way you can get back to it at any time.</div>
           <Field name={'email'} type={'email'} component={renderField}/>
            <button  type="submit" className={style.button} >
               Continue Your Brief
            </button>
        </form>
    );
};

formGetEmail = reduxForm({
    form:'formGetEmail',
     //                 <------ same form name
    destroyOnUnmount: true, //        <------ preserve form data
    forceUnregisterOnUnmount: false,
    enableReinitialize: true,// <------ unregister fields on unmount
})(formGetEmail);

 // <-- same as form name

const mapStateToProps = (state) => {
    //const selector = formValueSelector(state.contestReducers.currentContestForm);
//console.log(state,state.contestReducers.currentContestForm);
    //const typeOfIndustry = selector(state, 'typeOfIndustry');
    return {
        state,
       // typeOfIndustry
    };
};
const mapDispatchToProps = (dispatch) => ({
    checkEmail: (values) => dispatch(checkEmail(values)),
});
export default connect(mapStateToProps,mapDispatchToProps)(formGetEmail);
