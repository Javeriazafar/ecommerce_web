import {createSelector} from 'reselect';

const inputSelectorUser =state => state.user;

export const selectUser = createSelector(
    [inputSelectorUser],
    user=>user.currentuser
)