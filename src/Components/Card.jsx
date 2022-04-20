import './card.css';

const Card = (props) => {
    return (
        <div>
            <article className="cards" key={props.project.id}>
                <div className="card--img">
                    <img src={props.project.image} alt={props.project.title} />
                </div>
                <div className='card--info'>
                    <h3>{props.project.title}</h3>
                    <h5>{props.project.type}</h5>
                    <p>{props.project.description}</p>
                    <a href={props.project.github} target='_blank' className='btn btn--card'>Github</a>
                    <a href={props.project.site} target='_blank' className='btn btn-primary btn--card'>Live Site</a>
                </div>
            </article>
        </div>
    );
};

export default Card;