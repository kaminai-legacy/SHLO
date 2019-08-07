import React from 'react';
import style from './CreateContest.module.scss';
import Header from '../../components/commonToAll/Header/Header';
import HeaderBottom from '../../components/commonToAll/HeaderBottom/HeaderBottom';
import HeaderCreateContest from '../../components/CreatContestComponents/Header/Header';
import ContestCategories from '../../components/CreatContestComponents/contestCategories/contestCategories';
import PackagesAndOther from '../../components/CreatContestComponents/PackagesAndOther/PackagesAndOther';
import  Form from '../../components/CreatContestComponents/threeStepContestForm/threeStepContestForm'

const STAGE=2;

function CreateContest() {
    const content=(STAGE===1)?<> <ContestCategories/>
        <PackagesAndOther/></>:  <Form onSubmit={(values)=>console.log(values)} />
    return (
        <div className={style.body}>
            <Header/>
            <HeaderBottom/>
            <HeaderCreateContest/>
            {content}
        </div>
    );
}

export default CreateContest;

