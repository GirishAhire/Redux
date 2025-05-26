import React from 'react';
import { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user_redux/UserAction';


function Users({ usersData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return usersData.loading ? (
        <h1>Loading </h1>
    ) : usersData.error ? (
        <h2>{usersData.error}</h2>
    ) : (
        <div>
            <h1>
                Users List
            </h1>
            <div>
                {
                    usersData &&
                    usersData.users &&
                    usersData.users.mapd(users => <p>{users.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        usersData: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

