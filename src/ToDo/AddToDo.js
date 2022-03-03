import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddToDo({ onCreat })
{
    function submitHandler(event)
    {
        event.preventDefault()
        if (value.trim())
        {
            onCreat(value)
            setValue('')
        }
    }

    const [value, setValue] = useState('')
    return (
        <form className='_form' onSubmit={submitHandler}>
            <input className='_input' value={value}
                onChange={event => setValue(event.target.value)} />
            <button type="submit" className='_button'>Add</button>
        </form>
    )

    AddToDo.propTypes = {
        onCreat: PropTypes.func.isRequired
    }
}

export default AddToDo