import React from 'react';
import style from './CreateContest.module.scss';
import Header from '../../components/commonToAll/Header/Header';
import HeaderBottom from '../../components/commonToAll/HeaderBottom/HeaderBottom';
import HeaderCreateContest from '../../components/CreatContestComponents/Header/Header';
import ContestCategories from '../../components/CreatContestComponents/contestCategories/contestCategories';
import PackagesAndOther from '../../components/CreatContestComponents/PackagesAndOther/PackagesAndOther';

function CreateContest() {
    return (
        <div className={style.body}>
            <Header/>
            <HeaderBottom/>
            <HeaderCreateContest/>
            <ContestCategories/>
            <PackagesAndOther/>
        </div>
    );
}

export default CreateContest;

