const redux = require('redux')

const createSagaMiddleware = require('redux-saga').default

const { call, put, takeEvery } = require('redux-saga/effects')

const axios = require('axios')

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST })
const fetchUsersSuccess = (users) => ({ type: FETCH_USERS_SUCCESS, payload: users })
const fetchUsersFailure = (error) => ({ type: FETCH_USERS_FAILURE, payload: error })

const reducer = (state = initialState, action) => {
  console.log('Action:', action.type)
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true }
    case FETCH_USERS_SUCCESS:
      return { loading: false, users: action.payload, error: '' }
    case FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action.payload }
    default:
      return state
  }
}

// Worker Saga: Handles the async API call
function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
    const users = response.data.map(user => user.name)
    yield put(fetchUsersSuccess(users))
  } catch (error) {
    yield put(fetchUsersFailure(error.message))
  }
}

// Watcher Saga: Watches for FETCH_USERS_REQUEST action
function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga)
}

function* rootSaga() {
  yield watchFetchUsers()
}

const createStore = redux.createStore

const applyMiddleware = redux.applyMiddleware

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

store.subscribe(() => {

  console.log('Updated State:', store.getState())
  
})

// Dispatch the action to start the saga

store.dispatch(fetchUsersRequest())
