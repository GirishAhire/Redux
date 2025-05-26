import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from './userTypes'; 

import axios from 'axios';

export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});

export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
});

export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data.map((user) => user.name);
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                dispatch(fetchUsersFailure(error.message));
            });
    };
};
