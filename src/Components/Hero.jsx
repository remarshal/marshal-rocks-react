import './hero.css';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';
import TypedWords from './Typed';

const Hero = () => {
    return (
        <header id='home' className='hero--container'>
            <div className="container">
                <h1 className='hero--text'>Marshal <span>Rocks</span></h1>
                <h4 className='hero--text--typed'>As a<TypedWords /></h4>
                <a href="#contact" className='btn hero--btn'>Request Resume</a>
                <a href="#about" className='btn btn-primary hero--btn'>More About Me</a>
                <div className='hero--social'>
                    <a href="https://instagram.com/marshal.rocks" target="_blank"><BsInstagram /></a>
                    <a href="https://facebook.com/marshal.rocks" target="_blank"><BsFacebook /></a>
                    <a href="https://linkedin.com/in/remarshal" target="_blank"><BsLinkedin /></a>
                    <a href="https://github.com/remarshal" target="_blank"><BsGithub /></a>
                </div>
            </div>
        </header>
    );
};

export default Hero;