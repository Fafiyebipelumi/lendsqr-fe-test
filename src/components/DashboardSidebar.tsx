import React from 'react';
import '../styles/DashboardSidebar.css';
import { FaCaretDown } from 'react-icons/fa';
import { SidebarData } from '../SidebarData';
import { SidebarInterface } from '../interfaces/SidebarInterface';
import NavDashboard from './NavDashboard';
import { FaUser } from 'react-icons/fa';

const DashboardSidebar = () => {
    return (
        <div className='dashboard-sidebar'>
            <div className='dashboard-sidebar-container'>
                <FaUser /><p>Switch organization</p>
                <FaUser /><p>Dashboard</p>
            </div>
            <div>
                {SidebarData.map((item: SidebarInterface, index: number) => {
                    return (
                        <NavDashboard key={index} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default DashboardSidebar;