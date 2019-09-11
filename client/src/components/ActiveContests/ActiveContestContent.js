import React,{useState} from 'react';
import style from './ActiveContestContent.module.scss';
import FilerForm from "./FilterForm";
import Content from '../../constants/formFilterContent';
import ResultFilterContests from './ResultFilterContests';
import {changeFilterTags} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
//import Filter from "./asyncValidate";
const _=require('lodash');
const promises = () => new Promise(resolve => resolve());

function ActiveContestContent(props) {
    const [formValues, setFormValues] = useState({});
    const reFilter = (values)=>{
        return promises().then(async () => {
            try {
                const valuesClone=_.cloneDeep(values);
                if(valuesClone.hasOwnProperty('id')){
                    console.log(valuesClone);
                    if((valuesClone['id'].indexOf(' ')!==-1)||(valuesClone['id']==='')){
                        delete valuesClone['id']
                    }
                }
                // console.log(valuesClone,formValues);
if(!_.isEqual(formValues, valuesClone)){
    setFormValues(valuesClone);
    props.changeFilterTags(valuesClone);
}
            } catch (e) {
                console.log(e)
            }
        });
    };

    const names=[];
    Content.FILTERS.map((item)=>
    {item.fields.map((field)=>
    {names.push(field.name)});
    });
    //console.log(names);
    return (
        <div className={style.activeContestMain}>
            {/*{console.log(props.filter.selectedTags)}*/}
            <div className={style.banner}>
                <div className={style.title}>
                    <h4>ACTIVE CONTESTS</h4>
                </div>
            </div>

            <div className={style.filterContest}>
                <div className={style.flexTwoColumn}>
                    <div className={style.formFilter}>
                        <FilerForm initialValues={null} form={'filterForm'}
                                   asyncChangeFields={names}
                                   asyncValidate={reFilter}
                        />
                    </div>
                    <div className={style.resultFilter}>
                        <ResultFilterContests/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        filter: state.ActiveContestFilterReducer
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeFilterTags: (contestTypes) => dispatch(changeFilterTags(contestTypes)),

});

export default connect(mapStateToProps,mapDispatchToProps)(ActiveContestContent);
