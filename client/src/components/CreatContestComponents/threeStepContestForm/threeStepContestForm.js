import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import style from './threeStepContestForm.module.scss';
import WizardFormFirstPage from './firstPageForm';
import WizardFormSecondPage from './secondPageForm';
import WizardFormThirdPage from './thirdPageForm';

function WizardForm (props) {
    const [page, setPage] = useState(1);
        const { onSubmit } =props;
        return (
            <div className={style.businessStepForm}>
                {page === 1 && <WizardFormFirstPage onSubmit={()=>setPage(page+1)} />}
                {page === 2 &&
                <WizardFormSecondPage
                    previousPage={()=>setPage(page-1)}
                    onSubmit={()=>setPage(page+1)}
                />}
                {page === 3 &&
                <WizardFormThirdPage
                    previousPage={()=>setPage(page-1)}
                    onSubmit={onSubmit}
                />}
            </div>
        );
    }
WizardForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default WizardForm;
