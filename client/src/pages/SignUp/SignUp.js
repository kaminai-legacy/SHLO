import React from 'react';
import style from './SignUp.module.scss';
import SignUp from '../../components/LoginAndSignUp/MainSignUp/SignUp';
import {USER_KEY} from '../../constants/consts';
import {Redirect} from 'react-router';

function SignUpPage() {
    const user = localStorage.getItem(USER_KEY);
    if (user) return <Redirect to="/"/>;

    return (
        <div className={style.body}>
            <SignUp/>
        </div>
    );
}

export default SignUpPage;
