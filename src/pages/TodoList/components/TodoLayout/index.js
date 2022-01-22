import {Fragment} from "react";
import PropTypes from 'prop-types';

import {TodoItem} from "../TodoItem";
import {TodoEditMode} from "../TodoEditMode";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import {styles as todolistStyles} from "../../../todoListStyles";

export const TodoLayout =
    ({
         handleTaskCreate,
         handleChange,
         formValues,
         todos,
         handleEditModToggle,
         handleSave,
         updateText,
         handleRemove,
         handleIsCompleted,
     }) => {
        return (
            <div>
                <Typography style={todolistStyles.textShadow} align="center" variant="h3">Todo List</Typography>
                <form onSubmit={handleTaskCreate}>
                    <TextField
                        style={todolistStyles.padding}
                        fullWidth label={formValues.taskText ? "Task" : "Add you task"}
                        id="fullWidth"
                        name="taskText"
                        onChange={handleChange}
                        value={formValues.taskText}
                        autoComplete="off"
                    />
                    <Button type='submit' variant="contained" endIcon={<SendIcon/>}>Add task</Button>
                </form>
                <div>
                    {(todos).map(({id, taskText, isEditMode, isCompleted, date}, index) => (
                        <Fragment key={id}>
                            {isEditMode ? (
                                <TodoEditMode
                                    id={id}
                                    taskText={taskText}
                                    updateText={updateText}
                                    handleExit={handleEditModToggle}
                                    handleSave={handleSave}
                                />
                            ) : (
                                <TodoItem
                                    id={id}
                                    date={date}
                                    index={index}
                                    taskText={taskText}
                                    isEditMode={isEditMode}
                                    isCompleted={isCompleted}
                                    handleEdit={handleEditModToggle}
                                    handleRemove={handleRemove}
                                    handleIsCompleted={handleIsCompleted}
                                />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        );
    };
TodoLayout.propTypes = {
    todos: PropTypes.array,
    formValues: PropTypes.object,
    updateText: PropTypes.string,
    handleTaskCreate: PropTypes.func,
    handleChange: PropTypes.func,
    handleEditModToggle: PropTypes.func,
    handleSave: PropTypes.func,
    handleRemove: PropTypes.func,
    handleIsCompleted: PropTypes.func,
    handleErrorMessage: PropTypes.func,
}
