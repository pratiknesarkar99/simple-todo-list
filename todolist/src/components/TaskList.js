import React, { useContext } from "react";
import { Task } from "./Task";
import { GlobalContext } from "../context/GlobalState";

export const TaskList = () => {

    const { tasks } = useContext(GlobalContext);

    const taskList = tasks.filter((task) => task.pinned === false);

    return (
        <div className="task-list">
            {
                taskList.length > 0 ? taskList.map((task, _index) =>
                    <Task key={task.id} task={task} />
                )
                    : <span className="nothing-here"> No tasks added yet</span>
            }
        </div>
    );
}