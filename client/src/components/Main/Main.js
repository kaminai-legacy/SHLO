import React from 'react';
import style from './Main.module.scss';

import ContainerHeader from './ContainerHeader/ContainerHeader';
import ContainerBody from './ContainerBody/ContainerBody';

function Main() {
   /* submit = values => {
        window.alert(JSON.stringify(values));
    };*/
    return (
        <div className={style.main}>
            <div className={style.mainContainer}>
                <div className={style.mainContentContainer}>
                    <ContainerHeader/>
                    <ContainerBody/>
                </div>
            </div>
        </div>
    );
}

export default Main;
