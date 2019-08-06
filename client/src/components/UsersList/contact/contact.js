import React from 'react';
import style from './contact.module.scss';

function Contact(props) {
    const Color = props.isBanned ? "red" : "green";
    const status = props.isBanned ? <i className="fa fa-ban" aria-hidden="true"/> :
        <i className="fas fa-check-circle"/>;
    return (
        <div onClick={() => props.click(props.id, props.isBanned)} className={style.list}>
            <div className={style.listLeft}>
                <div className={style.avatar} style={{backgroundImage: "url(" + props.img + ")"}}/>
                <div className={style.boxForNameAndLvl}>
                    <div className={style.name}>
                        {props.name}
                    </div>
                    <div className={style.level}>
                        {props.displayName}
                    </div>
                    <div className={style.position}>
                        position: {props.position}
                    </div>
                </div>
            </div>
            <div
                style={{color: Color}}
                className={style.icon}>
                {status}

            </div>
        </div>);
}

export default Contact;
