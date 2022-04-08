import './portfolio.css';
import Card from './Card'
import portfolioData from "../portfolio-data";

const Portfolio = () => {
    const projects = portfolioData.map(project => {
        return (
            <Card
            key={project.id}
            project={project}
          />
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