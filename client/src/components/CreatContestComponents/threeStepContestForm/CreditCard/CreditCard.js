import React,{useState} from 'react';
import Card from 'react-credit-cards';
import style from "../threeStepContestForm.module.scss";

let creditCard = props => {
    const [cardState,setCardState]=useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        issuer: '',
        focused: '',
        formData: null,
    });
    return (
        <Card
            number={cardState.number}
            name={cardState.name}
            expiry={cardState.expiry}
            cvc={cardState.cvc}
            focused={cardState.focused}
            callback={()=>{}}
        />
    );
};


export default creditCard;