
const redux = require('redux')
const reduxLogger = require('redux-logger')


const createStore = redux.createStore

// Combine the Reducers 
const combineReducers = redux.combineReducers

// Logger
const logger = reduxLogger.createLogger()

// Middleware
const applyMiddleware = redux.applyMiddleware


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICEREAM'

// Action

function buyCake() {

    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}


function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'First Redux Action'
    }
}


// State

const initalCakeState = {
    numOfCakes: 10,

}


const initalIceCreamState = {
    numOfIceCreams: 10,

}

// Reducer

const CakeReducer = (state = initalCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }

}


const IceCreamReducer = (state = initalIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }

}

// Made a object of Reducers to store all the Reducers

const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer
})


// We use Middleware to use the loggers 
// Middleware comes between the dispatch and the reducer 

const store = createStore(rootReducer, applyMiddleware(logger))


console.log('Inital State :', store.getState())


const unsubscribe = store.subscribe(() => {
    console.log(" ");
    console.log('Updated state :', store.getState())
    console.log(" ");
})

store.dispatch(buyCake())

// store.dispatch(buyCake())

store.dispatch(buyIceCream())

unsubscribe()