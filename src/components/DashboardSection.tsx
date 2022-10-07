import React from 'react';
import '../styles/DashboardSection.css';
import { FaUser } from 'react-icons/fa';
import DashboardSidebar from './DashboardSidebar';
import Users from './Users';

const DashboardSection = () => {
    return (
        <div className='dashboard-section'>
            <div>
                <DashboardSidebar />
            </div>
            <div className='dashboard-section-container'>
                <div className='dashboard-section-content'>
                    <h2>Users</h2>
                </div>
                <div className='dashboard-section-wrapper'>
                    <div className='dashboard-section-heading'>
                        <FaUser />
                        <h3>USERS</h3>
                        <p>2,453</p>
                    </div>
                    <div className='dashboard-section-heading'>
                        <FaUser />
                        <h3>ACTIVE USERS</h3>
                        <p>2,453</p>
                    </div>
                    <div className='dashboard-section-heading'>
                        <FaUser />
                        <h3>USERS WITH LOANS</h3>
                        <p>12,453</p>
                    </div>
                    <div className='dashboard-section-heading'>
                        <FaUser />
                        <h3>USERS WITH SAVINGS</h3>
                        <p>102,453</p>
                    </div>
                </div>
                <div>
                    <Users />
                </div>
            </div>
        </div>
    )
}

export default DashboardSection;