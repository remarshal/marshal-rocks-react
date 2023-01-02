import React from 'react';
import './skills.css';
import BootstrapBadge from '../assets/img/bootstrap-badge.png';
import ReactBadge from '../assets/img/react-badge.png';
import ReactNativeBadge from '../assets/img/react-native-badge.png';
import NodeBadge from '../assets/img/node-badge.png';
import HtmlBadge from '../assets/img/htmlcssjs-badge.png';

const Skills = () => {
    return (
        <section id='skills'>
            <div className="section-title">
                <h2>Skills & Tools</h2>
                <h5>Technologies I use to bring products to life.</h5>
            </div>
            <div className="skills--badges">
                <div className='skills--badge'>
                    <img src={HtmlBadge} alt="HTML CSS JavaScript Course Completion Certificate Badge" />
                </div>
                <div className='skills--badge'>
                    <img src={BootstrapBadge} alt="Bootstrap Course Completion Certificate Badge" />
                </div>
                <div className='skills--badge'>
                    <img src={ReactBadge} alt="React Course Completion Certificate Badge" />
                </div>
                <div className='skills--badge'>
                    <img src={ReactNativeBadge} alt="React Native Course Completion Certificate Badge" />
                </div>
                <div className='skills--badge'>
                    <img src={NodeBadge} alt="Node JS Course Completion Certificate Badge" />
                </div>
            </div>
            <div className="skills--container">
                <h4>Results-driven Application Developer</h4>
                <p>As a graduatate of the <a href='https://nucamp.co' target='_blank'>Full-Stack Web and Mobile Development</a>bootcamp from <a href='https://nucamp.co' target='_blank'>NuCamp,</a>I am proud of all 5 certifications displayed above!  My primary focus has been learning React and JavaScript, with my final certification in NodeJS with back-end servers using MongoDB databases.</p>
                <p>I'm passionate about coding!  I bring both my technical & creative abilities to each project. I enjoy creating functional applications that incorporate my creativity in the design. I'm thankful for my background in system administration which has provided me with invaluable troubleshooting and problem solving skills!</p>
                <div className='skills--badge'>
                    <img src={ReactBadge} alt="AWS Certified Solutions Architech - Associate Badge" />
                </div>
                <p>My most recent achievement is Cloud certification with Amazon Web Services.   I am now certified as an <a href='https://aws.amazon.com/certification/certified-solutions-architect-associate/' target='_blank'>AWS Certified Solutions Architect - Associate</a>under the most recent standard (SAA-C03).  This compliments my coding skills by better understanding the numerous cloud services available to businesses large and small.</p>
                <p>Occasionally I'm available for freelance work, feel free to reach out and say hi!</p>
                <a href='#contact' className='btn btn-primary' >Let's connect!</a>
            </div>
        </section>
    );
};

export default Skills;
