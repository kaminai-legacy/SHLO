import React from 'react';
import style from './notFound.module.scss';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';


function notFound() {
    return (
        <div className={style.body}>
            <Redirect to="/notFound"/>
            <div className={style.notFound}/>
            <div>
                <Link className={style.mainAnchor} to="/">
                    <div className={style.mainLogo}/>
                </Link>
            </div>
        </div>
    );
}

export default notFound;

