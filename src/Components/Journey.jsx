import React from 'react';
import './journey.css';
import OracleBadge from '../assets/img/oracle-associate-certification_badge.png';

const Journey = () => {
    return (
        <section id='journey'>
            <div className="section-title">
                <h2>My Journey</h2>
                <h5>What I'm currently working on</h5>
            </div>

            <div className="container journey--container">
                <div className="journey--content">
                    <p>Oracle Associate Certification</p>
                    <div className="journey--section">
                        <img src={OracleBadge} alt="Oracle SQL Database Associate Certification badge" className='journey--img' />
                    </div>
                    <p>I'm currently working toward my <a href='https://education.oracle.com/oracle-database-sql-certified-associate/trackp_457' target='_blank'>Oracle SQL Database Associate Certification</a>through the online platform at Oracle.   Accenture is committed to my growth, and offering this amazing opportunity to gain another certification.  This skill improves my understanding of the fundamental SQL concepts needed to undertake any database project. </p>

                    {/* <p>Also having fun on <a href='https://instagram.com/marshal.rocks' target='_blank'>Instagram</a>sharing my journey and coding projects.</p>
                    <a href="https://instagram.com/marshal.rocks" target="_blank" className='btn btn--journey'>Follow my journey</a>
                    <a href='#contact' className='btn btn-primary btn--journey'>Let's connect!</a> */}
                </div>
            </div>
        </section>
    );
};

export default Journey;