import './hero.css';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

const Hero = () => {
    return (
        <header className='hero--container'>
            <div className="container">
                <h1 className='hero--text'>Marshal <span>Rocks</span></h1>
                <h5 className='hero--text'>As a Developer</h5>
                <a href="48:45" className='btn hero--btn'>Download Resume</a>
                <a href="#contact" className='btn btn-primary hero--btn'>Let's Talk</a>
                <div className='hero--social'>
                    <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
                    <a href="https://github.com" target="_blank"><BsGithub /></a>
                    <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
                </div>
            </div>
        </header>
    );
};

export default Hero;