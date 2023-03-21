'use client'
import React, {useState} from 'react';
const Counter = () => {
    const [count,setCount] = useState(0);
    const handleIncrement = ()=>{
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}>Count ++</button>
        </div>
    );
};

export default Counter;