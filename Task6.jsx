import React, { useState, useEffect } from 'react';

function Task() {
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('userData')) || [];
        setData(savedData);
    }, []);

    const saveToLocalStorage = (newData) => {
        localStorage.setItem('userData', JSON.stringify(newData));
    };

    const Submit = (e) => {
        e.preventDefault();
        const newData = [...data, { Name, email }];
        setData(newData);
        saveToLocalStorage(newData);
        setName('');
        setEmail('');
    };

    const Delete = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
        saveToLocalStorage(updatedData);
    };

    const Edit = (index) => {
        const editItem = data[index];
        setName(editItem.Name);
        setEmail(editItem.email);
        Delete(index);
    };

    return (
        <div>
            <h2>Local Storage Task 6 Project</h2>
            <form onSubmit={Submit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /> <br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /> <br />
                <button type="submit">Submit</button>
            </form>

            <h3>Name & Email</h3>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {item.Name} ({item.email})
                        <button onClick={() => Edit(index)}>Edit</button>
                        <button onClick={() => Delete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Task;
