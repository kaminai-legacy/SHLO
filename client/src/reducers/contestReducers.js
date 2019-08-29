import ACTION from '../actions/actiontsTypes';

const initialState = {
    selectedContestTypes:[],
    contestStage:1,
    amountOfStages:1,
    currentContestForm:null,
    tempContests:{},
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
                contestStage:action.stage,
                currentContestForm:action.form
            };
        }
        case ACTION.TEMP_CONTEST: {
            console.log(action);
            const field=action['data']['typeOfContest'];
           // console.log(  action['data'] );
           // console.log(  action['data']['contest']['typeOfContest'] );

          /*  console.log( {
                [field]:action.data.contest
            });*/
            const oldTempContests=state.tempContests
            return {
                ...state,
                tempContests:{
                    ...oldTempContests,
                    [field]:action.data
                },
            };
        }
        default: {
            return state;
        }
    }
}