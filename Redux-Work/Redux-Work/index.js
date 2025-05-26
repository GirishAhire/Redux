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


//console.log(buyCake())

