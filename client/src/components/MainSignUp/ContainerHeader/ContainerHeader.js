import React from 'react';
import style from './ContainerHeader.module.scss';
import Logo from './Logo/Logo';
import Button from './Button/Button';

function Main() {
    return (
        <div className={style.main}>
            <Logo/>
            <Button/>
        </div>
    );
}

export default Main;
