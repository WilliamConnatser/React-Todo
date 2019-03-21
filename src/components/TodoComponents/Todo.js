import React from 'react';

export default props => {
    return (
        <div>            
            <span 
                style={ props.completed ? { textDecoration: 'line-through' } : {} }
                id={ props.id }
                completed={ props.completed.toString() }
                onClick={ props.toggleComplete }
            >
                { props.task }
            </span>
        </div>
    )
}