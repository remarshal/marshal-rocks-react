import './navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsGrid } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const Navbar = () => {
    return (
        <div id="navbar">
            <nav className='nav-menu'>
                <ul>
                    <li><a href="#hero" className="active"><i><AiOutlineHome /></i> <span>Home</span></a></li>
                    <li><a href="#about" ><i><BsPerson /></i> <span>About</span></a></li>
                    <li><a href="#portfolio" ><i><BsGrid /></i> <span>Portfolio</span></a></li>
                    <li><a href="#contact" ><i> <MdOutlineEmail /></i> <span>Contact</span></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;