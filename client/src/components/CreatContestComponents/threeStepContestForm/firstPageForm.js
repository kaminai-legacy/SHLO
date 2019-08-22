import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import 'react-widgets/dist/css/react-widgets.css';
import validate from '../../../validations/asyncValidateContestForm';
import {FIRST_PAGE} from '../../../constants/ContestsFormContet';
import renderField from './renderField';
import style from "./threeStepContestForm.module.scss";

let WizardFormFirstPage = props => {
    const {handleSubmit,nextPage,fields,notify} = props;
    const validation = async props => {
        try{
            const res = await validate(props);
            if(res===null){
                console.log(fields);
                nextPage()}
        }
        catch (e) {
            notify(e[Object.keys(e)[0]]);
            console.log(e);
        }
    };
    return (
        <form>
            <div className={style.preBusinessStepForm}>
                <div className={style.businessStepForm}>

                    {FIRST_PAGE.fields.map((field,id)=>{
                        return  <Field key={id} {...field} component={renderField[field.component]}/>
                    })}
                    {/*} <Field name="titleOfContest" type="text" component={renderField.renderField}
                           placeholder="e.g. Need a name for Social Networking website" label="Title of your contest"/>
                    {/*<Field name="whatDoesCompanyOrBusinessDo" type="text" component={renderField.renderField}
                           placeholder="e.g. Marketing Platform for Small Businesses" label="What does your company or business do?"/>
                    <Field name="nameOfCompanyBusiness" type="text" component={renderField.renderField}
                           placeholder="e.g. Marketing Platform for Small Businesses" label="Name of the company / business?"/>
                    <Field name="websiteUrl" type="text" component={renderField.renderField}
                           placeholder="e.g. http://www.google.com/" label="Your website url (if you have one)?"/>
                    <Field name="TypeOfIndustry" type="text" component={renderField.renderFieldSelect} options={options}
                           placeholder="Select Your Industry" label="Type of Industry"/>
                    <Field name="targetCustomers" type="text" component={renderField.renderField}
                           placeholder="i.e. designers, developers" label="Who are your target customers?"/>*/}
                </div>
            </div>
                <div className={style.preButtonOnForm}>
                    <div className={style.ButtonOnForm}>

                        <div className={style.text}>
                            You are almost finished. Select a pricing package in the next step
                        </div>
                        <div className={style.buttons}>
                            <button type="button"  className={style.prev} onClick={()=>console.log("back")}>
                                Back
                            </button>
                            <button type="button"  className={style.next} onClick={()=>validation({titleOfContest:fields.titleOfContest})}>
                                Next
                            </button>
                        </div>

                    </div>
                </div>

        </form>
    );
};
//nextPage

WizardFormFirstPage = reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    /*asyncValidate,
    asyncBlurFields: ['titleOfContest'],*/
})(WizardFormFirstPage);

const selector = formValueSelector('wizard');

WizardFormFirstPage = connect(state => {
    // can select values individually
    const fields = selector(state, 'titleOfContest','whatDoesCompanyOrBusinessDo');
    // or together as a group
    //const { firstName, lastName } = selector(state, 'firstName', 'lastName');
    return {
        fields
    }
})(WizardFormFirstPage);


export default WizardFormFirstPage;



{/*<label>Favorite Color</label>
            <Field
                name="favoriteColor"
                component={renderField.renderDropdownList}
                data={colors}
                valueField="value"
                textField="color"/>
            <label>Hobbies</label>
            <Field
                name="hobbies"
                component={renderField.renderMultiselect}
                data={['Guitar', 'Cycling', 'Hiking']}/>
*/}