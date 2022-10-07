import { FaUser, FaUsers } from 'react-icons/fa';
import { SidebarInterface } from './interfaces/SidebarInterface';

export const SidebarData: SidebarInterface[] = [
    {
        title: 'CONSUMERS',
        subnav: [
            {
                title: 'Users',
                path: '#',
                icon: <FaUsers />
            },
            {
                title: 'Guarantors',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Loans',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Decision Models',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Savings',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Loan Requests',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Whitelist',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Karma',
                path: '#',
                icon: <FaUser />
            }
        ]
    },
    {
        title: 'BUSINESS',
        subnav: [
            {
                title: 'Organization',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Loan Products',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Saving Products',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Fees and Charges',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Transaction',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Services',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Service Account',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Settlements',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Reports',
                path: '#',
                icon: <FaUser />
            },
        ]
    },
    {
        title: 'SETTINGS',
        subnav: [
            {
                title: 'Preferences',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Fees and Pricing',
                path: '#',
                icon: <FaUser />
            },
            {
                title: 'Audit Logs',
                path: '#',
                icon: <FaUser />
            }
        ]
    }
]