import {createAction} from "redux-actions";

export const CREATE_TODO =createAction('CREATE_TODO');
export const DELETE_TODO =createAction('DELETE_TODO');
export const TOGGLE_EDIT_MODE =createAction('TOGGLE_EDIT_MODE');
export const COMPLETE_TODO =createAction('COMPLETE_TODO');
export const SAVE_TODO =createAction('SAVE_TODO');
