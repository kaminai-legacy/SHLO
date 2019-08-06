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
        <Link to={props.link} key={props.name}>
            <div className={style.cardCategories} style={{backgroundColor: props.styles}}>
                <div className={style.flexImg}>
                    {arrayStandard}
                    {arrayHover}
                </div>
                <h5>{props.name}</h5>
                <hr/>
                <p>{props.text}</p>
            </div>
        </Link>
    );
}

export default CardCategories;
