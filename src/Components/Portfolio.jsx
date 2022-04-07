import './portfolio.css';
import portfolioData from "../portfolio-data";

const Portfolio = () => {
    const projects = portfolioData.map(project => {
        return (
            <article className="portfolio--item" key={project.id}>
                <div className="portfolio--img">
                    <img src={project.img} alt="Portfolio Site Image" />
                </div>
                <h3>{project.title}</h3>
                <h5>{project.type}</h5>
                <a href={project.github} target='_blank' className='btn'>Github</a>
                <a href={project.site} target='_blank' className='btn btn-primary'>Live Site</a>
            </article>
        );
    });
    return (
        <div>
            <section id='portfolio'>
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <h4>I'm continuously adding to my portfolio, please enjoy these latest projects</h4>
                </div>
                <div className="container portfolio--container">
                    {projects}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;