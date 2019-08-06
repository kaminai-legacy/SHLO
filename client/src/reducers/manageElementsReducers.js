import ACTION from '../actions/actiontsTypes';

const initialState = {
    dashboardStatus: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.DASHBOARD_CHANGED: {
            return {
                ...state,
                dashboardStatus: !state.dashboardStatus
            };
        }
        default: {
            return state;
        }
    }
}
