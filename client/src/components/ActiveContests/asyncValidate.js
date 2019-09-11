import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {
    selectedContestType,
} from "../../actions/actionCreator";

function dashboardBanner(props) {
    console.log("hihih");
    return (
        <div>

        </div>);
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducers.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    selectedContestType: (contestTypes) => dispatch(selectedContestType(contestTypes)),
});

export default connect(mapStateToProps,mapDispatchToProps)(dashboardBanner);