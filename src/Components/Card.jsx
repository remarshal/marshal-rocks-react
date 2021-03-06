import './card.css';

const Card = (props) => {
    return (
        <div>
            <article className="cards" key={props.project.id}>
                <div className="card--img">
                    <a href={props.project.site} target='_blank'><img src={props.project.image} alt={props.project.title} /></a>
                </div>
                <div className='card--info'>
                    <h3>{props.project.title}</h3>
                    <h5>{props.project.type}</h5>
                    <p>{props.project.description}</p>
                    <a href={props.project.github} target='_blank' className='btn btn--card'>Github</a>
                    {/* suppress live site on react native projects */}
                    {props.project.showsite ? <a href={props.project.site} target='_blank' className='btn btn-primary btn--card'>Live Site</a> : <a></a>}
                </div>
            </article>
        </div>
    );
};

export default Card;