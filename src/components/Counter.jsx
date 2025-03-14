// src/components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import './Counter.css'; 

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Счетчик: {count}</h2>
            <button className="counter-button" onClick={() => dispatch(decrement())}>Уменьшить</button>
            <button className="counter-button" onClick={() => dispatch(increment())}>Увеличить</button>
        </div>
    );
};

export default Counter;