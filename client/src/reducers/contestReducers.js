import ACTION from '../actions/actiontsTypes';

const initialState = {
    selectedContestTypes:[],
    contestStage:1,
    amountOfStages:1,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.SELECTED_CONTEST_TYPE: {
            console.log(action);
            return {
                ...state,
                selectedContestTypes:action.contestTypes,
                amountOfStages:(action.contestTypes.length)?action.contestTypes.length+2:1
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