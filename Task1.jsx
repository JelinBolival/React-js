import React, { useState } from 'react';

const ToDo = () => {
    const [state, setState] = useState('');
    const [tasks, setTasks] = useState([]);

    function inputname(e) {
        setState(e.target.value);
    }

    function submitform(e) {
        e.preventDefault();
        if (state.trim()) {
            setTasks([...tasks, state]);
            setState('');
        }
    }

    return (
        <div>
            <form onSubmit={submitform}>
                <label>Name: </label>
                <input
                    type="text"
                    name="name" id="name"
                    value={state}
                    onChange={inputname}
                />
                <br />
                <input type="submit" value="Submit" />
            </form>

            {/* {} */}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default ToDo;
