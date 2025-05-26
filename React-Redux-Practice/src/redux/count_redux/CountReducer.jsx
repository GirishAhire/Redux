import { INCREMENT_COUNT, DECREMENT_COUNT } from './CountTypes'


const initialState = {

    numberOfCounts: 0

}

const reducer = (state = initialState, action) => {
    
    // console.log(action.type);

    switch (action.type) {

        case INCREMENT_COUNT: return {
            ...state,
            numberOfCounts: state.numberOfCounts + 1
        }

        case DECREMENT_COUNT: return {
            ...state,
            numberOfCounts: state.numberOfCounts - 1
        }
        default: return state
    }
}

export default reducer;