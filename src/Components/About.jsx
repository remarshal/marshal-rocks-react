import './about.css';
import ProfileImg from '../assets/img/profile-img.png';
import { BsPencilSquare } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';

const About = () => {
    return (
        <section id='about'>
            <div className="section-title">
                <h2>About</h2>
                <h5>Getting to know me</h5>
            </div>
            <div className="container about--container">
                <div className="about--me">
                    <div className="about--image">
                        <img src={ProfileImg} alt="Marshals Profile Photo" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about--cards">
                        <card className='about--card'>
                            <BsPencilSquare className='about--icons' />
                            <h3>Experience</h3>
                            <h4>20+ years of Information Technology</h4>
                        </card>
                        <card className='about--card'>
                            <FiUsers className='about--icons' />
                            <h3>Certificates</h3>
                            <h4>Bootstrap | React | Node.js</h4>
                        </card>
                        <card className='about--card'>
                            <BsPencilSquare className='about--icons' />
                            <h3>Focus</h3>
                            <h4>HTML | CSS | JavaScript</h4>
                        </card>
                        <p>I've always been fasinated with computers and the internet. I'm not afraid to try new things, a naturally a problem-solver, and a life-long learner of new skills.</p>
                        <a href='#contact' className='btn btn-primary'>Let's connect!</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;