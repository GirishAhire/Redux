

const redux = require('redux')
const createStore = redux.createStore

const combineReducers = redux.combineReducers





const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM ='BUY_ICEREAM'


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



const initalCakeState = {
    numOfCakes : 10,
   
}


const initalIceCreamState = {
    numOfIceCreams : 20,
   
}






// const reducer =(state = initalState,action) =>{
//     switch(action.type){
//         case BUY_CAKE : return{
//             ...state,
//             numOfCakes:state.numOfCakes - 1
//         }

//         case BUY_ICECREAM : return{
//             ...state,
//             numOfIceCreams:state.numOfIceCreams - 1
//         }

//         default : return state 
//     }

// }



const CakeReducer =(state = initalCakeState,action) =>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes:state.numOfCakes - 1
        }

        default : return state 
    }

}


const IceCreamReducer =(state = initalIceCreamState,action) =>{
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCreams:state.numOfIceCreams - 1
        }

        default : return state 
    }

}





// first responsibility hold reducer 

const rootReducer = combineReducers({
    cake:CakeReducer,
    iceCream:IceCreamReducer
})


// const store = createStore(reducer)
const store = createStore(rootReducer)


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