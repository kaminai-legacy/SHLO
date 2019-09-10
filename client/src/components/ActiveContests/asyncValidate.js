import React from 'react';
import connect from 'react-redux/es/connect/connect';

function dashboardBanner(props) {
    console.log(props)
    return null
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducers.user
    };
};
export default connect(mapStateToProps)(dashboardBanner);