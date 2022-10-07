import React, { useEffect, useState } from 'react';
import '../styles/Users.css';
import Filter from '../images/filter.png';
import UserLists from './UserLists';
import { userListsType } from '../types/userLists';

const Users: React.FC = () => {

    const [userLists, setUserLists] = useState<userListsType[]>([]);

    useEffect(() => {
        fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            .then((response) => response.json())
            .then(data => setUserLists(data))
    }, [])

    return (
        <div className='users'>
            <div className='users-container'>
                <div className='users-heading'><p>Organization</p><img src={Filter} alt='filter' width={10} height={10} /></div>
                <div className='users-heading'><p>Username</p><img src={Filter} alt='filter' width={10} height={10} /></div>
                <div className='users-heading'><p>Email</p><img src={Filter} alt='filter' width={10} height={10} /></div>
                <div className='users-heading'><p>Phone number</p><img src={Filter} alt='filter' width={10} height={10} /></div>
                <div className='users-heading'><p>Date joined</p><img src={Filter} alt='filter' width={10} height={10} /></div>
                <div className='users-heading'><p>Status</p><img src={Filter} alt='filter' width={10} height={10} /></div>
            </div>
            <div>
                {userLists.map((user: userListsType) => {
                    return (
                        <div key={user.id}>
                            <UserLists user={user} />
                            {/* <p>{user.email}</p> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Users