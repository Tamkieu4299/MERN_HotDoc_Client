import React, { useState } from "react";
import TodoForm from "./TodoForm";

export default function TodoChilden(props) {

    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    const submitUpdate = (value) => {
        props.editOneTodo(edit.id, value);
        setEdit({
            id: null,
            value: "",
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} addOneTodo={submitUpdate} />;
    }

    // ---

    return props.TODOLIST.map( (oneTodo, index) => (
        <div
            className={oneTodo.isComplete ? 'complete col-3 d-flex justify-content-between box-container' : 'not-complete col-3 d-flex justify-content-between box-container'}
            key={index}
        >
            <div className="text-overflow-prevent" key={oneTodo.id} onClick={() => props.completeOneTodo(oneTodo.id)}> {oneTodo.text} </div>
            <div className="box-children-icon-parent">
                <span> <i className="box-children-icon-children fa-solid fa-pen" onClick={() => setEdit({ id: oneTodo.id, value: oneTodo.text })}></i> </span>
                <span> <i className="box-children-icon-children fa-solid fa-delete-left" onClick={() => props.removeOneTodo(oneTodo.id)}></i> </span>
            </div>
        </div>
    ))
}
