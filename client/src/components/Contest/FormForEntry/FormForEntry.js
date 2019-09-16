import React from 'react';
import {Field, reduxForm, formValueSelector,getFormValues,} from 'redux-form';
import 'react-widgets/dist/css/react-widgets.css';

import style from './FormForEntry.module.scss';
import connect from "react-redux/es/connect/connect";
import renderField from "../../CreatContestComponents/threeStepContestForm/renderField";

const {FIELDS} = require('../../../constants/FieldsForEntry');


let formForEntry = props => {
    const {previousPage,textSubmit,submitting,handleSubmit} = props;
    let field;
    switch (props.type){
        case"NAME":{break;}
        case"LOGO":{break;}
        case"TAGLINE_OR_SLOGAN":{break;}
    }
    return (
        <form onSubmit={handleSubmit(props.onSubmit)} className={style.forForm}>

                 {<Field {...FIELDS[props.type]} component={renderField[FIELDS[props.type].component]}/>}
            <div className={style.forSubmitContainer}><button className={style.forSubmit}
                    type="submit" disabled={submitting}>SUBMIT
            </button></div>
        </form>
    );
};

formForEntry = reduxForm({
    form:"Entry", //                 <------ same form name
    destroyOnUnmount: true, //        <------ preserve form data
    forceUnregisterOnUnmount: false,
    enableReinitialize: true,
})(formForEntry);
export default (formForEntry);
