import './about.css';
import ProfileImg from '../assets/img/profile-img.png';
import BootstrapBadge from '../assets/img/bootstrap-badge.png';
import ReactBadge from '../assets/img/react-badge.png';
import ReactNativeBadge from '../assets/img/react-native-badge.png';
import NodeBadge from '../assets/img/node-badge.png';
import HtmlBadge from '../assets/img/htmlcssjs-badge.png';
import AccentureLogo from '../assets/img/accenture-logo.png';

const About = () => {
    return (
        <section id='about'>
            <div className="section-title">
                <h2>About</h2>
                <h4>Who is Marshal?</h4>
            </div>
            <div className="employment--badges">
                <div className='employment--badge'>
                    <img src={AccentureLogo} alt="HTML CSS JavaScript Course Completion Certificate Badge" />
                </div>
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
                <div className='about--badge'>
                    <img src={ReactNativeBadge} alt="React Native Course Completion Certificate Badge" />
                </div>
                <div className='about--badge'>
                    <img src={NodeBadge} alt="Node JS Course Completion Certificate Badge" />
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
                    <p>As a graduatate of the <a href='https://nucamp.co' target='_blank'>Full-Stack Web and Mobile Development</a>bootcamp from <a href='https://nucamp.co' target='_blank'>NuCamp,</a>I am proud of all 5 certifications displayed above!  My primary focus has been learning React and JavaScript, with my final certification in NodeJS with back-end servers using MongoDB databases.</p>
                    <p>I'm passionate about coding!  I bring both my technical & creative abilities to each project. I enjoy creating functional applications that incorporate my creativity in the design. I'm thankful for my background in system administration which has provided me with invaluable troubleshooting and problem solving skills!</p>
                    <p>Bringing my code to life is both rewarding and humbling!  I have a great appreciation for clean code and the countless hours of those who have advanced the technology we have today!  Having a well designed website helps create a better user experience.</p>
                    <p>Occasionally I'm available for freelance work, feel free to reach out and say hi!</p>
                    <a href='#contact' className='btn btn-primary'>Let's connect!</a>
                </div>
            </div>
        </section>
    );
};

export default About;