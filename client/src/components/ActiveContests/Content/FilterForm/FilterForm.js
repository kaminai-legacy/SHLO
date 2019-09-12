import React from 'react';
import {Field, reduxForm, formValueSelector,getFormValues,} from 'redux-form';
import 'react-widgets/dist/css/react-widgets.css';
import style from './FilterForm.module.scss';
import FormBlock from './FormBlock';
import Content from '../../../../constants/formFilterContent';
import connect from "react-redux/es/connect/connect";

const promises = () => new Promise(resolve => resolve());


let filterForm = props => {
    const {previousPage,textSubmit,formContent,formValues} = props;
    return (
        <form>
            <div className={style.allFormBlocks}>
                {
                    Content.FILTERS.map((item,id)=>
                {return  <FormBlock key={id} title={item.title} fields={item.fields}/>})
               }
            </div>
        </form>
    );
};

filterForm = reduxForm({
     //                 <------ same form name
    destroyOnUnmount: true, //        <------ preserve form data
    forceUnregisterOnUnmount: false,
    enableReinitialize: true,
    // <------ unregister fields on unmount
})(filterForm);

 // <-- same as form name

const mapStateToProps = (state) => {
    return {
        state,
        formValues: getFormValues(filterForm)(state),
    };
};

export default connect(mapStateToProps)(filterForm);
