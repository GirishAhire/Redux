import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user_redux/UserAction';

function Users({ usersData, fetchUsers }) {
    useEffect(() => {
        fetchUsers();
    }, []);

    return usersData.loading ? (
        <h1>Loading...</h1>
    ) : usersData.error ? (
        <h2>{usersData.error}</h2>
    ) : (
        <div>
            <h1>Users List</h1>
            <div>
                {usersData.users.map((user, index) => (
                    <p key={index}>{user}</p>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        usersData: state.users
    };
};

const mapDispatchToProps = {
    fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
