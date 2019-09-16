import ACTION from '../actions/actiontsTypes';
const _=require("lodash");

const initialState = {
    contest:null,
    entries:null,
    isFetching:false
};

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTION.CONTESTS_BY_ID_RESPONSE: {
            console.log(action,action.contest);
            return {
                ...state,
                isFetching:false,
                contest:action.contest,
                entries:action.entries
            };
        }
        case ACTION.CONTESTS_BY_ID_REQUEST: {
            return {
                ...state,
                isFetching:true,
            };
        }
        case ACTION.CONTEST_UPDATE: {
            return {
                ...state,
                contest:action.contest
            };
        }
        case ACTION.ENTRY_UPDATE: {
            console.log(action.entry);
            // const newEntries=state.entries.map((item)=>{
            //    if(action.data.id===item.id){
            //        return action.data
            //    }else{
            //        return item
            //    }
            // });
            return {
                ...state,
                entries:action.entry
            };
        }
        default: {
            return state;
        }
    }
}