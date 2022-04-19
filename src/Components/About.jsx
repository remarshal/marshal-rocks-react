import './about.css';
import ProfileImg from '../assets/img/profile-img.png';
import BootstrapBadge from '../assets/img/bootstrap-badge.png';
import ReactBadge from '../assets/img/react-badge.png';
import HtmlBadge from '../assets/img/htmlcssjs-badge.png';

const About = () => {
    return (
        <section id='about'>
            <div className="section-title">
                <h2>About</h2>
                <h4>Who is Marshal?</h4>
            </div>
                <div className="about--badges">
                        <div className='about--badge'>
                            <img src={HtmlBadge} alt="HTML CSS JavaScript Course Completion Certificate Badge" />
                        </div>
                        <div className='about--badge'>
                            <img src={BootstrapBadge} alt="Bootstrap Course Completion Certificate Badge" />
                        </div>
                        <div className='about--badge'>
                            <img src={ReactBadge} alt="React Course Completion Certificate Badge" />
                        </div>
                    </div>
            <div className="container about--container">
                <div className="about--me">
                    <div className="about--img">
                        <img src={ProfileImg} alt="Marshals Profile Photo" />
                    </div>
                </div>
                <div className="about--content">
                    <h4>Results-driven Front-End Developer</h4>
                    <p>I'm currently enrolled in the Full-Stack Web Developer bootcamp with NuCamp and already received 3 certifications.  The final two remaining are mobile developement with React Native and back-end databases with Node.js and MongoDB.</p>
                    <p>I have a passion bringing the technical and creative aspects of web development to each project.  Working to bridge these together helps the user to feel a connection to the experience of the design.</p>
                    <p>I am happiest when creating, learning, and exploring how to bring websites to life.  I'm currently managing systems, networks, and other technical IT administration.  Occassionally I'm available for freelance work, feel free to reach out and say hi!</p>
                    <a href='#contact' className='btn btn-primary'>Let's connect!</a>
                </div>
            </div>
        </section>
    );
};

export default About;