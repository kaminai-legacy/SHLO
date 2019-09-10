import ACTION from '../actions/actiontsTypes';
const _=require("lodash");

const initialState = {
    needUpdate:{'userContests':false,
    'user':false,
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.CHANGE_APP_STATE: {

            const newState =  action.data;
            console.log(action,_.isEmpty(newState["needUpdate"]));
            return {
                ...state,
                needUpdate:{...state.needUpdate,...newState}
                // needUpdate:(_.isEmpty(newState["needUpdate"]))?state.needUpdate:newState["needUpdate"],
            };
        }
        default: {
            return state;
        }
    }
}