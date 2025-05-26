import React from 'react';

import { increment, decrement } from '../features/counter/CounterSlice'
import { useDispatch, useSelector } from 'react-redux';


function Counter() {

    // useSelector sees the change and automatically re-renders the component with the new value.
    const count = useSelector((state) => state.counter.value);

    //useDispatch is a React-Redux hook that gives you access to the dispatch function.
    const dispatch = useDispatch();



    function handle_Increment_Btn() {
        dispatch(increment())
    }
    function handle_Decrement_Btn() {
        dispatch(decrement())
    }

    return (
        <div>

            <button className="button" onClick={handle_Increment_Btn}>+</button>
            <h1>Count: {count}</h1>
            <button className="button" onClick={handle_Decrement_Btn}>-</button>

        </div>
    );
}

export default Counter;