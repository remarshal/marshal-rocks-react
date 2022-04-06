import './about.css';
import ProfileImg from '../assets/img/profile-img.png';
import { FiUsers, FiAward} from 'react-icons/fi';
import {RiComputerLine} from 'react-icons/ri'

const About = () => {
    return (
        <section id='about'>
            <div className="section-title">
                <h2>About</h2>
                <h4>Getting to know me</h4>
            </div>
            <div className="container about--container">
                <div className="about--me">
                    <div className="about--img">
                        <img src={ProfileImg} alt="Marshals Profile Photo" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about--cards">
                        <card className='about--card'>
                            <FiUsers className='about--icons' />
                            <h3>Experience</h3>
                            <h5>20+ years of Information Technology</h5>
                        </card>
                        <card className='about--card'>
                            <FiAward className='about--icons' />
                            <h3>Certificates</h3>
                            <h5>Bootstrap | React | Node.js</h5>
                        </card>
                        <card className='about--card'>
                            <RiComputerLine className='about--icons' />
                            <h3>Focus</h3>
                            <h5>HTML | CSS | JavaScript</h5>
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