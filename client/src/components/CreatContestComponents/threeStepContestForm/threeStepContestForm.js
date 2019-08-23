import React, { useState} from 'react';
import style from './threeStepContestForm.module.scss';
import FormFirstPage from './firstPageForm';
import FormSecondPage from './secondPageForm';
import FormThirdPage from './thirdPageForm';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SubmissionError} from "redux-form";
import Pages from '../../../constants/ContestsFormContet';
import ListElement from "../../../constants/BarMenuLists";
import {contestProgressing, selectedContestType} from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
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
        //    console.log("YES");

            if (props.types.length>page.id){
                setPage({contestTypes:props.types[page.id+1],id:page.id+1});
              //  console.log(page.id);
                switch (page.contestTypes){
                    case 'LOGO':{return props.contestProgressing(2)}
                    case 'NAME':{return props.contestProgressing(3)}
                    case 'TAGLINE_OR_SLOGAN':{return props.contestProgressing(2)}
                }
            }else{
               // console.log("на submit",values)
            }


        }else
       { throw new SubmissionError({...errors
        });}
    };};
    const [page, setPage] = useState({contestTypes:props.types[0],id:0});
    const {onSubmit} = props;
    return (
     <div >
         {page.contestTypes === 'LOGO' && <FormFirstPage nextPage={() => setPage({contestTypes:props.types[page.id+1],id:page.id+1})} onSubmit={funcSubmit('LOGO')}
                                                         previousPage={() => {
                                                         //    console.log(page.id,"page.id");
                                                             if (page.id===0){
                                                                 props.contestProgressing(1);
                                                             }else{
                                                                 props.contestProgressing(page.id-1);
                                                             }
                                                         }}     textSubmit={(props.types.length-1===page.id)?"Submit":"Next"}
            />}

            {page.contestTypes === 'NAME' &&
            <FormSecondPage
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
                nextPage={() => setPage(page + 1)}
                onSubmit={funcSubmit('NAME')}
            />}
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
    contestProgressing: () => dispatch(contestProgressing()),
});
export default connect(mapStateToProps, mapDispatchToProps)(contestForm);
//export default contestForm;
//onSubmit={funcSubmit('LOGO')}