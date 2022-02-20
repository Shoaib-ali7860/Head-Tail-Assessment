
import { combineReducers } from "redux"
import products from "./products"
import catagoryId from "./catagorySelected"
import { createStore } from "redux";
const rootReducer=combineReducers({products,catagoryId})
export default createStore(rootReducer);