# 🚀 React Redux Thunk Demo Project

This project is a basic demonstration of how to use **React**, **Redux**, and **Redux Thunk** to manage application state. It includes two main features:
- A **counter** using Redux for state management
- A **user list fetcher** using Redux Thunk to handle async API requests

---

## 📁 Project Structure

src/
│
├── redux/
│ ├── count_redux/
│ │ ├── CountAction.js // Counter actions
│ │ ├── CountReducer.jsx // Reducer for count
│ │ └── Store.jsx // Store combining reducers
│
│ ├── user_redux/
│ │ ├── UserAction.js // Redux Thunk to fetch users
│ │ ├── UserReducer.jsx // Reducer for users
│ │ └── userTypes.js // Action types
│
├── components/
│ ├── Count.jsx // Counter using connect()
│ ├── HooksCount.jsx // Counter using Hooks
│ └── Users.jsx // Users list using connect()


---

## 🔧 How It Works

### 🔁 Counter

- The counter value is stored in Redux state under `state.count.numberOfCounts`.
- You can increment or decrement it using:
  - `<Count />` component (uses `connect()`)
  - `<HooksCount />` component (uses `useSelector()` and `useDispatch()`)

---

### 🌐 Fetch Users with Redux Thunk

- Redux Thunk is used for asynchronous API calls.
- User data is fetched from: `https://jsonplaceholder.typicode.com/users`
- The data is stored in `state.users.users`.

> ✅ Make sure the `UserReducer` has initial state defined and is properly connected via `combineReducers`.

---

## 🛠️ Technologies Used

- React
- Redux
- Redux Thunk
- Redux Logger (for console logs)
- Axios
- Vite (dev server)

---

## ⚙️ Main Features

| Feature                     | Description                                     |
|----------------------------|-------------------------------------------------|
| `redux-thunk`              | Handles async actions like fetching users       |
| `combineReducers()`        | Manages multiple reducers in the same store     |
| `connect()`                | Connects class-based components to Redux store  |
| `useSelector` / `useDispatch` | Modern way to connect functional components |
| `redux-logger`             | Logs actions & state in the console             |

---

## ⚙️ Redux Store Setup

```js
// Store.jsx
const rootReducer = combineReducers({
  count: countReducer,
  users: userReducer
});

Count state → state.count.numberOfCounts

Users state → state.users.users