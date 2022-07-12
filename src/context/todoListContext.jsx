import { createContext, useState} from "react";

const TodoListContext = createContext({});

export const TodoListProvider = (props) => {
    const {children} = props;
    const initialState= [];

    return (
        <TodoListContext.Provider value={useState(initialState)}>
            {children}
        </TodoListContext.Provider>
    )
};

export const useTodoList = () => {}

export const useTodoListContext = () => {
    const [state, setState] = useContext(TodoListContext);
    function addtodo(title, description) {

    }
    function removeTodo(id) {

    }
    function completeTodo(id) {

    }
    function failTodo(id) {

    }
    return (
        state,
        addTodo,
        removeTodo,
        completeTodo,
        failTodo
    )
}
