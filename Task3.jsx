import React, { useState } from 'react';

export default function Task3() {
    const [state, setState] = useState({
        Name: "Ivan Volkov",
        Age: 24,
        Contact: 9898257638,
    });

    return (
        <div>
            <ul>
                {Object.keys(state).map((key, index) => (
                    <li key={index}>{`${key}: ${state[key]}`}</li>
                ))}
            </ul>
        </div>
    );
}