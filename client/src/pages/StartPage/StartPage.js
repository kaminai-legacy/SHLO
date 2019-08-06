import React from 'react';
import style from './StartPage.module.scss';
import Header from '../../components/commonToAll/Header/Header';
import HeaderBottom from '../../components/commonToAll/HeaderBottom/HeaderBottom';
import Banner from '../../components/StartPageComponents/Banner/Banner';
import Carousel from '../../components/StartPageComponents/Carousel/carousel';


function StartPage() {

    return (
        <div className={style.body}>
            <Header/>
            <HeaderBottom/>
            <Banner/>
            <Carousel/>
        </div>
    );
}

export default StartPage;

