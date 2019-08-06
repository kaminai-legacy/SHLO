import React from 'react';
import style from './StartPageBottomHeaderList.module.scss';
import { Link } from 'react-router-dom';
function BottomHeaderList(props) {
  let number = 0;
  const array = props.list.map(item =>{
    number++;
    const text=item.text;
    const link=item.link;
    return(item.text==="Line")?<li key={text+(number)} className={style.line}/>:<Link key={text} to={link}><li >{text}</li></Link>;
  });
  return(
    <React.Fragment key={props.list[0].text}>
      {array}
    </React.Fragment>
  );
}

export default BottomHeaderList;
