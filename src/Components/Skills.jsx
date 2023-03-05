import React from 'react';
import './skills.css';
import { AiFillApi, AiOutlineConsoleSql, AiFillDatabase, AiOutlineCloudServer } from 'react-icons/ai';
import { SiJavascript, SiJquery, SiReact, SiGithub, SiGnubash, SiWordpress, SiOracle } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { MdPhonelink } from 'react-icons/md';
import { FaSass, FaAws } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id='skills'>
            <div className="section-title">
                <h2>Skills & Tools</h2>
                <h5>Skills, tools, and technologies I use to bring products to life.</h5>
            </div>
            <div className="container skills--container">
                <div className="skills--content">
                    <div className="skills--cards">
                        <article className='skills--card'>
                            <SiOracle className='skills--icons' />
                            <h5>Oracle</h5>
                        </article>
                        <article className='skills--card'>
                            <AiOutlineConsoleSql className='skills--icons' />
                            <h5>Oracle SQL</h5>
                        </article>
                        <article className='skills--card'>
                            <AiFillDatabase className='skills--icons' />
                            <h5>Database</h5>
                        </article>
                        <article className='skills--card'>
                            <AiOutlineCloudServer className='skills--icons' />
                            <h5>OCI</h5>
                        </article>
                        <article className='skills--card'>
                            <FaAws className='skills--icons' />
                            <h5>AWS</h5>
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
                            <MdPhonelink className='skills--icons' />
                            <h5>CSS</h5>
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
                            <SiWordpress className='skills--icons' />
                            <h5>Wordpress</h5>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;