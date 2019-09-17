import ACTION from '../actions/actiontsTypes';

const initialState = {
    pageToRedirect: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.SITE_NAVIGATION: {
            console.log(action);
            return {
                ...state,
                ...action.data
            };
        }
        default: {
            return state;
        }
    }
}