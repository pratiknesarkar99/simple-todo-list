import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import PinIcon from '../icons/thumbtack-solid.svg';
import UnPinIcon from '../icons/thumbtack-slash-solid.svg';
import DeleteIcon from '../icons/trash-solid.svg';


export const Task = ({ task }) => {
    const { removeTask, pinTask, toggleTask } = useContext(GlobalContext);

    const markAsComplete = () => {
        toggleTask(task.id);
    }

    return (
        <div className="task" key={task.id}>
            <input type="checkbox" disabled={task.completed} checked={task.completed} onChange={markAsComplete} />
            <span className="task-text">
                <p>{task.description}</p>
            </span>

            <span className="task-btns">
                {
                    (!task.completed) &&
                    < button className="pin-btn" disabled={task.completed} onClick={() => pinTask(task.id)}>
                        <img src={task.pinned ? UnPinIcon : PinIcon} alt="Pin" />
                    </button>
                }
                <button className="delete-btn" onClick={() => removeTask(task.id)}>
                    <img src={DeleteIcon} alt="Delete" />
                </button>
            </span>
        </div >
    );
}