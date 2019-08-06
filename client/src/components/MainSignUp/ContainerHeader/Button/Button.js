import React from 'react';
import style from './Button.module.scss';
import {Link} from 'react-router-dom';

function Main() {

    return (
        <div className={style.main}>
            <Link className={style.anchor} to="/login">
                <div className={style.main}/>
                Login</Link>
        </div>
    );
}

export default Main;
