import { combineReducers, createStore } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import friendsBarReducer from './friendsbar_reducer';

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    friendsBar: friendsBarReducer
});

let store = createStore(reducers);


export default store;