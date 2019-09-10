import ACTION from '../actions/actiontsTypes';
const _=require("lodash");

const initialState = {
    selectedTags:{
        'id':null,
        'Active':false,
        'Closed':false,
        'Categories':null,
        'Industries':null,
    },
    confirmedContests:[],
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION.CHANGE_FILTER_TAGS: {
            console.log(action);
            return {
                ...state,
            };
        }
        default: {
            return state;
        }
    }
}