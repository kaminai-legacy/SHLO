import React from 'react';
import style from './Login.module.scss';
import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom';
import { logout , dashboard} from '../../../../../../actions/actionCreator';
function Login(props){
function onClicked(){
  props.logout();
}

function onClickedDashboard(){
  props.dashboard();
}
    const list = props.state.manageElementsReducers.dashboardStatus && <div className={style.dashboard} >
      <ul className={style.dashboardList}>
        <li>View Dashboard</li>
        <li>My account</li>
        <li>Messages</li>
        <Link to="/admin_panel/"><li>Admin panel</li></Link>
        <li>Affiliate Dashboard</li>
        <li onClick={onClicked}>Logout</li>
      </ul>
    </div>;
    const content = (props.state.userReducers.user===null || props.state.userReducers.user===undefined) ?
      <Link to="/login">Login</Link> :
      <span className={style.toClick} onClick={onClickedDashboard}>
          <div className={style.ava}/>
        <span className={style.hi}>&nbsp; Hi, {props.state.userReducers.user.displayName} <i className="fa fa-angle-down"/></span>
        </span>
    ;
    return (
      <div className={style.flax}>
      <div className={style.main}>
      {content}
      </div>
        {list}
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    state
  };
};
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  dashboard: () => dispatch(dashboard()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
