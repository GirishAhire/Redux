import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from '../redux/count_redux/CountAction'



function HooksCount() {

    const count = useSelector((state) => state.count.numberOfCounts)
    const dispatch = useDispatch()
    
    const increment_Btn = () => {
        dispatch(incrementCount());
    }

    const decrement_Btn = () => {
        dispatch(decrementCount());
    }

    return (
        
        <div>
            <h1>Using Hooks This is Count: {count}</h1>

            <button className="button" onClick={increment_Btn}>Increment</button>
            <button className="button" onClick={decrement_Btn}>Decrement</button>

        </div>
    );
}

export default HooksCount;