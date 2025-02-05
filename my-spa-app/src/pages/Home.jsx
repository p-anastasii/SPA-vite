import {useState} from "react";
import { Formik, Form, Field} from "formik";

// const Home = () => {
//     const [todos, setTodos] = useState([]);
//     const [newTodo, setNewTodo] = useState("");
//     const addTodo = () => {
//         if (newTodo.trim()) {
//             setTodos([...todos, newTodo]);
//             setNewTodo("");
//         }
//     };
//
//     return (
//         <div>
//             <h1>TODO List</h1>
//             <input type={"text"} value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder={"Що потрібно зробити?"} />
//             <button onClick={addTodo}>Додати завдання</button>
//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index}>{todo}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
//
// export default Home;

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const initialValues = {
        task: "",
    };

    const validate = (values) => {
        const errors = {};
        if (!values.task) {
            errors.task = "This field is required";
        } else if (values.task.length < 5) {
            errors.task = "Minimum length is 5 symbols";
        }
        return errors;
    };

    const handleSubmit = (values, {resetForm}) => {
        setTodos([...todos, values.task]);
        resetForm();
    };

    return (
        <div>
            <h1>TODO List</h1>
            <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
                {({errors, touched}) => (
                    <Form>
                        <div>
                            <Field
                                name="task"
                                type="text"
                                placeholder="Enter your task"
                            />
                            {errors.task && touched.task && (
                                <div>{errors.task}</div>
                            )}
                        </div>
                        <button type="submit">Add</button>
                    </Form>
                )}
            </Formik>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;