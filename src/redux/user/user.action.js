import {Useractiontypes} from './user.types';

export const setCurrentUser =(user)=>({
type:Useractiontypes.SET_CURRENT_USER,
payload:user
});