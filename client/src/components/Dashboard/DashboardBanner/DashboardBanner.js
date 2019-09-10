import React from 'react';
import style from './DashboardBanner.module.scss';
import connect from 'react-redux/es/connect/connect';

function dashboardBanner(props) {
    return (
        <div className={style.preBlueBanner}>
            <div className={style.blueBanner}>
                <div className={style.dashboardAva}
                     style={{backgroundImage: "url(https://www.squadhelp.com/images/user_image/thumb/Ava-avatar.jpg)"}}>
                    <div className={style.upload}><i className="fa fa-camera"/>
                        <div className={style.uploadFile}>Upload Picture</div>
                    </div>
                    {console.log(props)}

                </div>
                <div className={style.textBlock}>
                    <div className={style.rowName}>
                        {(props.user) ? props.user.displayName : ""}
                    </div>
                    <div className={style.rowEmail}>
                        {(props.user) ? props.user.email : ""}
                    </div>
                </div>
            </div>
        </div>);
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducers.user
    };
};
export default connect(mapStateToProps)(dashboardBanner);