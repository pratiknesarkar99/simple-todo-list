import React from "react";
import { TaskList } from "./TaskList";

export const PinnedItem = () => {
    return (
        <div className="pinned-item">
            {
                <TaskList number={2} />
            }
        </div>
    );
}  