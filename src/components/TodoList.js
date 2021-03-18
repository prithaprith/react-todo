import React from "react";
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterredTodos }) => {
    //console.log(todos);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterredTodos.map(todo => (
                    <Todo
                        setTodos={setTodos}
                        key={todo.id}
                        text={todo.text}
                        todos={todos}
                        todo={todo} />
                ))}
            </ul>

        </div >

    );
};

export default TodoList;
