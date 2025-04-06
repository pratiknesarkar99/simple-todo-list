import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import { Task } from "../components/Task";

// interface Itask {
//     id: number;
//     description: string;
//     completed: boolean;
//     pinned: boolean;
// }

// Initial state
const initialState = {
    tasks: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function addTask(task) {
        dispatch({
            type: "ADD_TASK",
            payload: task,
        });
    }

    function removeTask(id) {
        dispatch({
            type: "REMOVE_TASK",
            payload: id,
        });
    }

    function pinTask(id) {
        dispatch({
            type: "PIN_TASK",
            payload: id,
        });
    }

    function toggleTask(id) {
        dispatch({
            type: "TOGGLE_TASK",
            payload: id,
        });
    }

    return <GlobalContext.Provider value={{
        tasks: state.tasks,
        addTask,
        removeTask,
        pinTask,
        toggleTask
    }}>
        {children}
    </GlobalContext.Provider>

};