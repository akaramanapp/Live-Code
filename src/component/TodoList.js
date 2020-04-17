import React from 'react'

function TodoList(params) {
    return (
        <div>
            <ul>
                {
                    params.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;