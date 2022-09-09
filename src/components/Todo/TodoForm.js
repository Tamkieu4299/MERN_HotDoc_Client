import React, { useState, useEffect, useRef } from "react";

export default function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    // misc
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    // 1 out of 2
    const handleOnSubmit = (event) => {
        event.preventDefault(); // default JS built-in

        // came from TodoParent
        props.addOneTodo({
            id: Math.floor(Math.random() * 1000), // 0-999
            text: input,
        });

        setInput("");
    };

    // 2 out of 2
    const handleOnChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <>
            <div className="col-4">
                <form action="" onSubmit={handleOnSubmit} className="">
                    {props.edit ? (
                        <>
                            <input
                                type="text"
                                value={input}
                                onChange={handleOnChange}
                                ref={inputRef} // focus on input box
                                className="form-control"
                            />
                            <button type="submit" className="btn btn-primary">Update</button>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                value={input}
                                onChange={handleOnChange}
                                ref={inputRef} // focus on input box
                                className="form-control"
                                />
                            <button type="submit" className="btn btn-primary">Add new</button>
                        </>
                    )}
                </form>
            </div>
        </>
    );
}
