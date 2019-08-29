import React, { useState} from 'react';
import FromContent from '../../../constants/ContestsFormContet';
import FormPage from './formPage';
import CreditCard from './CreditCard/CreditCard';
import 'react-toastify/dist/ReactToastify.css';
import {SubmissionError} from "redux-form";
import Pages from '../../../constants/ContestsFormContet';
import {contestProgressing, selectedContestType,sendContest} from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import {startValueContestProgressing} from "../../../constants/consts";
const  _ = require('lodash');

function contestForm(props) {
    const [form, setForm] = useState({contestTypes:props.types[0],id:0});
    const funcSubmit = (pageForm) =>{return (values) => {
        const errors = {};//FIRST_PAGE
        if (values['uploadFile']||(!_.isEmpty(values['uploadFile']))){
            console.log('uploadFile',values);
            const files=values['uploadFile'];
            let size=0;
            for(let key in files){
                if(files.hasOwnProperty(key)){
                    size+=files[key]["size"];
                }
            }
            if ((size/1048576)>100){
                console.log("too Big");
                errors['uploadFile']='The current files size is more than 100mb, please use smaller files.';
                console.log(errors);
            }
        }
        Pages[pageForm].required.map((key)=>{
            if (!values[key]||_.isEmpty(values[key])){
                errors[key]='Please fill this field';
            }
        });

        if(_.isEmpty(errors)){
            window.scrollTo(0, 0);
            if (props.types.length-1>form.id){
                props.sendContest({...values,typeOfContest:pageForm});
                console.log(3+form.id,props.types[3+form.id]);
                props.contestProgressing(3+form.id,props.types[form.id+1]);
                    return setForm({contestTypes:props.types[form.id+1],id:form.id+1});
            }else{
                props.sendContest({...values,typeOfContest:pageForm});
                console.log("на submit",{...values,typeOfContest:pageForm});
                console.log(3+form.id,props.types[3+form.id]);
                props.contestProgressing(3+form.id,null);
                return setForm({contestTypes:"CHECKOUT",id:form.id+1});
            }
        }else
       { throw new SubmissionError({...errors
        });}
    };};

    const renderForm=(currentFormPage, formName)=>{
        return<FormPage formContent={currentFormPage} formName={formName} onSubmit={funcSubmit(formName)}
                        initialValues={props.state.contestReducers.tempContests[props.state.contestReducers.currentContestForm]}
                        form={formName}
                             previousPage={(values) => {
                                 console.log(values);
                                 if (form.id===0){
                                     props.selectedContestType([]);
                                     console.log(1,null);
                                     props.contestProgressing(1,null);
                                 }else{
                                     console.log(form.id);
                                     console.log(form.id+1,props.types[form.id-1]);
                                     props.contestProgressing(form.id+1,props.types[form.id-1]);
                                     return setForm({contestTypes:props.types[form.id-1],id:form.id-1});
                                 }
                             }}
                                 textSubmit={(props.types.length-1===form.id)?"Submit":"Next"}
        />};

    return (
     <div >
         {form.contestTypes === 'LOGO' &&  renderForm(FromContent.LOGO,'LOGO')}
         {form.contestTypes === 'NAME' && renderForm(FromContent.NAME,'NAME')}
         {form.contestTypes === 'TAGLINE_OR_SLOGAN' && renderForm(FromContent.TAGLINE_OR_SLOGAN,'TAGLINE_OR_SLOGAN')}
         {(form.contestTypes === 'CHECKOUT') && <CreditCard/>}
     </div>


    );
}
const mapStateToProps = (state) => {
    return {
        state,
        types:state.contestReducers.selectedContestTypes
    };
};
const mapDispatchToProps = (dispatch) => ({
    selectedContestType: (contestTypes) => dispatch(selectedContestType(contestTypes)),
    contestProgressing: (value,value2) => dispatch(contestProgressing(value,value2)),
    sendContest: (value) => dispatch(sendContest(value)),

});
export default connect(mapStateToProps, mapDispatchToProps)(contestForm);