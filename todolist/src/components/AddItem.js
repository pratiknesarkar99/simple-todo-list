import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddItem = () => {
    const [text, setText] = useState("");

    const { addTask } = useContext(GlobalContext);

    const onSubmit = () => {
        const task = {
            id: Math.floor(Math.random() * 100000),
            description: text,
            pinned: false,
            completed: false,
        }

        addTask(task);
        setText("");
    }

    return (
        <div className="add-item-form">
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button className="btn" disabled={text === ""} onClick={onSubmit}>Add</button>
        </div>
    );
}