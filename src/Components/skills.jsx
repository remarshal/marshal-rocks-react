import React from 'react';
import './skills.css';
import { FiUsers, FiAward} from 'react-icons/fi';
import { RiComputerLine } from 'react-icons/ri'

const Skills = () => {
    return (
        <section id='skills'>
            <div className="section-title">
                <h2>Skills & Tools</h2>
                <h4>My toolbox of skills</h4>
            </div>
            <div className="container skills--container">
                <div className="skills--content">
                    <div className="skills--cards">
                        <article className='skills--card'>
                            <FiUsers className='skills--icons' />
                            <h5>HTML5</h5>
                        </article>
                        <article className='skills--card'>
                            <FiAward className='skills--icons' />
                            <h5>CSS3</h5>
                        </article>
                        <article className='skills--card'>
                            <RiComputerLine className='skills--icons' />
                            <h5>JavaScript</h5>
                        </article>
                    </div>
                    <h2>Currently working on:</h2>
                    <p>Improving my skills in, and understanding of React and vanilla JavaScript.  Also, having fun with #100DaysOfCode challenge building and creating projects.</p>
                    <a href="https://instagram.com/marshal.rocks" target="_blank" className='btn'>Follow my journey</a>
                    <a href='#contact' className='btn btn-primary'>Let's connect!</a>
                </div>
            </div>
        </section>
    );
};

export default Skills;