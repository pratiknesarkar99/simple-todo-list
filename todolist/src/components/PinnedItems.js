import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Task } from "./Task";

export const PinnedItems = () => {

    const { tasks } = useContext(GlobalContext);

    const pinnedTasks = tasks.filter((task) => task.pinned === true);

    return (
        <div className="pinned-items">
            <h2> 📌 Pinned Items</h2>
            {
                pinnedTasks.length > 0 ? pinnedTasks.map((task, _index) =>
                    <Task key={task.id} task={task} />
                )
                    : <span className="nothing-here"> No tasks pinned yet</span>
            }
        </div>
    );
}  