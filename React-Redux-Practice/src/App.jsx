import './App.css'
import Count from './component/Count'
import { Provider } from 'react-redux'
import { store } from './redux/count_redux/Store'
// import { store } from './redux/user_redux/Store'
import HooksCount from './component/HooksCount'
// import Users from './component/Users'

function App() {

  return (

    <Provider store={store}>
      <Count />
      <HooksCount/>
      {/* <Users /> */}
    </Provider>

    // <>
    //  <Count/>
    // </>

  )
}

export default App
