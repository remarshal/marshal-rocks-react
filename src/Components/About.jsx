import './about.css';
import ProfileImg from '../assets/img/profile-img.png';
import BootstrapBadge from '../assets/img/bootstrap-badge.png';
import ReactBadge from '../assets/img/react-badge.png';
import ReactNativeBadge from '../assets/img/react-native-badge.png';
import NodeBadge from '../assets/img/node-badge.png';
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
                    <p>I'm recently graduated from the <a href='https://nucamp.co' target='_blank'>Full-Stack Web and Mobile Development</a>bootcamp at <a href='https://nucamp.co' target='_blank'>NuCamp.</a>I'm proud of all 5 certifications displayed above!  My focus has been predominately learning React and JavaScript, with my final certification on back-end servers using MongoDB databases and Node JS.</p>
                    <p>I have a passion for coding and enjoy bringing both my technical and creative ability to each project. I enjoy creating a user experience that's not only functional but encompasses creativity in the design. Connecting and interacting with a well designed website helps create a better user experience.</p>
                    <p>I am happiest when creating, learning, and exploring! My experience with systems and networks has propelled my troubleshooting and problem solivng skills while on my coding journey.  Occasionally I'm available for freelance work, feel free to reach out and say hi!</p>
                    <a href='#contact' className='btn btn-primary'>Let's connect!</a>
                </div>
            </div>
        </section>
    );
};

export default About;