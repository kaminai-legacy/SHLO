import React from 'react';
import style from './CardCategories.module.scss';
import {Link} from 'react-router-dom';

function CardCategories(props) {
    const arrayStandard = (props.img).map((item) => {
        return <div key={item} className={style.imageStandard} style={{backgroundImage: item}}/>
    });
    const arrayHover = (props.imgHover).map((item) => {
        return <div key={item} className={style.imageHover} style={{backgroundImage: item}}/>
    });
    return (

            <div className={style.contestButton} onClick={()=>{props.click(props.contestType);props.alsoClick(props.currentStage)}}>
            <div className={style.preCardCategories} >
            <div className={style.cardCategories} style={{backgroundColor: props.styles}}>
                <div className={style.flexImg}>
                    {arrayStandard}
                    {arrayHover}
                </div>
                <h5>{props.name}</h5>
                <hr/>
                <p>{props.text}</p>
            </div>
            </div>
            </div>

    );
}
/*

  <Link to={props.link} key={props.name}>
   </Link>
 */
export default CardCategories;
