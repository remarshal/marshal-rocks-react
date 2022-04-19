import React from 'react';
import './journey.css';
import ChallengeImg from '../assets/img/challenge.png';

const Journey = () => {
    return (
        <section id='journey'>
            <div className="section-title">
                <h2>My Journey</h2>
                <h5>What I'm currently working on</h5>
            </div>
            <div className="container journey--container">
                <div className="journey--content">
                    <p>Improving my skills in, and understanding of React and vanilla JavaScript.  Also, having fun with #100DaysOfCode challenge building and creating projects.</p>
                    <a href="https://instagram.com/marshal.rocks" target="_blank" className='btn btn--journey'>Follow my journey</a>
                    <a href='#contact' className='btn btn-primary btn--journey'>Let's connect!</a>
                </div>
            </div>
            <div className="journey--section">
                <img src={ChallengeImg} alt="Challenge Rules" className='journey--img' />
            </div>
        </section>
    );
};

export default Journey;