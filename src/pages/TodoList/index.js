import {TodoListContainer} from "./containers/TodoListContainer";
import Container from "@mui/material/Container";
import {styles as todolistStyles} from "../todoListStyles";


export const TodoList = () => {
    return (
        <Container style={todolistStyles.TodoComponent}>
            <TodoListContainer/>
        </Container >
    );
};

