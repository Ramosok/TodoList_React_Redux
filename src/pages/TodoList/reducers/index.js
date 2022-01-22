import {handleActions} from "redux-actions";
import {v4 as uuid} from 'uuid';

import * as actions from '../actions';

import {date} from "../../../helpers/getDate";

const defaultState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
}

export const todoListReducer = handleActions(
    {
        [actions.CREATE_TODO]: (state, {payload}) => {
            const newTask = {
                id: uuid(),
                isEditMode: false,
                isCompleted: false,
                taskText: payload,
                date: date,
            };
            return {
                todos: [newTask, ...state.todos],
            };
        },
        [actions.TOGGLE_EDIT_MODE]: (state, {payload: id}) => {
            const copyTodos = [...state.todos];

            const foundTodoItem = copyTodos.find(todo => todo.id === id);

            foundTodoItem.date = `Edited ${date}`
            foundTodoItem.isEditMode = !foundTodoItem.isEditMode;

            return {
                todos: copyTodos
            };
        },
        [actions.SAVE_TODO]: (state, {payload}) => {
            const {id, updateText} = payload

            const copyTodos = [...state.todos];

            const foundTodoItem = copyTodos.find(todo => todo.id === id);

            foundTodoItem.taskText = updateText;

            foundTodoItem.isEditMode = !foundTodoItem.isEditMode;

            return {
                todos: copyTodos,
            };
        },
        [actions.DELETE_TODO]: (state, {payload: id}) => {
            const copyTodosList = [...state.todos];
            const todoIndex = copyTodosList.findIndex(todo => todo.id === id);
            copyTodosList.splice(todoIndex, 1);
            return {
                ...state,
                todos: copyTodosList
            }
        },
        [actions.COMPLETE_TODO]: (state, {payload: id}) => {
            const copyTodos = [...state.todos];

            const foundTodoItem = copyTodos.find(todo => todo.id === id);

            foundTodoItem.isCompleted = !foundTodoItem.isCompleted

            return {
                ...state,
            }
        }
    },
    defaultState);