import React, { useState,useEffect} from 'react';
import FromContent from '../../../constants/ContestsFormContet';
import FormPage from './formPage';
import FormGetEmail from '../../ModalForm/formGetEmail';
import CreditCard from './CreditCard/CreditCard';
import 'react-toastify/dist/ReactToastify.css';
import {SubmissionError} from "redux-form";
import Pages from '../../../constants/ContestsFormContet';
import {contestProgressing, selectedContestType,sendContest,createOrUpdateTempContest,sendCard,checkEmail,resetCardResult} from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import history from '../../../boot/browserHistory';
import Modal from 'react-modal';
import style from "./threeStepContestForm.module.scss";
import {Redirect} from 'react-router';
import {toast} from "react-toastify";
import {LOADING_ITEMS} from "../../../constants/consts";
const  _ = require('lodash');
const customStyles = {
    content : {
        zIndex:20,
    }
};


Modal.setAppElement('#root');
function contestForm(props) {
    const [form, setForm] = useState({contestTypes:props.types[0],id:0});
    const [viewModalDialog, setViewModalDialog] = useState(false);
    const user = props.user;
    const submit = (values) => {
        console.log("CARD SEND",values);
        const errors = {};
        console.log("CARD SEND",values.number.length,values.expiry);
        if (!values.number){errors.number="Required"}else
        if (values.number.length<19){errors.number="Нou didn't enter all numbers"}
        if (!values.expiry){errors.expiry="Required"}else
        if (values.expiry.length<5){errors.expiry="Нou didn't enter all numbers"}
        if (!values.cvc){errors.cvc="Required"}else
        if (values.cvc.length<3){errors.cvc="Нou didn't enter all numbers"}
        if(_.isEmpty(errors)){
            console.log("Let in empty errors");
            let sum=0;
            const contestsId=[];
            for (let key in props.tempContests){
               if( props.tempContests.hasOwnProperty(key)){
                   sum+=props.tempContests[key].price;
                   contestsId.push(props.tempContests[key].id);
               }
            }
            console.log("CARD SEND VALUES ",{...values,amountPayable:sum,ids:contestsId});
            props.sendCard({...values,amountPayable:sum,ids:contestsId});
        }
        return errors
    };
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

                console.log("not last",{...values,typeOfContest:pageForm});

                props.sendContest({...values,typeOfContest:pageForm},props.user.id);
                console.log(3+form.id,props.types[3+form.id]);
                props.contestProgressing(3+form.id,props.types[form.id+1]);
                    return setForm({contestTypes:props.types[form.id+1],id:form.id+1});
            }else{
                props.sendContest({...values,typeOfContest:pageForm},props.user.id);

                console.log("last",{...values,typeOfContest:pageForm});

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
                                 window.scrollTo(0, 0);
                                 console.log(values);
                                 if (form.id===0){
                                     history.goBack();
                                     props.selectedContestType([]);
                                     console.log(1,null);
                                     props.contestProgressing(1,null);
                                 }else{
                                     console.log(form.id);
                                     console.log(form.id+1,props.types[form.id-1]);
                                     if (values) {
                                         props.createOrUpdateTempContest(values)
                                     }
                                     props.contestProgressing(form.id+1,props.types[form.id-1]);
                                     return setForm({contestTypes:props.types[form.id-1],id:form.id-1});
                                 }
                             }}
                                 textSubmit={(props.types.length-1===form.id)?"Submit":"Next"}
        />};
  //  const notif = (props.creditCardReducers.resultTransaction)?()=>notify(props.creditCardReducers.resultTransaction):()=><></>
    //notify(props.creditCardReducers.resultTransaction)   {(props.creditCardReducers.resultTransaction)?()=>console.log(props.creditCardReducers.resultTransaction):()=><></>}
    const resetStatus=()=>props.resetCardResult(null);
    const notify = (msg) => {
//console.log(props);
        const props = {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 6000,
        };
        resetStatus();
        if (msg==="Successful"){
            return toast.success(msg,props)}
        else{
            return toast.error(msg,props)}
    };

    useEffect(() => {
        (props.creditCardReducers.resultTransaction)&& notify(props.creditCardReducers.resultTransaction)
    });

    return (
     <div >
         {}
         {(props.creditCardReducers.resultTransaction==="Successful")&& <Redirect to="/"/>}
         {/*{console.log(props.creditCardReducers)}*/}
         <Modal
             isOpen={!user}
             onAfterOpen={()=>{}}
             onRequestClose={()=>{}}
             style={customStyles}
            // contentLabel="Example Modal"
             className={style.modal}
             overlayClassName={style.modalOverlay}
         >
<FormGetEmail title={'Let\'s Get Started'} longTitle={null}
              preInput={'First, tell us your email address so we can automatically save your contest brief. This way you can get back to it at any time.'}
              button={'Continue Your Brief'} createAction={props.checkEmail}/>

         </Modal>
         {/*<input type="button" value="Continue Your Brief" className="btn btn-default" onClick="registerUser(this)">*/}
         {/*<div onClick={()=>history.goBack()}>5555555555</div>*/}
         {form.contestTypes === 'LOGO' &&  renderForm(FromContent.LOGO,'LOGO')}
         {form.contestTypes === 'NAME' && renderForm(FromContent.NAME,'NAME')}
         {form.contestTypes === 'TAGLINE_OR_SLOGAN' && renderForm(FromContent.TAGLINE_OR_SLOGAN,'TAGLINE_OR_SLOGAN')}
         {(form.contestTypes === 'CHECKOUT') && <CreditCard submit={submit}/>}
     </div>
    );
}
const mapStateToProps = (state) => {
    return {
        state,
        types:state.contestReducers.selectedContestTypes,
        user: state.userReducers.user,
        tempContests:state.contestReducers.tempContests,
        creditCardReducers:state.creditCardReducers
    };
};
const mapDispatchToProps = (dispatch) => ({
    selectedContestType: (contestTypes) => dispatch(selectedContestType(contestTypes)),
    contestProgressing: (value,value2) => dispatch(contestProgressing(value,value2)),
    sendContest: (value,value2) => dispatch(sendContest(value,value2)),
    createOrUpdateTempContest: (value) => dispatch(createOrUpdateTempContest(value)),
    sendCard: (value) => dispatch(sendCard(value)),
    checkEmail: (values) => dispatch(checkEmail(values)),
    resetCardResult:(val) => dispatch(resetCardResult(val)),
});
export default connect(mapStateToProps, mapDispatchToProps)(contestForm);