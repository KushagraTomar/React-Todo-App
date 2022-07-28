import React, { useEffect, useState, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <><input
                    type='text'
                    placeholder='Update your item'
                    value={input}
                    name='text'
                    className='todo-form-input edit'
                    onChange={handleChange}
                    ref={inputRef} /><button className='todo-form-button edit'>Update</button></>
            ) : (
                <><input
                        type='text'
                        placeholder='Add a todo'
                        value={input}
                        name='text'
                        className='todo-form-input'
                        onChange={handleChange}
                        ref={inputRef} /><button className='todo-form-button'>Add todo</button></>
            )}
        </form>
    )
}

export default TodoForm