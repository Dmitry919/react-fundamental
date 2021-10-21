import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <div>
                <h1>{value}</h1>
                <input
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </div>
        </div>
    );
};

export default Counter;