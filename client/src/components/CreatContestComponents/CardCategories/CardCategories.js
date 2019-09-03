import React from 'react';
import style from './CardCategories.module.scss';
import {Link} from 'react-router-dom';
const  _ = require('lodash');
function CardCategories(props) {
    const {contestType}=props;
    const func = (props.click || props.alsoClick)?()=>{props.click(props.contestType);props.alsoClick(props.currentStage,(contestType)?contestType[0]:null
    );window.scrollTo(0, 0);console.log("PROPS",props.currentStage,(contestType)?contestType[0]:null)}:()=>{};
    const IMAGES= (props.img).map((item) => {
        return <div key={item} className={style.image} style={{backgroundImage: item}}/>
    });
    /*  const arrayHover = (props.imgHover).map((item) => {
          return <div key={item} className={style.imageHover} style={{backgroundImage: item}}/>
      });*/const mas = _.keys(contestType);
    //const [types]=contestType;
   // console.log(mas);
  //  console.log(  (props.currentStage)?contestType[0]:null);

//onClick={()=>{props.click(props.contestType);props.alsoClick(props.currentStage,null);window.scrollTo(0, 0);}}
    return (
        <Link to="/contest_creating/" >
        <div className={style.contestButton} onClick={func}>
            <div className={style.preCardCategories} >

                <div className={style.cardCategories} style={{backgroundColor: props.styles}}>
                    <div className={style.flexImg}>
                        {IMAGES}
                    </div>
                    <h5>{props.name}</h5>
                    <hr/>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
        </Link>
    );
}
/*

  <Link to={props.link} key={props.name}>
   </Link>
 */
export default CardCategories;
