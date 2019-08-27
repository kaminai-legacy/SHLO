import React from 'react';
import style from './Header.module.scss';
import Processing from '../Processing/Processing';
import connect from "react-redux/es/connect/connect";
import {CONTEST_HEADER} from '../../../constants/consts';
//import {TEXT_PROGRESSING} from '../../../constants/consts';

function Header(props) {
    let header;
    console.log("START",props.stage,1+props.amountOfStages,props.stage<1+props.amountOfStages)
    if(props.stage===1){ header='START';console.log("START")}
    else if(props.stage<props.amountOfStages){ header=props.selectedContestTypes[props.stage-2];console.log("middle")}
    else { header='CHECKOUT';console.log("CHECKOUT")}
    //const header=(props.stage!==1)?props.selectedContestTypes[props.stage-2]:'START';
    return (
        <div className={style.startContestSteps}>
            {console.log(header)}
            <div className={style.insideStartContestSteps}>
                <div className={style.contestStepsRow}>
                    <div className={style.contestStepsTip}>
                        <div className={style.title}>
                            {CONTEST_HEADER[header].label}
                        </div>
                        <div className={style.content}>
                            {CONTEST_HEADER[header].text}
                        </div>
                    </div>
                    <Processing text={header} stage={(props.stage)?props.stage:1} number={(props.selectedContestTypes.length)?props.selectedContestTypes.length+2:3}/>
                </div>
            </div>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        state,
        stage:state.contestReducers.contestStage,
        selectedContestTypes:state.contestReducers.selectedContestTypes,
        amountOfStages:state.contestReducers.amountOfStages
    };
};
export default connect(mapStateToProps)(Header);
//export default Header;
