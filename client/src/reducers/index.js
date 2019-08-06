import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userReducers from './userReducers';
import getAllUsersReducer from './getAllUsersReducer';
import manageElementsReducers from './manageElementsReducers';

const appReducer = combineReducers({
    userReducers,
    getAllUsersReducer,
    manageElementsReducers,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
