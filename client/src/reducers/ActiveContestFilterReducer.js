import ACTION from '../actions/actiontsTypes';
const _=require("lodash");

const initialState = {
    selectedTags:{
        'id':null,
        'Active':false,
        'Closed':false,
        'Categories':"All Categories",
        'Industries':"All Industries",
    },
    confirmedContests:[],
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION.CHANGE_FILTER_TAGS: {
            console.log(action.data);
            return {
                ...state,
                selectedTags:{...state.selectedTags,...action.data}
            };
        }
        case ACTION.SET_FILTERED_CONTEST: {
            console.log(action.contests);
            return {
                ...state,
                confirmedContests:action.contests
            };
        }
        default: {
            return state;
        }
    }
}