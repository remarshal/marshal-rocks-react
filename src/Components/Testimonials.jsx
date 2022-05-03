import React from 'react';
import './testimonials.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import Juan from '../assets/img/testimonials/juan.jpg';
import Olivia from '../assets/img/testimonials/olivia.jpg';
import Pedro from '../assets/img/testimonials/pedro.jpg';

const Testimonials = () => {
    return (
        <div>
            <section id='testimonials'>
                <div className="section-title">
                    <h2>Testimonials</h2>
                    <h4>I'm fortunate to have worked with amazing people, here's what they've said.</h4>
                </div>
                <div className="container container-left">
                    <div className="testimonial--card">
                        <a href="#" target='_blank'><img className="testimonial--img" src={Juan} alt="My instructor Juan from NuCamp" /></a>
                        <p>Juan Grajales</p>
                        <p>NuCamp React Instructor, <a href="#" target='_blank' >React Developer</a></p>
                    </div>
                    <div className='testimonial'>
                        <ImQuotesLeft className='quote--icons' />
                        <p>It was a pleasure teaching Marshal the fundamentals of React, Redux, and API's. As a student, Marshal was prepared for every class.</p>
                        <p>He has a great attitude towards learning and attempts solving problems on his own before reaching out for help. Marshal is the type of student that reminds me why I love teaching.</p>
                        <p className='quote-icons-right'>
                            <ImQuotesRight className='quote--icons' />
                        </p>
                    </div>
                </div>
                <div className="container container-right">
                    <div className='testimonial'>
                        <ImQuotesLeft className='quote--icons' />
                        <p>I had the honor of having Marshal as a student in one of my Bootstrap cohorts with Nucamp Coding Bootcamp. He was my favorite type of student—engaged, curious, and hard working.</p>
                        <p>He worked well with the other students, asked thoughtful questions, and performed well on the exercises and assignments. He has not only the technical aptitude for web development but also the soft skills that make him personable and easy to work with. </p>
                        <ImQuotesRight className='quote--icons' />
                    </div>
                    <div className="testimonial--img">
                        <a href="#" target='_blank'><img src={Olivia} alt="My instructor Olivia from NuCamp" /></a>
                    </div>
                    <div className="testimonial--instructor">
                        <h3>Olivia Culver</h3>
                        <h5>NuCamp Bootstrap Instructor, <a href="#" target='_blank' >Digital & Web Coordinator</a></h5>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Testimonials;;;