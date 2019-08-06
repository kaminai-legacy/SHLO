import React, {useState, useEffect} from 'react';
import style from './Banner.module.scss';
import {Link} from 'react-router-dom';
import {LOADING_ITEMS} from '../../../constants/consts';

let number = 0;

function Banner() {
    const [text, setText] = useState(null);
    useEffect(() => {
        const timeout = setInterval(() => {
            if (number === (LOADING_ITEMS.length)) {
                number = 0;
                setText(LOADING_ITEMS[number]);
                number++;
            } else {
                setText(LOADING_ITEMS[number]);
                number++;
            }
        }, 3000);
        return () => clearInterval(timeout);
    });

    return (
        <div className={style.banner}>
            <div className={style.bannerContent}>
                <div className={style.loadingBar}>
                    <div>Find the Perfect Name for&nbsp;</div>
                    <div className={style.flexForLoading}>
                        <span className={style.loading}>{(text !== null) ? text : LOADING_ITEMS[8]}</span>
                    </div>
                </div>
                <p>Launch a naming contest to engage hundreds of naming experts as you’re guided through our
                    agency-level naming process.<br/>
                    Or, explore our hand-picked collection of premium names available for immediate purchase.</p>
                <div className={style.flexList}>
                    <div>
                        <Link to="/contest_creating/">
                            <div className={style.startContestButton}>
                                START A CONTEST
                            </div>
                        </Link>
                    </div>
                    <div className={style.textOr}>
                        Or
                    </div>
                    <div>
                        <Link to="/ss">
                            <div className={style.exploreButton}>
                                Explore Names For Sale
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Banner;
