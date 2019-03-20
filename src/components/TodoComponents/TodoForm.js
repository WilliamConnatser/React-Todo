import React from 'react';

export default (props) => {
    return (
        <div>
            TodoForm!
            <form>
                <label htmlFor="new-todo">New Todo: </label>
                <input type="text" name="new-todo" value={ props.newTodo } onChange={ props.updateNewTodo } />
                <button onClick={ props.addTodo }>Add Todo</button>
            </form>
            <form>
                <label htmlFor="filter-todos">Filter Todos: </label>
                <input type="text" name="filter-todos" value={ props.filter } onChange={ props.updateFilter } />
                <button onClick={ props.clearFilter }>Clear Filter</button>
            </form>
            <button onClick={ props.clearCompleted }>Clear Completed</button>
        </div>
    )
}