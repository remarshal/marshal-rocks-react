import React from 'react';
import './testimonials.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import Juan from '../assets/img/testimonials/juan.png';
import Olivia from '../assets/img/testimonials/olivia.png';
import Joe from '../assets/img/testimonials/joe.png';

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <div className="section-title">
                <h2>Testimonials</h2>
                <h4>I wouldn't be where I am today without my amazing instructors, here's what they've said.</h4>
            </div>
            <div className="container testimonial--container">
                <article className="testimonial">
                    <div className='header'>
                        <div className='img--grid'>
                            <a href="https://www.linkedin.com/in/grajalesjuan" target='_blank'><img className="client--img" src={Juan} alt="My instructor Juan from NuCamp" /></a>
                        </div>
                        <h5 className='client--name'>Juan Grajales</h5>
                        <div className='client--title'>
                            <p>NuCamp React Instructor<br></br> <a href="https://www.linkedin.com/in/grajalesjuan" target='_blank' >React Developer</a></p>
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
                        <h5 className='client--name'>Olivia Culver</h5>
                        <div className="client--title">
                            <p>NuCamp Bootstrap Instructor <br></br> <a href="https://teamonedigital.com" target='_blank' >Digital & Web Coordinator</a></p>
                        </div>
                    </div>
                    <div className='quote--icons-left' ><ImQuotesLeft /></div>
                    <p className='client--review'>I had the honor of having Marshal as a student in one of my Bootstrap cohorts with Nucamp Coding Bootcamp. He was my favorite type of student—engaged, curious, and hard working.</p>
                    <p className='client--review'>He worked well with the other students, asked thoughtful questions, and performed well on the exercises and assignments. He has not only the technical aptitude for web development but also the soft skills that make him personable and easy to work with.</p>
                    <div className='quote--icons-right' >
                        <ImQuotesRight />
                    </div>
                </article>
                <article className="testimonial">
                    <div className="header">
                        <div className="img--grid">
                            <a href="https://www.linkedin.com/in/joe-mackie-7a37871a7" target='_blank'><img className="client--img" src={Joe} alt="My instructor Joe from NuCamp" /></a>
                        </div>
                        <h5 className='client--name'>Joe Mackie</h5>
                        <div className="client--title">
                            <p>NuCamp Node Instructor <br></br> <a href="https://teamonedigital.com" target='_blank' >Senior Software Engineer</a></p>
                        </div>
                    </div>
                    <div className='quote--icons-left' ><ImQuotesLeft /></div>
                    <p className='client--review'>I had the pleasure of having Marshal in my NodeJS, Express, and MongoDB course.</p>
                    <p className='client--review'>Marshal was on time and prepared for each session. Assignment submissions showed good understanding of the concepts presented within the course. In addition, Marshal was able to assist other students to help make everyone better.</p>
                    <div className='quote--icons-right' >
                        <ImQuotesRight />
                    </div>
                </article>
            </div>
        </section >
    );
};

export default Testimonials;;;