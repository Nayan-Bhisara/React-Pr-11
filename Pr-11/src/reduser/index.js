import {combineReducers } from "redux";
import contactReducer from "./reduser";

const rootReducer = combineReducers({
    data : contactReducer
})

export default rootReducer