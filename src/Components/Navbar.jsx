import './navbar.css';
import { useState } from 'react';
import { BiHome } from 'react-icons/bi';
import { SiCodenewbie } from 'react-icons/si';
import {RiUserFollowFill} from 'react-icons/ri'
import { MdOutlineEmail, MdOutlineComputer, MdOutlineRateReview, MdOutlineLibraryBooks } from 'react-icons/md';

const Navbar = () => {
    const navItems = [
        { id: 1, title: "home", icon: <BiHome />},
        { id: 2, title: "about", icon: <RiUserFollowFill /> },
        { id: 3, title: "skills", icon: <MdOutlineComputer /> },
        { id: 4, title: "journey", icon: <SiCodenewbie /> },
        { id: 5, title: "portfolio", icon: <MdOutlineLibraryBooks /> },
        { id: 6, title: "reviews", icon: <MdOutlineRateReview /> },
        { id: 7, title: "contact", icon: <MdOutlineEmail /> }
    ];

    const [activeId, setActiveId] = useState("");

    return (
        <div id="navbar">
            <nav className='nav-menu'>
                <ul>
                    {navItems.map((item) => (
                        <li onClick={() => setActiveId(item.id)} key={item.id}> 
                            <a href={`#${item.title}`} className={activeId === item.id ? "active" : "inactive"}><i>{item.icon}</i> <span>{item.title}</span></a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div >
    );
};

export default Navbar;