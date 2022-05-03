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
                    <h4>I wouldn't be where I am today without my amazing instructors, here's what they've said.</h4>
                </div>
                <div className="container testimonial--container">
                    <article className="testimonial">
                        <div className='header'>
                            <div className='img--grid'>
                                <a href="#" target='_blank'><img className="client--img" src={Juan} alt="My instructor Juan from NuCamp" /></a>
                            </div>
                            <a href="#" target='_blank'><h5 className='client--name'>Juan Grajales</h5></a>
                            <div className='client--title'>
                                <p>NuCamp React Instructor<br></br> <a href="#" target='_blank' >React Developer</a></p>
                            </div>
                        </div>
                        <div className='quote--icons-left' ><ImQuotesLeft /></div>
                        <p className='client--review'>It was a pleasure teaching Marshal the fundamentals of React, Redux, and API's. As a student, Marshal was prepared for every class.</p>
                        <p className='client--review'>He has a great attitude towards learning and attempts solving problems on his own before reaching out for help. Marshal is the type of student that reminds me why I love teaching.</p>
                        <div className='quote--icons-right' >
                            <ImQuotesRight />
                        </div>
                    </article>
                    <article className="testimonial">
                        <div className="header">
                            <div className="img--grid">
                                <a href="https://teamonedigital.com" target='_blank'><img className="client--img" src={Olivia} alt="My instructor Olivia from NuCamp" /></a>
                            </div>
                            <a href="https://teamonedigital.com" target='_blank'> <h5 className='client--name'>Olivia Culver</h5></a>
                            <div className="client--title">
                                <p>NuCamp Bootstrap Instructor <br></br> <a href="#" target='_blank' >Digital & Web Coordinator</a></p>
                            </div>
                        </div>
                        <div className='quote--icons-left' ><ImQuotesLeft /></div>
                        <p className='client--review'>I had the honor of having Marshal as a student in one of my Bootstrap cohorts with Nucamp Coding Bootcamp. He was my favorite type of student—engaged, curious, and hard working.</p>
                        <p className='client--review'>He worked well with the other students, asked thoughtful questions, and performed well on the exercises and assignments. He has not only the technical aptitude for web development but also the soft skills that make him personable and easy to work with.</p>
                        <div className='quote--icons-right' >
                            <ImQuotesRight />
                        </div>
                    </article>
                </div>
            </section >
        </div >
    );
};

export default Testimonials;;;