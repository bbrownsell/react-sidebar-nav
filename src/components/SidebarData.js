import {FaEnvelopeOpenText, FaCartPlus} from 'react-icons/fa';
import {AiFillHome } from 'react-icons/ai';
import {IoMdHelpCircle, IoIosPaper, IoMdPeople} from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIosPaper/>,
        className: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus/>,
        className: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople/>,
        className: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaEnvelopeOpenText/>,
        className: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoMdHelpCircle/>,
        className: 'nav-text'
    },
]