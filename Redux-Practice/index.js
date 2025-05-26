
const redux = require('redux')

const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE'

// Action

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}


// State
const initalState = {
    numOfCakes: 10
}

// Reducer
//(previousState, action ) => newState

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }

}

const store = createStore(reducer)


console.log('Inital State :', store.getState())


// listner via subscribe()

const unsubscribe = store.subscribe(() => {
    console.log('Updated state :', store.getState())
})


// Allow state to be update via dispatch(action)

store.dispatch(buyCake())

// user can add multiple action 
// store.dispatch(buyCake()) 
// store.dispatch(buyCake())
// store.dispatch(buyCake())


// unregistered  of listener via function return by subscribe()
// call unsubscribe()

unsubscribe()

