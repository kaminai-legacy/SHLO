import ACTION from '../actions/actiontsTypes';

const initialState = {
    selectedContestTypes:[],
    contestStage:null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.SELECTED_CONTEST_TYPE: {
            console.log(action);
            return {
                ...state,
                selectedContestTypes:action.contestTypes,
            };
        }
        case ACTION.CONTEST_PROGRESSING: {
            console.log(action);
            return {
                ...state,
                contestStage:action.stage
            };
        }
        default: {
            return state;
        }
    }
}