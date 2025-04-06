import React from "react";
import { Task } from "./Task";

export const TaskList = ({ number }) => {
    return (
        <div className="task-list">
            {Array.from({ length: number }, (_, index) => (
                <Task key={index} />
            ))}
        </div>
    );
}