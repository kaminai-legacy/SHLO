import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
import SelectList from 'react-widgets/lib/SelectList';
import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';

const renderField = ({ input, label, type, meta: { touched, error } }) =>{return <div>
    <label>{label}</label>
    <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
    </div>
</div>};




const renderDropdownList = ({ input, data, valueField, textField }) =>
    <DropdownList {...input}
                  data={data}
                  valueField={valueField}
                  textField={textField}
                  onChange={input.onChange} />;

const renderMultiselect = ({ input, data, valueField, textField }) =>
    <Multiselect {...input}
                 onBlur={() => input.onBlur()}
                 value={input.value || []} // requires value to be an array
                 data={data}
                 valueField={valueField}
                 textField={textField}
    />;

const renderSelectList = ({ input, data }) =>
    <SelectList {...input}
                onBlur={() => input.onBlur()}
                data={data} />;

const renderColorSelector = ({ input,data }) => (
        <select {...input}>
            <option value="">Select a color...</option>
            {data.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
);

export default {
    renderField,
    renderDropdownList,
    renderMultiselect,
    renderSelectList,
    renderColorSelector
}

/*module.exports =
    {
        renderField,
        renderDropdownList,
        renderMultiselect,
        renderSelectList,
        renderColorSelector
    };*/

