import React from 'react';
import style from './DashboardBanner.module.scss';
import connect from "react-redux/lib/connect/connect";

function dashboardBanner(props) {
    return (

            <div className={style.blueBanner}>
                <div className={style.dashboardAva} style={{backgroundImage:"url(https://www.squadhelp.com/images/user_image/thumb/Ava-avatar.jpg)"}}>
                    <div className={style.upload}><i className="fa fa-camera"/>
                        <div className={style.uploadFile}>Upload Picture</div>
                    </div>


                </div>
                <div className={style.textBlock}>
                    <div className={style.rowName}>
                        Alex
                    </div>
                    <div className={style.rowEmail}>
                        @mail.com
                    </div>
                </div>
            </div>);
}
const mapStateToProps = (state) => {
    return {
        state
    };
};
export default connect(mapStateToProps)(dashboardBanner);