import {combineReducers} from "redux";
import {todoListReducer} from "../pages/TodoList/reducers";


export const rootReducer = combineReducers({
    todoManagerList: todoListReducer,
})
