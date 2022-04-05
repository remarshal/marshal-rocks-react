import './hero.css';

const Hero = () => {
    return (
        <header className='hero--container'>
            <div className="container">
                <h1 className='hero--text'>Marshal <span>Rocks</span></h1>
                <h5 className='hero--text'>As a Developer</h5>
                <a href="48:45" className='btn hero--btn'>Download Resume</a>
                <a href="#contact" className='btn btn-primary hero--btn'>Let's Talk</a>
            </div>
        </header>
    );
};

export default Hero;