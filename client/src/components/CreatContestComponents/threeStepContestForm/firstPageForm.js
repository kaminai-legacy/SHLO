import React from 'react';
import {Field, reduxForm} from 'redux-form';
import 'react-widgets/dist/css/react-widgets.css';
import renderField from './renderField';
import style from "./threeStepContestForm.module.scss";





let WizardFormFirstPage = props => {
    const {handleSubmit,previousPage,textSubmit,formContent} = props;

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={style.preBusinessStepForm}>
                <div className={style.businessStepForm}>
                    {formContent.fields.map((field,id)=>{
                        return  <Field key={id} {...field} component={renderField[field.component]}/>
                    })}
                    {/*-} <Field name="attachment" component={renderField.renderFileInput} type="file"/>*/}
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
                            <button  type="submit" className={style.next} >
                                {textSubmit}
                            </button>
                        </div>

                    </div>
                </div>

        </form>
    );
};

WizardFormFirstPage = reduxForm({
    form: 'contest', //                 <------ same form name
    destroyOnUnmount: true, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormFirstPage);

export default WizardFormFirstPage;