"use client"
import React, { useEffect, useState } from "react";

export default function TodoFetcher() {
    const [todo, setTodo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setTodo(data);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, []);
    if (error) return <div>Error: {error}</div>;
    if (!todo) return <div>Loading...</div>;

    return (
        <div>
            <h2>Todo Item</h2>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Title:</strong> {todo.title}</p>
            <p><strong>Completed:</strong> {todo.completed ? "Yes" : "No"}</p>
        </div>
    );
}
