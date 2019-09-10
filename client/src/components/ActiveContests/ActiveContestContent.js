import React from 'react';
import style from './ActiveContestContent.module.scss';
import FilerForm from "./FilterForm";
import {FILTERS} from '../../constants/formFilterContent';


function ActiveContestContent(props) {
    const names=[];
    FILTERS.map((item)=>
    {item.fields.map((field)=>
    {names.push(field.name)});
    });
    //console.log(names);
    return (
        <div className={style.activeContestMain}>
            <div className={style.banner}>
                <div className={style.title}>
                    <h4>ACTIVE CONTESTS</h4>
                </div>
            </div>

            <div className={style.filterContest}>
                <div className={style.flexTwoColumn}>
                    <div className={style.formFilter}>
                        <FilerForm initialValues={null} form={'filterForm'}
                                   asyncChangeFields={names}/>
                    </div>
                    <div className={style.resultFilter}>
                        form
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiveContestContent;
