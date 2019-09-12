import ACTION from '../actions/actiontsTypes';
const _=require("lodash");

const initialState = {
    contest:null,
    isFetching:false
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTION.CONTESTS_BY_ID_RESPONSE: {
            console.log(action.contest);
            return {
                ...state,
                isFetching:false,
                contest:action.contest
            };
        }
        case ACTION.CONTESTS_BY_ID_REQUEST: {
            return {
                ...state,
                isFetching:true,
            };
        }
        default: {
            return state;
        }
    }
}