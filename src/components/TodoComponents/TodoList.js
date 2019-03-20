import React from 'react';

import Todo from './Todo';

export default props => {

    const todos = props.todos.filter(todo => {
        return todo.task.includes(props.filter);
    }).map(todo => {
        return (            
            <Todo
                key={todo.id}
                task={todo.task}
                id={todo.id}
                completed={todo.completed}
                toggleComplete={props.toggleComplete}
            />            
        )
    })

    return (
        <div>
            TodoList!
            { todos }
        </div>
    )
}