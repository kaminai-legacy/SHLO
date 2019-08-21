import React from 'react';
import style from './ContainerBody.module.scss';
import Form from './Form/Form';
import {userSignUp} from '../../../../actions/actionCreator';
import connect from 'react-redux/es/connect/connect';

//const promises = () => new Promise(resolve => resolve());

function ContainerBody(props) {

    const submit = (values) => {
                console.log("register ", values);
                const dataToSend = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    displayName: values.displayName,
                    role: values.role,
                    email: values.email,
                    password: values.password,
                };
                props.userSignUp(dataToSend);
    };
    return (
        <div className={style.main}>
            <div className={style.title}><h2>CREATE AN ACCOUNT</h2></div>
            <div className={style.subTitle}><h4>We always keep your name and email address private.</h4></div>
            <div className={style.mainForm}>
                <Form onSubmit={submit}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state,
        fromStore: state.userReducers.data,
    };
};
const mapDispatchToProps = (dispatch) => ({
    userSignUp: (dataToSend) => dispatch(userSignUp(dataToSend)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContainerBody);

