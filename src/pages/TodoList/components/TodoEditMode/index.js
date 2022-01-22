import {memo} from "react";
import {useForm} from "../../../../hooks";

import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import ExitToApp from '@mui/icons-material/ExitToApp';
import PropTypes from "prop-types";

export const TodoEditMode = memo(({id, taskText, handleSave, handleExit}) => {

    const {formValues, handleChange} = useForm({editableText: taskText});

    return (
        <Card variant="outlined" sx={{mt: 1, backgroundColor: '#7d7726', padding: 1}}>
            <TextField
                sx={{mr: 1}}
                id="outlined-basic"
                label={formValues.editableText}
                name='editableText'
                variant="outlined"
                value={formValues.editableText}
                onChange={handleChange}/>
            <Button
                size="large"
                sx={{mr: 1, p: 1.8,}}
                onClick={() => handleSave({id, updateText: formValues.editableText})}
                variant="contained"
                startIcon={<SaveIcon/>}>
                Save
            </Button>
            <Button
                size="large"
                sx={{mr: 1, p: 1.8,}}
                onClick={() => handleExit(id)}
                variant="contained"
                startIcon={<ExitToApp/>}>
                Exit
            </Button>
        </Card>
    );
});
TodoEditMode.propTypes = {
    id: PropTypes.number,
    taskText: PropTypes.string,
}
