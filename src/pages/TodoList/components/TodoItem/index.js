import {memo} from "react";

import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Card from "@mui/material/Card";

import {styles as todolistStyles} from "../../../todoListStyles";
import PropTypes from "prop-types";

export const TodoItem = memo(({id,index, taskText, isCompleted, handleEdit, handleRemove, handleIsCompleted, date}) => {
    return (
        <Card variant="outlined" sx={{mt: 1, padding: 1}} style={index % 2 === 0 ? todolistStyles.nthChildColor : todolistStyles.nthChildColorOdd }>
            <p style={isCompleted ? todolistStyles.completed : todolistStyles.noCompleted}>{taskText}</p>
            <p>Date: {date}</p>
            <Fab color="secondary" sx={{mr: 1}} size="small" aria-label="edit">
                <EditIcon onClick={() => handleEdit(id)}/>
            </Fab>
            <Button sx={{mr: 1, backgroundColor: '#B22222'}} variant="outlined" onClick={() => handleRemove(id)}
                    startIcon={<DeleteIcon/>}>
                Remove
            </Button>
            <Button variant="contained" color="success" onClick={() => handleIsCompleted(id)}>
                Complete
            </Button>

        </Card>
    );
});
TodoItem.propTypes = {
    id: PropTypes.string,
    index: PropTypes.number,
    date: PropTypes.string,
}

