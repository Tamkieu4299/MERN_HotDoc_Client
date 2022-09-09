import React, { useState } from "react";
import TodoChilden from "./TodoChilden";
import TodoForm from "./TodoForm";

export default function TodoParent({medicines}) {
    const [TODOLIST, setTodoList] = useState(medicines); // empty array

    // 1 out of 4
    const addOneTodo = (param) => {
        // sanitize user input
        if (!param.text || /^\s*$/.test(param.text)) {
            return;
        }

        setTodoList([param, ...TODOLIST]);
        // console.log(TODOLIST);
    };

    // 2 out of 4
    const completeOneTodo = (param) => {
        let TODOLISTWITHONECOMPLETED = TODOLIST.map((item) => {
            if (item.id === param) {
                item.isComplete = !item.isComplete;
            }
            return item;
        });
        setTodoList(TODOLISTWITHONECOMPLETED);
    };

    // 3 out of 4
    const editOneTodo = (paramID, paramNewValue) => {
        // sanitize user input
        if (!paramNewValue.text || /^\s*$/.test(paramNewValue.text)) {
            return;
        }

        setTodoList((prev) => prev.map((item) => (item.id === paramID ? paramNewValue : item)));
    };
    
    // 4 out of 4
    const removeOneTodo = (param) => {
        const TODOLISTWITHONEREMOVED = [...TODOLIST].filter((item) => {
            return item.id !== param;
        });
        setTodoList(TODOLISTWITHONEREMOVED);
    };

    return (
        <>
            <div className="row text-center"><h1>What's in your mind today?</h1></div>
            <div className="row text-center justify-content-center"><TodoForm addOneTodo={addOneTodo} /></div>
            <div className="row">
                <TodoChilden
                    TODOLIST={TODOLIST}
                    completeOneTodo={completeOneTodo}
                    editOneTodo={editOneTodo}
                    removeOneTodo={removeOneTodo}
                />
            </div>
        </>
    );
}
