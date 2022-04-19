import React from 'react';
import './skills.css';
import { AiFillApi } from 'react-icons/ai';
import { SiJavascript, SiCss3, SiHtml5, SiJquery, SiReact, SiGithub, SiGnubash, SiWordpress } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { MdPhonelink } from 'react-icons/md';
import { FaSass } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id='skills'>
            <div className="section-title">
                <h2>Skills & Tools</h2>
                <h5>The skills, tools and technologies I use to bring your products to life.</h5>
            </div>
            <div className="container skills--container">
                <div className="skills--content">
                    <div className="skills--cards">
                        <article className='skills--card'>
                            <SiHtml5 className='skills--icons' />
                            <h5>HTML5</h5>
                        </article>
                        <article className='skills--card'>
                            <SiCss3 className='skills--icons' />
                            <h5>CSS3</h5>
                        </article>
                        <article className='skills--card'>
                            <SiJavascript className='skills--icons' />
                            <h5>JavaScript</h5>
                        </article>
                        <article className='skills--card'>
                            <SiJquery className='skills--icons' />
                            <h5>jQuery</h5>
                        </article>
                        <article className='skills--card'>
                            <SiReact className='skills--icons' />
                            <h5>React</h5>
                        </article>
                        <article className='skills--card'>
                            <SiGnubash className='skills--icons' />
                            <h5>Git Bash</h5>
                        </article>
                        <article className='skills--card'>
                            <SiGithub className='skills--icons' />
                            <h5>Github</h5>
                        </article>
                        <article className='skills--card'>
                            <AiFillApi className='skills--icons' />
                            <h5>APIs</h5>
                        </article>
                        <article className='skills--card'>
                            <FaSass className='skills--icons' />
                            <h5>SASS</h5>
                        </article>
                        <article className='skills--card'>
                            <VscCode className='skills--icons' />
                            <h5>VS Code</h5>
                        </article>
                        <article className='skills--card'>
                            <MdPhonelink className='skills--icons' />
                            <h5>Responsive Websites</h5>
                        </article>
                        <article className='skills--card'>
                            <SiWordpress className='skills--icons' />
                            <h5>Wordpress</h5>
                        </article>
                    </div>
                    <h2>Currently working on:</h2>
                    <p>Improving my skills in, and understanding of React and vanilla JavaScript.  Also, having fun with #100DaysOfCode challenge building and creating projects.</p>
                    <a href="https://instagram.com/marshal.rocks" target="_blank" className='btn btn--card'>Follow my journey</a>
                    <a href='#contact' className='btn btn-primary btn--card'>Let's connect!</a>
                </div>
            </div>
        </section>
    );
};

export default Skills;