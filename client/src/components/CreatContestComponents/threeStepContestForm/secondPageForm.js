import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate'
import render from './renderField';
import style from "./threeStepContestForm.module.scss";
//const render=require('./renderField');

const renderError = ({meta: {touched, error}}) =>
    touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
    const {handleSubmit, previousPage,nextPage} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.preBusinessStepForm}>
                <div className={style.businessStepForm}>
            <Field name="email" type="email" component={render.renderField} label="Email"/>
            <div>
                <label>Sex</label>
                <div>
                    <label>
                        <Field name="sex" component="input" type="radio" value="male"/>
                        {' '}
                        Male
                    </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="female"/>
                        {' '}
                        Female
                    </label>
                    <Field name="sex" component={renderError}/>
                </div>
            </div>
                </div>
            </div>
            <div className={style.preButtonOnForm}>
                <div className={style.ButtonOnForm}>

                    <div className={style.text}>
                        You are almost finished. Select a pricing package in the next step
                    </div>
                    <div className={style.buttons}>
                        <button type="button"  className={style.prev} onClick={previousPage}>
                            Back
                        </button>
                        <button type="button"  className={style.next} onClick={nextPage}>
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(WizardFormSecondPage);
