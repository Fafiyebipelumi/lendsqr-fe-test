import React, { useEffect } from 'react';
import '../../styles/Dashboard.css';
import DashboardSection from '../DashboardSection';
import Logo from '../../images/logo.png';
import Vector from '../../images/Vector.png';
import Avatar from '../../images/avatar.png';
import { FaCaretDown } from 'react-icons/fa';

const Dashboard = () => {

    // useEffect(() => {
    //     fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }, [])

    return (
        <div className='dashboard'>
            <div className='dashboard-container'>
                <div className='dashboard-wrapper'>
                    <img src={Logo} alt='logo' />
                    <div className='dashboard-input'>
                        <input type='text' placeholder='Search for anything' />
                        <button>Search</button>
                    </div>
                    <div className='dashboard-navs'>
                        <a href='#'>Docs</a>
                        <img src={Vector} alt='' className='vector-img' />
                        <img src={Avatar} alt='' className='avatar-img' />
                        <p>Adedeji</p><FaCaretDown />
                    </div>
                </div>
            </div>
            <div>
                <DashboardSection />
            </div>
        </div>
    )
}

export default Dashboard;