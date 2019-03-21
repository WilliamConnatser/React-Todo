import React from 'react';

export default (props) => {
    return (
        <div>
            <form>
                <label htmlFor="new-todo">New Todo: </label>
                <input type="text" name="newTodo" value={ props.newTodo } onChange={ props.updateInput } />
                <button onClick={ props.addTodo }>Add Todo</button>
            </form>
            <form>
                <label htmlFor="filter-todos">Filter Todos: </label>
                <input type="text" name="filter" value={ props.filter } onChange={ props.updateInput } />
                <button onClick={ props.clearFilter }>Clear Filter</button>
            </form>
            <button onClick={ props.clearCompleted }>Clear Completed</button>
        </div>
    )
}