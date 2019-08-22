import React, { useState} from 'react';
import style from './threeStepContestForm.module.scss';
import FormFirstPage from './firstPageForm';
import FormSecondPage from './secondPageForm';
import FormThirdPage from './thirdPageForm';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (msg) => toast.error(msg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 6000,
});
const func = notify;
function contestForm(props) {
    const [page, setPage] = useState(1);
    const {onSubmit} = props;
    return (
     <div >
         {page === 1 && <FormFirstPage nextPage={() => setPage(page + 1)}  notify={notify}

            />}
            {page === 2 &&
            <FormSecondPage
                previousPage={() => setPage(page - 1)}
                nextPage={() => setPage(page + 1)}
                notify={notify}
            />}
            {page === 3 &&
            <FormThirdPage
                previousPage={() => setPage(page - 1)}
                onSubmit={onSubmit}
                notify={notify}
            />}
     </div>


    );
}
export default contestForm;
