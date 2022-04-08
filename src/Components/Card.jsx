import React from 'react';
import './card.css';

const Card = (props) => {
    return (
        <div>
            <article className="portfolio--item" key={props.project.id}>
                <div className="portfolio--img">
                    <img src={props.project.image} alt="Portfolio Site Image" />
                </div>
                <h3>{props.project.title}</h3>
                <h5>{props.project.type}</h5>
                <a href={props.project.github} target='_blank' className='btn'>Github</a>
                <a href={props.project.site} target='_blank' className='btn btn-primary'>Live Site</a>
            </article>
        </div>
    );
};

export default Card;