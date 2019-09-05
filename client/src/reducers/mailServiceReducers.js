import ACTION from '../actions/actiontsTypes';

const initialState = {
    msg:null,
    err:false,
    email:null,

};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION.GET_MAIL_SERVICE_RESULT: {
            const email=(action.email)?{email:action.email}:{};
            console.log(action);
            return {
                ...state,
                msg:action.result,
                err:action.err,
                ...email,
            };
        }
        case ACTION.CREATE_LINK_FOR_MAIL: {
            console.log(action);
            const email=(action.email)?{email:action.email}:{};
            return {
                ...state,
                msg:action.result,
                err:action.err,
               ...email,
            };
        }
        case ACTION.RESET_API_MSG: {
            console.log(action);
            return {
                ...state,
                msg:null,
                err:false,
            };
        }
        default: {
            return state;
        }
    }
}
