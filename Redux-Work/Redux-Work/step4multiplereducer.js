// If we use react code then add library
//import redux from 'redux'

// Currently we are working on simple node file 
const redux = require('redux')


const createStore = redux.createStore





const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM ='BUY_ICEREAM'


// create action : it is a simple object in javascript which contains type
// Part 1
// {
//     type: BUY_CAKE,
//    // You can add another property.
//     info: 'First Redux Action'

// }



// Part 2
// Action creater simple creates an Action.
// Action creater is function which returns an action.

function buyCake(){
    return{
        type: BUY_CAKE, 
        info: 'First Redux Action'
    }
}


function buyIceCream(){
    return{
        type: BUY_ICECREAM, 
        info: 'First Redux Action'
    }
}


//part 3 : create reducer
//(previousState, action ) => newState


// create previous or inital states
const initalState = {
    numOfCakes : 10,
    numOfIceCreams: 20
}


// for state parameter , we supply inital value as default state

// const reducer =(state,action) =>{

// }




// const reducer =(state = initalState,action) =>{
//     switch(action.type){


//          // we are trying to return a new object
//         case BUY_CAKE : return{
//             numOfCakes:state.numOfCakes - 1
//         }

//         // for default return the state as it is.
//         default : return state 
//     }

// }


// Make a copy of state object using spread operator.

const reducer =(state = initalState,action) =>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes:state.numOfCakes - 1
        }

        case BUY_ICECREAM : return{
            ...state,
            numOfIceCreams:state.numOfIceCreams - 1
        }

        default : return state 
    }

}


// first responsibility hold reducer 

const store = createStore(reducer)

// second responsibilty

console.log('Inital State :', store.getState())


// forth responsibilty : listner via subscribe()
//store.subscribe()

//store.subscribe(()=>{})

// store.subscribe(()=>{
//     console.log('Updated state :',store.getState())
// })

// for 5th response
const unsubscribe = store.subscribe(()=>{
    console.log('Updated state :',store.getState())
})



// third responsibilty : allow state to be update via dispatch(action)

store.dispatch(buyCake())

// user can add multiple action 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())

// fifth responsibility : unregistered  of listener via function return by subscribe()
// call unsubscribe()

unsubscribe()

