import './navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsGrid } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const Navbar = () => {
    return (
        <div id="navbar">
            <nav className='nav-menu'>
                <ul>
                    <li><a href="#hero" className="active"><AiOutlineHome /><i class="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" ><BsPerson /><i class="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#portfolio" ><BsGrid /><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="#contact" ><MdOutlineEmail /><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;