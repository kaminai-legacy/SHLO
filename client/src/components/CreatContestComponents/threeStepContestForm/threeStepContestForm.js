import React, { useState} from 'react';
import style from './threeStepContestForm.module.scss';
import FromContent from '../../../constants/ContestsFormContet';
import FormFirstPage from './firstPageForm';
import CreditCard from './CreditCard/CreditCard';
import FormThirdPage from './thirdPageForm';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SubmissionError} from "redux-form";
import Pages from '../../../constants/ContestsFormContet';
import ListElement from "../../../constants/BarMenuLists";
import {contestProgressing, selectedContestType,sendContest} from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import Cards from 'react-credit-cards';
const promises = () => new Promise(resolve => resolve());
let firstPage;
const notify = (msg) => toast.error(msg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 6000,
});
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
function contestForm(props) {
    const [form, setForm] = useState({contestTypes:props.types[0],id:0});
    const funcSubmit = (pageForm) =>{return (values) => {
        const errors = {};//FIRST_PAGE
      //  console.log("submit values",values);
        Pages[pageForm].required.map((key)=>{
            const field=Pages[pageForm].required[key];
            //console.log("every field",!values[key],values[key]);
            if (!values[key]||isEmpty(values[key])){
           //     console.log([key],field);
                errors[key]='Please fill this field';
            }
        });
     //   console.log(errors);
        if(isEmpty(errors)){
            console.log("YES");
            console.log(props.types.length-1>form.id,props.types.length-1,form.id,"props.types.length-1<page.id");
            if (props.types.length-1>form.id){
                //const newPageId=form.id+1;
               // const newContestTypes=props.types[newPageId];
                //console.log(" submit",form.contestTypes,props.types,props.types[newPageId]);
               // {contestTypes:props.types[form.id+1],id:form.id+1}

                console.log(" submitssss",form);
              //  console.log(form.id);
                /*switch (form.contestTypes){
                    case 'LOGO':{return props.contestProgressing(2)}
                    case 'NAME':{return props.contestProgressing(3)}
                    case 'TAGLINE_OR_SLOGAN':{return props.contestProgressing(2)}
                }*/
                props.sendContest(values);
                props.contestProgressing(3+form.id);
                    return setForm({contestTypes:props.types[form.id+1],id:form.id+1});
            }else{
                props.sendContest(values);
                console.log("на submit",values);
                props.contestProgressing(3+form.id);
                return setForm({contestTypes:"CHECKOUT",id:form.id+1});

            }


        }else
       { throw new SubmissionError({...errors
        });}
    };};
    const {onSubmit} = props;

    const renderForm=(currentFormPage, formName)=>{

        //console.log(currentFormPage,"currentFormPage");
        return<FormFirstPage formContent={currentFormPage} formName={formName} onSubmit={funcSubmit(formName)}
                             previousPage={() => {
                                 console.log(form.id);
                                 if (form.id===0){
                                     props.selectedContestType([]);
                                     props.contestProgressing(1);
                                 }else{
                                     console.log(form.id);
                                     props.contestProgressing(form.id+1);
                                     return setForm({contestTypes:props.types[form.id-1],id:form.id-1});
                                 }
                             }}

                                 textSubmit={(props.types.length-1===form.id)?"Submit":"Next"}
        />};

    return (
     <div >
         {  console.log(" submit2",form)}
         {form.contestTypes === 'LOGO' && renderForm(FromContent.LOGO,'LOGO')}
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
    contestProgressing: (value) => dispatch(contestProgressing(value)),
    sendContest: (value) => dispatch(sendContest(value)),

});
export default connect(mapStateToProps, mapDispatchToProps)(contestForm);
//export default contestForm;
//onSubmit={funcSubmit('LOGO')}


/*

 {page.contestTypes === 'TAGLINE_OR_SLOGAN' &&
            <FormThirdPage
                textSubmit={(props.types.length-1===page.id)?"Submit":"Next"}
                previousPage={() => {
                  //  console.log(page.id,"page.id");
                    if (page.id===0){
                        props.contestProgressing(1);
                    }else{
                        props.contestProgressing(page.id-1);
                        setPage({contestTypes:props.types[page.id-1],id:page.id-1})
                    }
                }}
                onSubmit={funcSubmit('TAGLINE_OR_SLOGAN')}
            />}

 */

//
// previousPage={() => {
//     /*   const newPageId=page.id+1;
//        const newContestTypes=props.types[newPageId];
//        setPage({...page,contestTypes:newContestTypes,id:newPageId});*/
//
//     if (form.id===0){
//         const newPage={id:form.id+1, contestTypes:props.types[form.id+1]};
//         // const newContestTypes=props.types[newPageId];
//         console.log(" submit",form,newPage);
//         setForm(5);
//         console.log(" submit2",form);
//         props.selectedContestType([]);
//         props.contestProgressing(1);
//     }else{
//         /*const newPageId=page.id-1;
//         const newContestTypes=props.types[newPageId];
//         console.log(" submit",page.contestTypes,props.types,props.types[newPageId]);
//         setPage({contestTypes:newContestTypes,id:newPageId});
//         console.log(" submit2",page.contestTypes,props.types,props.types[newPageId]);*/
//         props.contestProgressing(form.id-1);
//     }
// }}