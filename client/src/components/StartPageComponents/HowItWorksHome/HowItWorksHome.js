import React, {useState, useEffect} from 'react';
import style from './HowItWorksHome.module.scss';
import {BLOCKS} from './../../../constants/WhySquadhelp';
import Title from "../../commonToAll/Title/Title";


function HowItWorksHome() {

    return (<div className={style.mainHowItWorksHome}>
            <Title title={"How Do Name Contests Work?"}
                   text={""}
                   color={"black"} borderColor={"transparent"}
            />
        </div>
    )

}


export default HowItWorksHome;
