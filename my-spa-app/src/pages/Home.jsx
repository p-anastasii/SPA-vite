import React, {useState} from "react";
const Home = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };

    return (
        <div>
            <h1>TODO List</h1>
            <input type={"text"} value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder={"Що потрібно зробити?"} />
            <button onClick={addTodo}>Додати завдання</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;