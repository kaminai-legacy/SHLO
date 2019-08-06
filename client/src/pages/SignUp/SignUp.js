import React from 'react';
import style from './SignUp.module.scss';
import MainSignUp from '../../components/MainSignUp/Main';
import {USER_KEY} from '../../constants/consts';
import {Redirect} from 'react-router';

function SignUp() {
    const user = localStorage.getItem(USER_KEY);
    if (user) return <Redirect to="/"/>;

    return (
        <div className={style.body}>
            <MainSignUp/>
        </div>
    );
}

export default SignUp;
