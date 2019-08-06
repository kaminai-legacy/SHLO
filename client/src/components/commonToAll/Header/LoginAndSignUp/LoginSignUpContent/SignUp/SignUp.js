import React from 'react';
import style from './SignUp.module.scss';
import {Link} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

function SignUp(props) {
    const content = (props.state.userReducers.user === null || props.state.userReducers.user === undefined) ?
        <Link className={style.anchor} to="/signup"> Sign up</Link> :
        <span>
        <span className={style.hi}><i className="far fa-envelope"/></span>
        </span>;
    return (
        <div className={style.main}>
            <div>
                {content}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state
    };
};

export default connect(mapStateToProps)(SignUp);

