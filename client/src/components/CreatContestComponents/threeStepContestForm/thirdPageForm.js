import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
//import {renderColorSelector as Selector} from './renderField';
//import render from'./renderField';
//const render=require('./renderField');

const WizardFormThirdPage = props => {
    const {handleSubmit, pristine, previousPage, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Favorite Color</label>
                {/*}<Field name="favoriteColor" component={render.renderColorSelector}*/}
                data={colors}/>
            </div>
            <div>
                <label htmlFor="employed">Employed</label>
                <div>
                    <Field
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </div>
            <div>
                <label>Notes</label>
                <div>
                    <Field name="notes" component="textarea" placeholder="Notes"/>
                </div>
            </div>
            <div>
                <button type="button" className="previous" onClick={previousPage}>
                    Previous
                </button>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
            </div>
        </form>
    );
};
export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(WizardFormThirdPage);
