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
                <div className="about--content">
                    <div className="about--cards">
                        <card className='about--card'>
                            <FiUsers className='about--icons' />
                            <h5>Experience</h5>
                            <h6>20+ years of Information Technology</h6>
                        </card>
                        <card className='about--card'>
                            <FiAward className='about--icons' />
                            <h5>Certificates</h5>
                            <h6>Bootstrap | React | Node.js</h6>
                        </card>
                        <card className='about--card'>
                            <RiComputerLine className='about--icons' />
                            <h5>Focus</h5>
                            <h6>HTML | CSS | JavaScript</h6>
                        </card>
                    </div>
                    <p>I've always been fasinated with computers and the internet. I'm not afraid to try new things, a naturally a problem-solver, and a life-long learner of new skills.</p>
                    <a href='#contact' className='btn btn-primary'>Let's connect!</a>
                </div>
            </div>
        </section>
    );
};

export default About;