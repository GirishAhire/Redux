import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../redux/count_redux/CountAction'

function Count(props) {

    const increment_Btn = () => {
        props.incrementCount();

    }

    const decrement_Btn = () => {
        props.decrementCount();

    }

    return (
        <div>
            <h1>This is Count: {props.numOfCounts}</h1>

            <button className="button" onClick={increment_Btn}>Increment</button>
            <button className="button" onClick={decrement_Btn}>Decrement</button>

            {/* <button className="button" onClick={props.incrementCount}>Increment</button>
            <button className="button" onClick={props.decrementCount}>Decrement</button> */}

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        
        numOfCounts: state.numberOfCounts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: () => dispatch(incrementCount()),
        decrementCount: () => dispatch(decrementCount()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Count);
