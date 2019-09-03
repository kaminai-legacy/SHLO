import React from 'react';
import {Field, reduxForm, formValueSelector,getFormValues,} from 'redux-form';
import 'react-widgets/dist/css/react-widgets.css';
import renderField from './renderField';
import style from "./threeStepContestForm.module.scss";
import connect from "react-redux/es/connect/connect";

let formName = 'form';




let formPage = props => {
    //console.log(props.temp);
    //console.log(props.typeOfIndustry);
    formName=props['formName'];
   // console.log(formName);
    const {handleSubmit,previousPage,textSubmit,formContent,formValues} = props;
    //console.log(props.formValues);
    //props.load('sad');
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={style.preBusinessStepForm}>
                <div className={style.businessStepForm}>
                    {formContent.fields.map((field,id)=>{
                        return  <Field key={id} {...field} component={renderField[field.component]}/>
                    })}
                </div>
            </div>
                <div className={style.preButtonOnForm}>
                    <div className={style.ButtonOnForm}>

                        <div className={style.text}>
                            You are almost finished. Select a pricing package in the next step
                        </div>
                        <div className={style.buttons}>
                            <button type="button"  className={style.prev} onClick={()=>previousPage(formValues)}>
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

formPage = reduxForm({
     //                 <------ same form name
    destroyOnUnmount: true, //        <------ preserve form data
    forceUnregisterOnUnmount: false,
    enableReinitialize: true,// <------ unregister fields on unmount
})(formPage);

 // <-- same as form name

const mapStateToProps = (state) => {
    //const selector = formValueSelector(state.contestReducers.currentContestForm);
//console.log(state,state.contestReducers.currentContestForm);
    //const typeOfIndustry = selector(state, 'typeOfIndustry');
    return {
        state,
        types:state.contestReducers.selectedContestTypes,
        formNames:state.contestReducers.currentContestForm,
        temp:state.contestReducers.tempContests,
        formValues: getFormValues(state.contestReducers.currentContestForm)(state),
       // typeOfIndustry
    };
};

export default connect(mapStateToProps)(formPage);
