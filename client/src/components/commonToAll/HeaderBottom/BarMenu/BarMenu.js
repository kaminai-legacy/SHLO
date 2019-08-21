import React, {useState} from 'react';
import style from './BarMenu.module.scss';
import ListElement from '../../../../constants/BarMenuLists';
import {LIST_NAMES} from '../../../../constants/consts';
import {Link} from 'react-router-dom';
import {logout} from "../../../../actions/actionCreator";
import connect from "react-redux/lib/connect/connect";

function BottomHeaderList(props) {
    let number = 0;
    const [viewStatus, setViewStatus] = useState({
        "Active Contests": false,
        "Marketplace": false,
        "Examples": false,
        "Winners": false,
        "help": false,
    });

    function onClickedBarMenu(name) {
        setViewStatus(
            {
                ...viewStatus,
                [name]: !viewStatus[name]
            }
        );
    }

    const RESULT = [];
    for (let key in ListElement) {

        let LIST = [];
        if (ListElement.hasOwnProperty(key)) {//console.log(viewStatus);
            const LIST_NAME = ListElement[key].name;
            // console.log(ListElement[key].link,ListElement[key]);
            const LIST_LINK = ListElement[key].link;
            if (ListElement[key].list) {
                const SUB_LIST = ListElement[key].list.map((item, id) => {
                    const link = item.link;
                    const name = item.name;
                    return <Link to={link}>
                        <li key={id}>{name}</li>
                    </Link>;
                });
                LIST.push(SUB_LIST)
            }
            RESULT.push(<li className={style.barMenuListItems}
                            style={{cursor: (ListElement[key].list) ? "pointer" : "normal"}}
                            key={LIST_NAME}>
                <ul className={style.barMenuSubList}>
                    <div onClick={() => onClickedBarMenu(LIST_NAME)}><Link to={LIST_LINK}>{LIST_NAME}</Link>
                        {(ListElement[key].list) ? <span> <i className="fa fa-angle-down"/></span> : <></>}
                    </div>
                    {(viewStatus[LIST_NAME]) && <div className={style.SubBlock}>{LIST}</div>}
                </ul>
            </li>)
        }


    }


    /*const SUB_LIST = ListElement[key].map((item,id) =>{
      const text=item.text;
      const link=item.link;
      return(item.text==="Line")?<span key={text+(id)} className={style.lineLi}/>:<Link key={text} to={link}><li >{text}</li></Link>;
    });*/

    /* if(LIST_NAMES[number]==="BLOG")
     {RESULT.push( <li key={number} className={style.mainHeaderBottomFlexListsBlog}>
       <div className={style.SublistTitle}> {LIST_NAMES[number]} <i className="fa fa-angle-down"/></div>
       <ul className={style.mainHeaderBottomSubListsBlog}>
         {SUB_LIST}
       </ul>
     </li>)}
     else
     {  RESULT.push(
         <li key={number} className={style.mainHeaderBottomFlexLists}>
           <div className={style.SublistTitle}> {LIST_NAMES[number]} <i className="fa fa-angle-down"/></div>
           <ul className={style.mainHeaderBottomSubLists}>
             {SUB_LIST}
           </ul>
         </li>);}


     number++
   }*/


    return (
        <ul className={style.mainHeaderBottomLists}
            style={{maxHeight: props.height, border: props.border, borderTop: props.borderTop}}>
            {RESULT}
        </ul>
    );
}

export default BottomHeaderList;

/*

 let number = 0;
  const RESULT=[];
  for (let key in ListElement) {
    const SUB_LIST = ListElement[key].map((item,id) =>{
      const text=item.text;
      const link=item.link;
      return(item.text==="Line")?<span key={text+(id)} className={style.lineLi}/>:<Link key={text} to={link}><li >{text}</li></Link>;
    });

    if(LIST_NAMES[number]==="BLOG")
    {RESULT.push( <li key={number} className={style.mainHeaderBottomFlexListsBlog}>
      <div className={style.SublistTitle}> {LIST_NAMES[number]} <i className="fa fa-angle-down"/></div>
      <ul className={style.mainHeaderBottomSubListsBlog}>
        {SUB_LIST}
      </ul>
    </li>)}
    else
      {  RESULT.push(
        <li key={number} className={style.mainHeaderBottomFlexLists}>
          <div className={style.SublistTitle}> {LIST_NAMES[number]} <i className="fa fa-angle-down"/></div>
          <ul className={style.mainHeaderBottomSubLists}>
            {SUB_LIST}
          </ul>
        </li>);}


    number++
  }

 */