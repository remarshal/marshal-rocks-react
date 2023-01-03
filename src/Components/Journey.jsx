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
                    <p>AWS Certified Solutions Architect Associate SAA-C03.</p>
                    <p>I'm currently working toward my <a href='https://aws.amazon.com/certification/certified-solutions-architect-associate/' target='_blank'>AWS Certified Solutions Architect Certification</a>through the online platform at <a href='https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c03' target='_blank'>A Cloud Guru.</a>  Accenture is committed to my growth, and offering this amazing opportunity to gain another certification.  It's one of the most valuable and sought-after cloud computing certifications. </p>
                    <p>Also having fun on <a href='https://instagram.com/marshal.rocks' target='_blank'>Instagram</a>sharing my journey and coding projects.</p>
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