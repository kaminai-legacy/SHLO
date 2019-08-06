import React from 'react';
import style from './Processing.module.scss';

function Processing(props) {
    const array = [];
    for (let i = 1; i <= 6; i++) {
        if (i === props.number) {
            if (i === 6) {
                array.push(
                    <React.Fragment key={props.text+i}>
                        <div className={style.circleDone}>
                            <div className={style.label}/>
                            <div className={style.title}>
                                {props.text}
                            </div>
                        </div>
                    </React.Fragment>
                )
            } else {
                array.push(
                    <React.Fragment key={props.text+i}>
                        <div className={style.circleDone}>
                            <div className={style.label}/>
                            <div className={style.title}>
                                {props.text}
                            </div>
                        </div>
                        <div className={style.tube}/>
                    </React.Fragment>
                )
            }
        } else if (i === 6) {
            array.push(
                <React.Fragment key={props.text+i}>
                    <div className={style.circle}/>
                </React.Fragment>
            )
        } else if (i < props.number) {
            array.push(
                <React.Fragment key={props.text+i}>
                    <div className={style.circleComplete}>
                        <div className={style.label}><i className="fa fa-check"/></div>
                    </div>
                    <div className={style.tube}/>
                </React.Fragment>
            )
        } else if (i > props.number) {
            array.push(
                <React.Fragment key={props.text+i}>
                    <div className={style.circle}/>
                    <div className={style.tube}/>
                </React.Fragment>
            )
        }
    }

    return (
        <div className={style.progressMain} key={props.text}>
            <div className={style.content}>
                <div className={style.tubeFirst}/>
                {array}
            </div>
        </div>
    );
}

export default Processing;
