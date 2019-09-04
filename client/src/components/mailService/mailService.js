import React from 'react';
import style from './Form.module.scss';
import {Field, reduxForm} from 'redux-form';
import connect from 'react-redux/es/connect/connect';

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {asyncValidating, touched, error},
                     }) => {
    //console.log(input);
    return <div>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={label} style={{borderColor: error ? "red" : "white"}}/>
            {touched && error && <div className={style.errorContainer}>{error}</div>}
        </div>
    </div>
};

function Form(props) {
    const {handleSubmit, submitting} = props;
    const baned = props.state.userReducers.banned ? 'block' : 'none';
    const login = props.state.userReducers.loginFailed ? 'block' : 'none';
    return (

        <form onSubmit={handleSubmit(props.submit)}>
            <div className={style.loginFailed} style={{display: login}}>Invalid Email or Password</div>
            <div className={style.loginFailed} style={{display: baned}}>You are banned</div>
            <div className={style.Row}>
                <Field className={style.Field}
                       name="email"
                       component={renderField}
                       type="text"
                       label="Email address"
                />
            </div>
            <div className={style.Row}>
                <Field className={style.Field}
                       name="password"
                       component={renderField}
                       type="password"
                       label="Password"
                />
            </div>
            <div className={style.Row}>
           <span className={style.RememberMe}>
             <div className={style.flexBox}>
               <span style={{width: '24px', height: '13px'}}>
                 <Field name="rememberMe" component="input" type="checkbox" value={true}/>
                 </span>
               <span><label>Remember&nbsp;</label></span><span><label>me</label></span>
             </div>
           </span>
                <span className={style.ForgotPassword}>
             Forgot Password
           </span>
            </div>
            <div className={style.Row}>
                <button className={style.Field}
                        style={{backgroundColor: '#28d2d0', borderColor: '#28d2d0', color: 'white', cursor: 'pointer'}}
                        type="submit" disabled={submitting}>LOGIN
                </button>
            </div>

            <div className={style.Row} style={{marginTop: '30px'}}>
                <button className={style.FieldSocial} type="submit"><span className="fab fa-facebook-f"
                                                                          aria-hidden="true"/> Sign in with Facebook
                </button>
            </div>

            <div className={style.Row}>
                <button className={style.FieldSocial} style={{background: '#dd4b39', borderColor: '#dd4b39'}}
                        type="submit">
                    <span className="fab fa-google"/> Sign in with Google
                </button>
            </div>
        </form>
    );
}

Form = reduxForm({
    form: 'login',
    destroyOnUnmount: true,

})(Form);

const mapStateToProps = (state) => {
    return {
        state,
        fromStore: state.userReducers.data,
    };
};


export default connect(mapStateToProps)(Form);

