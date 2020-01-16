import UserActionTypes from '../actionsTypes/UserActionTypes';
import AdminActionTypes from '../actionsTypes/AdminActionTypes';
import ContestActionTypes from '../actionsTypes/ContestActionTypes';
import EntryActionTypes from '../actionsTypes/EntryActionTypes';
import OtherActionTypes from '../actionsTypes/OtherActionTypes';
import SearchContestActionTypes from '../actionsTypes/SearchContestActionTypes';

export default {
    ...UserActionTypes,
    ...AdminActionTypes,
    ...ContestActionTypes,
    ...EntryActionTypes,
    ...OtherActionTypes,
    ...SearchContestActionTypes,
};