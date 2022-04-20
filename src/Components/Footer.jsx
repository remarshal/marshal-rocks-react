import './footer.css';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
                {/* <a href='#'><h1>Marshal <span>Rocks</span></h1></a> */}
                <div className="copyright">
                    &copy; Copyright <strong><span>2022</span></strong>. All Rights Reserved
                </div>
                <div className='footer--social'>
                    <a href="https://instagram.com/marshal.rocks" target="_blank"><BsInstagram /></a>
                    <a href="https://facebook.com/marshal.rocks" target="_blank"><BsFacebook /></a>
                    <a href="https://linkedin.com/in/remarshal" target="_blank"><BsLinkedin /></a>
                    <a href="https://github.com/remarshal" target="_blank"><BsGithub /></a>
                </div>
                <div className="credits">
                    <a href="#">marshal.rocks</a>
                </div>
        </footer>
    );
};

export default Footer;