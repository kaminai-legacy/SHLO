import React from 'react';
import style from './Form.module.scss';
import {Field, Fields , reduxForm} from 'redux-form';
import connect from 'react-redux/es/connect/connect';
import validate from '../../../../../validations/formValidate';

// const renderField = ({
//                          input,
//                          label,
//                          type,
//                          meta: {asyncValidating, touched, error},
//                      }) => (
//     <div>
//         <div className={style.Field}>
//             <input {...input} type={type} placeholder={label}
//                    style={{borderColor: (error && touched) ? "red" : "white"}}/>
//             {touched && error && <div className={style.errorContainer}>{error}</div>}
//         </div>
//     </div>
// );

const renderFields = (fields) => {
    console.log(fields);
    return  <div className={style.displayColumn}>
        <div className={style.Row}>
            <div className={style.Field}>
            <input {...fields.firstName.input} type={fields.otherProps[0].type} placeholder={fields.otherProps[0].label} autocomplete="off"/>

        </div>
            <div className={style.Field}>
            <input {...fields.lastName.input} type={fields.otherProps[1].type} placeholder={fields.otherProps[1].label} autocomplete="off"/>

            </div>
        </div>
        { <div className={style.errorContainer}>{
            (fields.firstName.meta.touched && fields.firstName.meta.error && fields.firstName.meta.error)||
            fields.lastName.meta.touched && fields.lastName.meta.error && fields.lastName.meta.error
        }
        </div>}
    </div>
};



const renderField = ({  data,
                         meta: {asyncValidating, touched, error},
                     }) => {
   const {firstFiled,secondField} =data;
   console.log("error",error,data);
   return(
       <div className={style.displayColumn}>
       <div className={style.Row}>
        <div className={style.Field}>
            <input {...firstFiled.input} name={firstFiled.name} type={firstFiled.type} placeholder={firstFiled.label}
                   style={{borderColor: (error && touched) ? "red" : "white"}}/>
        </div>
        <div className={style.Field}>
            <input {...secondField.input} name={secondField.name} type={secondField.type} placeholder={secondField.label}
                   style={{borderColor: (error && touched) ? "red" : "white"}}/>
        </div>
    </div>
           { <div className={style.errorContainer}>{error}</div>}
           </div>
)};

const firstPairField={firstFiled:{name:"firstName",type:"text",label:"First name"},secondField:{name:"lastName",type:"text",label:"Last name"}};
console.log(firstPairField);
/*
{
    firstName: { input: {name:"firstName",type:"text",label:"First name"}, meta: { touched, error} },
    lastName: { input: {name:"lastName",type:"text",label:"Last name"}, meta: { touched, error} }
    email: { input: { ... }, meta: { ... } },
    address: {
        street: { input: { ... }, meta: { ... } },
        city: { input: { ... }, meta: { ... } },
        postalCode: { input: { ... }, meta: { ... } }
    }
*/

function Form(props) {
    const {handleSubmit, submitting} = props;
    return (

        <form onSubmit={handleSubmit(props.submit)}>

            {/*<div className={style.Row}>*/}
            {/*    <Field className={style.Field}*/}
            {/*           name="firstName"*/}
            {/*           component={renderField}*/}
            {/*           type="text"*/}
            {/*           label="First name"*/}
            {/*    />*/}

            {/*} {{firstName:{input:{name:"firstName",type:"text",label:"First name"},meta: {  }},
                lastName:{input:{name:"firstName",type:"text",label:"First name"},meta: {  }}}}
*/}

            {/*    <Field className={style.Field}*/}
            {/*           name="lastName"*/}
            {/*           component={renderField}*/}
            {/*           type="text"*/}
            {/*           label="Last name"*/}
            {/*    />*/}
            {/*</div>*/}
            <Fields names={['firstName','lastName']} otherProps={[{type:"text",label:"First name"},{type:"text",label:"Last name"}]} component={renderFields}/>

            {/*<div className={style.Row}>
                <Field className={style.Field}
                        data={firstPairField}
                       component={renderField}
                />
            </div>*/}



            {/*} <div className={style.Row}>
                <Field className={style.Field}
                       name="displayName"
                       component={renderField}
                       type="text"
                       label="Display Name"
                />

                <Field className={style.Field}
                       name="email"
                       component={renderField}
                       type="text"
                       label="Email Address"
                />
            </div>
            <div className={style.Row}>
                <Field className={style.Field}
                       name="password"
                       component={renderField}
                       type="password"
                       label="Password"
                />

                <Field className={style.Field}
                       name="PasswordConfirmation"
                       component={renderField}
                       type="password"
                       label="Password Confirmation"
                />
            </div>*/}
            <div className={style.Row}>
                <div className={style.insideRow}>
                    <span className={style.miniElem}><Field name="role" component="input" type="radio"
                                                            id={'check1'} value={"Buyer"}/> </span>
                    <span>
           <div className={style.textBefore}>
             Join As a Buyer
           </div><div className={style.textAfter}>
             I am looking for a Name, Logo or Tagline for my business, brand or product.
           </div>
           </span>
                </div>
            </div>
            <div className={style.Row}>
                <div className={style.insideRow}>
                    <span className={style.miniElem}><Field name="role" component="input" type="radio"
                                                            id={'check2'} value={"Creative"}/> </span>

                    <span><div className={style.textBefore}>
             Join As a Creative
           </div><div className={style.textAfter}>
             I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.
           </div> </span>
                </div>
            </div>
            <div className={style.Row}>
           <span className={style.RememberMe}>
             <div className={style.flexBox}>
               <span style={{width: '24px', height: '13px'}}>
                 <Field name="RememberMe" component="input" type="checkbox" id={'check'}/>
                 </span>
                <span
                    className={style.checkbox}> Allow Squadhelp to send marketing/promotional offers from time to time</span>
             </div>
           </span>

            </div>
            <div className={style.Row}>
                <button className={style.create}
                        type="submit" disabled={submitting}>Create account
                </button>
            </div>
            <div className={style.Row}>
                <div className={style.underCreate}>
                    <p>
                        By clicking this button, you agree to our <a className={style.terms}
                                                                     href="https://www.squadhelp.com/Terms&amp;Conditions">Terms
                        of Service</a>.</p>
                </div>
            </div>
            <div className={style.Row} style={{marginTop: '10px'}}>
                <button className={style.FieldSocial} type="submit"><span className="fab fa-facebook-f"/> Sign in with
                    Facebook
                </button>
            </div>

            <div className={style.Row} style={{marginTop: '10px'}}>
                <button className={style.FieldSocial} style={{background: '#dd4b39', borderColor: '#dd4b39'}}
                        type="submit">
                    <span className="fab fa-google"/> Sign in with Google
                </button>
            </div>
        </form>
    );
}

Form = reduxForm({
    form: 'register',
    validate,
})(Form);

const mapStateToProps = (state) => {
    return {
        state,
        fromStore: state.userReducers.data,
    };
};


export default connect(mapStateToProps)(Form);


