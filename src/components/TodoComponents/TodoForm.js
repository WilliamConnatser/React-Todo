import React from 'react';

export default (props) => {
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="newTodo"
                    value={ props.newTodo }
                    onChange={ props.updateInput }
                    placeholder="new task"
                />
                <button onClick={ props.addTodo }>Add Todo</button>
            </form>
            <form>
                <input
                    type="text"
                    name="filter"
                    value={ props.filter }
                    onChange={ props.updateInput }
                    placeholder="filter todos"
                />
                <button onClick={ props.clearFilter }>Clear Filter</button>
            </form>
            <button onClick={ props.clearCompleted }>Clear Completed</button>
        </div>
    )
}