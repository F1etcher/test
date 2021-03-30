import {combineReducers} from "redux";
import {mainReducer} from "./MainReducer";

export const rootReducer = combineReducers({
    Login: mainReducer
})