import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {TodoLayout} from "../components/TodoLayout";

import {useForm} from "../../../hooks";

import {COMPLETE_TODO, CREATE_TODO, DELETE_TODO, SAVE_TODO, TOGGLE_EDIT_MODE} from "../actions";

export const TodoListContainer = () => {
    const dispatch = useDispatch();

    const {todos} = useSelector(state => state.todoManagerList)

    const {formValues, handleChange, handleReset} = useForm({taskText: ""});

    const handleTaskCreate = useCallback((event) => {
        event.preventDefault();
        if (formValues.taskText) {
            dispatch(CREATE_TODO(formValues.taskText));
        }
        handleReset();
    }, [dispatch, formValues.taskText, handleReset]);

    const handleEditModToggle = useCallback((id) => {
        dispatch(TOGGLE_EDIT_MODE(id));
    }, [dispatch]);

    const handleSave = useCallback(({id, updateText}) => {
        dispatch(SAVE_TODO({id, updateText}));
    }, [dispatch]);

    const handleRemove = useCallback((id) => {
        dispatch(DELETE_TODO(id))
    }, [dispatch]);

    const handleIsCompleted = useCallback((id) => {
        dispatch(COMPLETE_TODO(id))
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return <TodoLayout
        formValues={formValues}
        todos={todos}
        handleChange={handleChange}
        handleTaskCreate={handleTaskCreate}
        handleEditModToggle={handleEditModToggle}
        handleSave={handleSave}
        handleRemove={handleRemove}
        handleIsCompleted={handleIsCompleted}
    />
};

