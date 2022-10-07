import React from 'react';
import { userListsType } from '../types/userLists';
import '../styles/UserLists.css';

interface userListsInterface {
    user: userListsType;
}

const UserLists: React.FC<userListsInterface> = ({ user }) => {
    return (
        <div className='user-lists'>
            <div className='user-lists-container'>
                <ul>
                    <li>{user.orgName}</li>
                    <li>{user.userName}</li>
                    <li>{user.email}</li>
                    <li>{user.phoneNumber}</li>
                    <li>{user.lastActiveDate}</li>
                    <li>{user.accountBalance}</li>
                </ul>
                <hr />
            </div>
        </div>
    )
}

export default UserLists;