import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
import SelectList from 'react-widgets/lib/SelectList';
import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';
import Select from 'react-select';
import style from "./threeStepContestForm.module.scss";
const forInputs=style.forInputs;
//console.log(forInputs,"стиль",style, typeof style);
const customStyles = {
    container: (base, state) => ({
        ...base,
        height: "48px",
        border: "none",
        boxShadow: "none",
        fontSize: "16px",
        maxWidth:"100%!important",
        borderRadius: "7px",
    }),
    control: (base, state) => ({
        ...base,
        height: "48px",
        border: "2px solid #d0d0d0!important",
        boxShadow: "none",
        padding: "0 8px",
        backgroundColor: "white",
    }),
    valueContainer: (base, state) => ({
        ...base,
        height: "44px",

    }),
    multiValue: (base, state) => ({
        ...base,
        backgroundColor:" #e4e4e4",
        border:"1px solid #aaa",
        borderRadius: "4px",
        cursor: "default",
        float: "left",
        marginRight: "5px",
        marginTop:" 7px",
        padding:" 0 5px",
    }),
    option: base => ({
        ...base,
        paddingLeft:" 25px",
        fontSize: "16px",
        cursor: "pointer",
    }),
};

const renderFieldSelect = ({input,placeholder, label, type,options, meta: {touched, error, active}}) => {
    const color = active?"#28d2d0":"#d0d0d0";
    return <div className={style.renderField}>
        <label className={style.forLabel}>{label}</label>
        <div className={style.forSelect}>
        <Select
            isMulti
            placeholder={"Select Your Industry"}
            //value={"chocolate"}
            styles={customStyles}
            options={options}
        />
        {touched && error && <span>{error}</span>}
        </div>
    </div>
};



const renderField = ({input,placeholder, label, type, meta: {touched, error, active}}) => {
    const color = active?"#28d2d0":"#d0d0d0";
    return <div className={style.renderField}>
        <label className={style.forLabel}>{label}</label>
            <input className={ style.forInputs} style={{borderColor:color}} {...input} placeholder={placeholder} type={type}/>
            {touched && error && <span>{error}</span>}

    </div>
};


const renderDropdownList = ({input, data, valueField, textField}) =>
    <DropdownList {...input}
                  data={data}
                  valueField={valueField}
                  textField={textField}
                  onChange={input.onChange}/>;

const renderMultiselect = ({input, data, valueField, textField,label,meta: {touched, error, active},placeholder}) =>{
    return<div className={style.renderField}>
        <label className={style.forLabel}>{label}</label>
    <Multiselect
                 {...input}
                 placeholder={placeholder}
                 onBlur={() => input.onBlur()}
                 value={input.value || []} // requires value to be an array
                 data={data}
                 valueField={valueField}
                 textField={textField}
    />  {touched && error && <span>{error}</span>}
    </div>
};


const renderSelectList = ({input, data}) =>
    <SelectList {...input}
                onBlur={() => input.onBlur()}
                data={data}/>;

const renderColorSelector = ({input, data}) => (
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
    renderColorSelector,
    renderFieldSelect
}

/*module.exports =
    {
        renderField,
        renderDropdownList,
        renderMultiselect,
        renderSelectList,
        renderColorSelector
    };*/

