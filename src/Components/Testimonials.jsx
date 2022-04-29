import React from 'react';
import './testimonials.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Testimonials = () => {
    return (
        <div>
            <section id='testimonials'>
                <div className="section-title">
                    <h2>Testimonials</h2>
                    <h4>I'm fortunate to have worked with amazing people, here's what they've said.</h4>
                </div>
                <div className="container testimonial--container">
                    <article className="testimonial">
                        <div className="testimonial--img">
                            <a href="#" target='_blank'><img src={Juan} alt="My instructor Juan from NuCamp" /></a>
                            <h3>Juan Grajales</h3>
                            <h5>NuCamp Instructor, <a href="#" target='_blank' >React Developer</a></h5>
                        </div>
                        <div className='testimonial--info'>
                            <ImQuotesLeft className='quote--icons' />
                            <p>It was a pleasure teaching Marshal the fundamentals of React, Redux, and API's. As a student, Marshal was prepared for every class. He has a great attitude towards learning and attempts solving problems on his own before reaching out for help. Marshal is the type of student that reminds me why I love teaching.</p>
                            <ImQuotesRight className='quote--icons' />
                        </div>
                    </article>
                    <article className="testimonial">
                        <div className='testimonial--info'>
                            <ImQuotesLeft className='quote--icons' />
                            <p>It was a pleasure teaching Marshal the fundamentals of React, Redux, and API's. As a student, Marshal was prepared for every class. He has a great attitude towards learning and attempts solving problems on his own before reaching out for help. Marshal is the type of student that reminds me why I love teaching.</p>
                            <ImQuotesRight className='quote--icons' />
                        </div>
                        <div className="testimonial--img">
                            <a href="#" target='_blank'><img src={Juan} alt="My instructor Juan from NuCamp" /></a>
                            <h3>Juan Grajales</h3>
                            <h5>NuCamp Instructor, <a href="#" target='_blank' >React Developer</a></h5>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;;;