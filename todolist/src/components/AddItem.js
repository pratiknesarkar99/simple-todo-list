import React, { useState } from "react";

export const AddItem = () => {
    const [text, setText] = useState("");

    const onSubmit = () => {
        console.log("Item added:", text);
        setText("");
    }

    return (
        <div className="add-item-form">
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button className="btn" disabled={text === ""} onClick={onSubmit}>Add</button>
        </div>
    );
}