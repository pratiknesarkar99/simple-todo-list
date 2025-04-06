export default (state, action) => {
    let newState;
    switch (action.type) {
        case "ADD_TASK":
            newState = {
                ...state,
                tasks: [action.payload, ...state.tasks],
            };
            break;
        case "REMOVE_TASK":
            newState = {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
            break;
        case "PIN_TASK":
            newState = {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, pinned: !task.pinned }
                        : task
                ),
            };
            break;
        case "TOGGLE_TASK":
            newState = {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed, pinned: false }
                        : task
                ),
            };
            break;
        default:
            newState = state;
    }

    try {
        localStorage.setItem('appState', JSON.stringify(newState));
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }

    return newState;
};