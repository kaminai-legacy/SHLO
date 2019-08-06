import React from 'react';
import style from './Form.module.scss';
import {Field, reduxForm} from 'redux-form';
import connect from 'react-redux/es/connect/connect';
import validate from '../../../../validations/formValidate';

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {asyncValidating, touched, error},
                     }) => (
    <div>
        <div className={style.Field}>
            <input {...input} type={type} placeholder={label}
                   style={{borderColor: (error && touched) ? "red" : "white"}}/>
            {touched && error && <div className={style.errorContainer}>{error}</div>}
        </div>
    </div>
);

function Form(props) {
    const {handleSubmit, submitting} = props;
    return (

        <form onSubmit={handleSubmit(props.submit)}>

            <div className={style.Row}>
                <Field className={style.Field}
                       name="firstName"
                       component={renderField}
                       type="text"
                       label="First name"
                />

                <Field className={style.Field}
                       name="lastName"
                       component={renderField}
                       type="text"
                       label="Last name"
                />
            </div>
            <div className={style.Row}>
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
            </div>
            <div className={style.Row}>
                <div className={style.insideRow}>
                    <span className={style.miniElem}><Field name="customerStatus" component="input" type="radio"
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
                    <span className={style.miniElem}><Field name="customerStatus" component="input" type="radio"
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
    asyncChangeFields: ['email', 'password'],
})(Form);

const mapStateToProps = (state) => {
    return {
        state,
        fromStore: state.userReducers.data,
    };
};


export default connect(mapStateToProps)(Form);


