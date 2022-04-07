import './portfolio.css';
import portfolioData from "./portfolio-data"

const Portfolio = () => {

    return (
        <div>
            <section id='portfolio'>
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <h4>I'm continuously adding to my portfolio, please enjoy these latest projects</h4>
                </div>
                <div className="container portfolio--container">
                    <card className="portfolio--item">
                        <div className="portfolio--img">
                            <img src={Portfolio1} alt="Portfolio Site Image" />
                        </div>
                        <h3>Color Guessing Game</h3>
                        <a href='https://github.com/remarshal/color-guessing-game' target='_blank' className='btn'>Github</a>
                        <a href='https://github.com/remarshal/live-site' target='_blank' className='btn btn-primary'>Live Site</a>

                    </card>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;