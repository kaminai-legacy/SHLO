import React from 'react';
import style from './StatusBlock.module.scss';
import {Link} from "react-router-dom";

function statusBlock(props) {
    return (
            <div className={style.statusBlock}>
                {console.log(props.imgIcon)}
                <div className={style.statusBlockImg}  style={{backgroundColor:props.imgColor}}>

                </div>
                <div className={style.statusBlockColumn}>

                    <div className={style.statusBlockCount}>
                        {props.count}
                    </div>
                    <div className={style.statusBlockText}>
                        {props.text}
                    </div>
                    <div className={style.statusBlockLink}>
                        <Link to={props.link} className={style.anchorPhone}>{props.linkText}</Link>

                    </div>

                </div>
            </div>);
}
export default statusBlock;