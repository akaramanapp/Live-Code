import React, { useState } from 'react'

function TodoForm(params) {

    const [ItemValue, setItemValue ] = useState('');

    const handleSubmit = () => {
        params.handleSubmit(ItemValue)
        setItemValue('')
    }

    return (
        <div>
            <input 
                id="new-todo"
                onChange={(e) => {
                    setItemValue(e.target.value)
                }}
                value={ItemValue}
            />
            <button onClick={handleSubmit}>
                Ekle
            </button>
        </div>
    )
}

export default TodoForm