import React from 'react';
import {Field, reduxForm, formValueSelector,getFormValues,} from 'redux-form';
import 'react-widgets/dist/css/react-widgets.css';
import style from './FilterForm.module.scss';
import FormBlock from './FormBlock';
import {FILTERS} from '../../constants/formFilterContent';
import connect from "react-redux/es/connect/connect";
import submit from './asyncValidate';
const promises = () => new Promise(resolve => resolve());


let filterForm = props => {
    const {previousPage,textSubmit,formContent,formValues} = props;
    console.log(submit)
    submit({ssss:"sawd"});
    return (
        <form>
            <div className={style.allFormBlocks}>
                {
                    FILTERS.map((item,id)=>
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
    asyncValidate:(values)=>{
        return promises().then(async () => {
            try {
                //asyncValidate(values);
                console.log(values)
            } catch (e) {
            }
        });
    },
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
