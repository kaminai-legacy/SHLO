import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import SelectList from 'react-widgets/lib/SelectList';
import Multiselect from 'react-widgets/lib/Multiselect';

import 'react-widgets/dist/css/react-widgets.css';
import validate from './validate';
import renderField from'./renderField';

const colors = [ { color: 'Red', value: 'ff0000' },
    { color: 'Green', value: '00ff00' },
    { color: 'Blue', value: '0000ff' } ];

const renderDropdownList = ({ input, data, valueField, textField }) =>
    <DropdownList {...input}
                  data={data}
                  valueField={valueField}
                  textField={textField}
                  onChange={input.onChange} />;


const WizardFormFirstPage = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <label>Favorite Color</label>
            <Field
                name="favoriteColor"
                component={renderField.renderDropdownList}
                data={colors}
                valueField="value"
                textField="color"/>
            <label>Hobbies</label>
            <Field
                name="hobbies"
                component={renderField.renderMultiselect}
                data={[ 'Guitar', 'Cycling', 'Hiking' ]}/>
            <div>
                <button type="submit" className="next">Next</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormFirstPage);
