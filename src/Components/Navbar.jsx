import './navbar.css';
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineEmail } from 'react-icons/md';

const Navbar = () => {
    const navItems = [
        { id: 1, title: "home", icon: <AiOutlineHome /> },
        { id: 2, title: "about", icon: <BsPerson /> },
        { id: 3, title: "portfolio", icon: <CgWebsite /> },
        { id: 4, title: "contact", icon: <MdOutlineEmail /> }
    ];

    const [activeId, setActiveId] = useState();

    return (
        <div id="navbar">
            <nav className='nav-menu'>
                <ul>
                    {navItems.map((item) => (
                        <li onClick={() => setActiveId(item.id)}>
                            <a href={`#${item.title}`} className={activeId === item.id ? "active" : "inactive"} ><i>{item.icon}</i> <span>{item.title}</span></a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div >
    );
};

export default Navbar;