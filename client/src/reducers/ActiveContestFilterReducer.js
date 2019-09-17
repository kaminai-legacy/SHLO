import ACTION from '../actions/actiontsTypes';

const _ = require("lodash");

const initialState = {
    selectedTags: {
        'id': null,
        'Active': false,
        'Closed': false,
        'Categories': "All Categories",
        'Industries': "All Industries",
    },
    confirmedContests: null,
    isFetching: false
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION.CHANGE_FILTER_TAGS: {
            console.log(action.data);
            return {
                ...state,
                selectedTags: {...state.selectedTags, ...action.data}
            };
        }
        case ACTION.SET_FILTERED_CONTEST: {
            console.log(action.contests);
            return {
                ...state,
                confirmedContests: action.contests,
                isFetching: false
            };
        }
        case ACTION.FILTERED_CONTEST_REQUEST: {
            return {
                ...state,
                isFetching: true
            };
        }
        default: {
            return state;
        }
    }
}