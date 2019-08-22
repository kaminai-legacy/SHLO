import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';
import style from "./threeStepContestForm.module.scss";

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
//import {renderColorSelector as Selector} from './renderField';
//import render from'./renderField';
//const render=require('./renderField');

const WizardFormThirdPage = props => {
    const {handleSubmit, pristine, previousPage, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.preBusinessStepForm}>
                <div className={style.businessStepForm}>
            <div>
                <label>Favorite Color</label>
                {/*}<Field name="favoriteColor" component={render.renderColorSelector}*/}
                data={colors}/>
            </div>
            <div>
                <label htmlFor="employed">Employed</label>
                <div>
                    <Field
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </div>
            <div>
                <label>Notes</label>
                <div>
                    <Field name="notes" component="textarea" placeholder="Notes"/>
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
                            <button type="submit"  className={style.next}>
                                Submit
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
})(WizardFormThirdPage);
