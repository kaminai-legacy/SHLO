import React from 'react';
import style from './HeaderBottom.module.scss';
import BottomHeaderList from './StartPageBottomHeaderList/StartPageBottomHeaderList';
import {NameIdeals, Contests, OurWork, NamesForSale, Blog} from '../../../constants/StartPageBottomHeaderLists';
import {Link} from 'react-router-dom';

function HeaderBottom() {
    return (
        <div className={style.mainHeaderBottom}>
            <div className={style.mainHeaderBottomContainer}>
                <div className={style.mainHeaderBottomRow}>
                    <div className={style.mainHeaderBottomLogo}>
                        <Link to="/">
                            <div className={style.mainLogo}/>
                        </Link>
                    </div>
                    <ul className={style.mainHeaderBottomLists}>

                        <li className={style.mainHeaderBottomFlexLists}>
                            <div className={style.SublistTitle}> NAME IDEAS <i className="fa fa-angle-down"/></div>
                            <ul className={style.mainHeaderBottomSubLists}>
                                <BottomHeaderList key={"Name"} list={NameIdeals}/>
                            </ul>
                        </li>


                        <li className={style.mainHeaderBottomFlexLists}>
                            <div className={style.SublistTitle}> CONTESTS <i className="fa fa-angle-down"/></div>
                            <ul className={style.mainHeaderBottomSubLists}>
                                <BottomHeaderList key={"Contests"} list={Contests}/>
                            </ul>
                        </li>


                        <li className={style.mainHeaderBottomFlexLists}>
                            <div className={style.SublistTitle}> OUR WORK <i className="fa fa-angle-down"/></div>
                            <ul className={style.mainHeaderBottomSubLists}>
                                <BottomHeaderList key={"Work"} list={OurWork}/>
                            </ul>
                        </li>


                        <li className={style.mainHeaderBottomFlexLists}>
                            <div className={style.SublistTitle}> NAMES FOR SALE <i className="fa fa-angle-down"/></div>
                            <ul className={style.mainHeaderBottomSubLists}>
                                <BottomHeaderList key={"Names"} list={NamesForSale}/>
                            </ul>
                        </li>


                        <li className={style.mainHeaderBottomFlexListsBlog}>
                            <div className={style.SublistTitle}> BLOG <i className="fa fa-angle-down"/></div>
                            <ul className={style.mainHeaderBottomSubListsBlog}>
                                <BottomHeaderList key={"Blog"} list={Blog}/>
                            </ul>
                        </li>

                    </ul>
                    <Link to="/contest_creating">
                        <div className={style.mainHeaderBottomButton}>
                            START CONTEST
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;
