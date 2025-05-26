// console.log("Welcome to Redux")

const BUY_CAKE = 'BUY_CAKE'

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


//part 3 : create reducer
//(previousState, action ) => newState


// create previous or inital states
const initalState = {
    numOfCakes : 10
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

        default : return state 
    }

}







