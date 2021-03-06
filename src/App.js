import React, { useState, useEffect } from "react";
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

    //state
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filterredTodos, setFilteredTodos] = useState([]);
    useEffect(() => {
        filterHandler();
    }, [todos, status]);
    // functions
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;

        }
    }
    return (<
        div className="App" >

        <header>
            <h1>todos</h1>
        </header>

        <Form
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            setStatus={setStatus}

        />
        <TodoList
            filterredTodos={filterredTodos}
            setTodos={setTodos}
            todos={todos} />
    </div>
    );
}

export default App;
