# Redux Toolkit Counter App (Vite + React)

This is a simple counter app built with React and Redux Toolkit using Vite as the build tool.  
It demonstrates:

- State management with Redux Toolkit `createSlice`
- React-Redux hooks (`useSelector`, `useDispatch`)
- Store setup with `configureStore` including `redux-logger` middleware
- Vite-powered React app setup with `ReactDOM.createRoot`
- Integration of Redux store with React using `<Provider>`

---

## 🛠️ Tech Stack

- React 18+
- Redux Toolkit
- React-Redux
- Vite
- redux-logger

---

## 📁 Project Structure

src/
├── component/
│   └── Counter.jsx            # Counter component with increment/decrement buttons
├── features/
│   └── counter/
│       └── CounterSlice.jsx   # Redux slice for counter state and actions
├── redux/
│   └── Store.jsx              # Redux store configuration with middleware
├── App.jsx                    # Root React component
├── main.jsx                   # Vite React entry point with Redux Provider
├── index.css                  # Basic styles
└── App.css                    # App specific styles



## 💡 How It Works

CounterSlice.jsx defines the initial state and reducers (increment, decrement) using Redux Toolkit's createSlice.

Store.jsx configures the Redux store with the counter slice reducer and adds redux-logger middleware for action/state logging.

Counter.jsx uses useSelector to read the current count from the Redux store.

Counter.jsx uses useDispatch to send actions (increment or decrement) to update the state.

main.jsx wraps the app with React Redux's <Provider> to pass the store down to all components.

App.jsx renders the Counter component.

## ⚙️ Redux Store Middleware

redux-logger is included to log Redux actions and state changes in the browser console.

Redux Toolkit automatically includes redux-thunk for async logic support, so no additional setup is needed.


# Execution of the ReduxToolKit
[Button Clicked]
       👇
handle_Increment_Btn()
       👇
dispatch(increment())
       👇
Redux Store → Runs reducer → Updates state
       👇
useSelector sees new state → Component re-renders