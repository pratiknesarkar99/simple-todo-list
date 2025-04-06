import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

// interface Itask {
//     id: number;
//     description: string;
//     completed: boolean;
//     pinned: boolean;
// }

const getInitialState = () => {
    try {
        const storedState = localStorage.getItem('appState');
        return storedState ? JSON.parse(storedState) : { tasks: [] };
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return { tasks: [] };
    }
};

// Initial state
const initialState = getInitialState();

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