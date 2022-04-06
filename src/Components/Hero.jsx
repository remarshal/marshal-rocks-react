import './hero.css';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import TypedWords from './Typed';

const Hero = () => {
    return (
        <header className='hero--container'>
            <div className="container">
                <h1 className='hero--text'>Marshal <span>Rocks</span></h1>
                <h5 className='hero--text--typed'>As a<TypedWords /></h5>
                <a href="48:45" className='btn hero--btn'>Download Resume</a>
                <a href="#contact" className='btn btn-primary hero--btn'>Let Chat!</a>
                <div className='hero--social'>
                    <a href="https://linkedin.com/in/remarshal" target="_blank"><BsLinkedin /></a>
                    <a href="https://github.com/remarshal" target="_blank"><BsGithub /></a>
                    <a href="https://instagram.com/remarshal" target="_blank"><BsInstagram /></a>
                </div>
            </div>
        </header>
    );
};

export default Hero;