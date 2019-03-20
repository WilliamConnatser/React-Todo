import React from 'react';

export default props => {

    let style;
    if(props.completed) style = { textDecoration: 'line-through'}
    else style = {}

    return (
        <div>
            
            <span 
                style={ style }
                id={ props.id }
                completed={ props.completed.toString() }
                onClick={ props.toggleComplete }
            > { props.task } </span>
        </div>
    )
}