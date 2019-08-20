import React,{useState} from 'react';
import style from './HeaderBottom.module.scss';
import BottomHeaderList from './StartPageBottomHeaderList/StartPageBottomHeaderList';
import BarMenu from './BarMenu/BarMenu';
import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom';
import {logout} from "../../../actions/actionCreator";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HeaderBottom(props) {
    const [dashboardView, setDashboardView] = useState(false);
    const [barMenuView, setBarMenuView] = useState(false);
    function onClicked(){
        props.logout();
        setDashboardView(!dashboardView);
    }
    function onClickedDashboard(){
        setDashboardView(!dashboardView);
    }
    function onClickedBarMenu(){
        setBarMenuView(!barMenuView);
    }
    const content = (!props.state.userReducers.user) ?
        <Link to="/login">Login</Link> :
        <span className={style.toClick} onClick={onClickedDashboard}>
          <div className={style.ava}/>
        <span className={style.hi}><i className="fa fa-angle-down"/></span>
        </span>
    ;
console.log(((barMenuView && dashboardView) || (dashboardView===false && barMenuView===false)));
    const AdminP = (props.state.userReducers.user && props.state.userReducers.user.role==="ADMIN")?<Link to="/admin_panel/"><li>Admin panel</li></Link>:<></>;
    const LIST = <div className={style.dashboard} style={{maxHeight:dashboardView?"500px":"0",border:dashboardView?" 1px solid #cacaca":"none",
        borderBottom:((barMenuView && dashboardView) || (dashboardView===false && barMenuView===false))?"none":" 1px solid #ccc"}} >
        <ul className={style.dashboardList}>
            <Link to="/dashboard/"><li>View Dashboard</li></Link>
            <li>My account</li>
            <li>Messages</li>
            {AdminP}
            <li>Affiliate Dashboard</li>
            <li onClick={onClicked}>Logout</li>
        </ul>
    </div>;
    const BARMENU = <BarMenu height={barMenuView?"100vh":"0"} border={barMenuView?" 1px solid #cacaca":"none"}
       />;
    return (
        <div className={style.flax}>
        <div className={style.mainHeaderBottom} style={{borderBottom:(dashboardView||barMenuView)?"none":" 1px solid #ccc"}}>
            <div className={style.mainHeaderBottomContainer}>
                <div className={style.mainHeaderBottomRow}>
                    <div className={style.mainHeaderBottomLogo}>
                        <Link to="/">
                            <div className={style.mainLogo}/>
                        </Link>
                    </div>
                    <div className={style.list}>
                        <BottomHeaderList/>
                    </div>
                    <div className={style.button}> <Link to="/contest_creating">
                        <div className={style.mainHeaderBottomButton}>
                            START CONTEST
                        </div>
                    </Link></div>
                    <div className={style.dropList}>
                        <div className={style.listElem}>{content}</div>
                        <div className={style.listElem}> <i className="far fa-bell"/></div>
                        <div className={style.listElem}><i className="far fa-envelope"/></div>
                        <div className={style.listElem}><span onClick={onClickedBarMenu}><i className="fas fa-bars"/></span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.miniView} style={{height:dashboardView?"auto":"0"}}>
            {LIST}
        </div>
        <div className={style.miniView} style={{height:barMenuView?"auto":"0"}}>
            {BARMENU}
        </div>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBottom);
