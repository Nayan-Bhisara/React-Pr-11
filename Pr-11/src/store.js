import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reduser";
import {thunk} from "redux-thunk"

const Store = createStore(rootReducer,applyMiddleware(thunk))

export default Store