import React from 'react';
import { SidebarInterface } from '../interfaces/SidebarInterface';
import '../styles/NavDashboard.css';

type ItemProps = {
    item: SidebarInterface
}

const NavDashboard: React.FC<ItemProps> = ({ item }) => {
    return (
        <div className='nav-dashboard'>
            <div>
                <h4>{item.title}</h4>
            </div>
            <div>
                {item?.subnav?.map((subnavItem, index) => (
                    <div key={index} className='nav-dashboard-list'>
                        {subnavItem.icon}
                        <p>{subnavItem.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavDashboard