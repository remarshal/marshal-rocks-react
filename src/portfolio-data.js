import Portfolio1 from './assets/img/portfolio/portfolio-1.jpg';
import Portfolio2 from './assets/img/portfolio/portfolio-2.jpg';
import Portfolio3 from './assets/img/portfolio/portfolio-3.jpg';
import Portfolio4 from './assets/img/portfolio/portfolio-4.jpg';
import Portfolio5 from './assets/img/portfolio/portfolio-5.jpg';
import Portfolio6 from './assets/img/portfolio/portfolio-6.jpg';

const portfolioData = [
    {
        id: 1,
        title: 'Meme Generator',
        type: 'React App',
        description: 'Single page app with connection an API for generating random images.  Created a form to capture user text to apply over images to generator a sharable meme.',
        image: { Portfolio1 },
        github: 'https://github.com/remarshal/meme-generator',
        site: 'https://remarshal.github.io/meme-generator',
    },
    {
        id: 2,
        title: 'Color Guessing Game',
        type: 'Vanilla JavaScript',
        description: 'Built game using vanilla JavaScript.  Demonstrates ability to combine and apply skills learned through various lessons.',
        image: { Portfolio2 },
        github: 'https://github.com/remarshal/color-game',
        site: 'https://remarshal.github.io/color-game',
    },
    {
        id: 3,
        title: 'Pottery Studio Store',
        type: 'Bootstrap Ecommerce',
        description: 'Ecommerce site built using Bootstrap.  Website to created in conjuction while completing the NuCamp course as an assignement.',
        image: { Portfolio3 },
        github: 'https://github.com/remarshal/pottery-studio',
        site: 'https://remarshal.github.io/Pottery-Studio/',
    },
    {
        id: 4,
        title: 'Travel Journal',
        type: 'React',
        description: 'Initial project to learn the basics of React while transfering the knowledge obtained prior with HTML, CSS, and JavaScript.',
        image: { Portfolio4 },
        github: 'https://github.com/remarshal/travel-journal',
        site: 'https://remarshal.github.io/travel-journal/',
    },
    {
        id: 5,
        title: 'Campsite Reservations',
        type: 'Bootstrap Class Project',
        description: 'Website for fictional campsite created as a class project while learning Bootstrap.',
        image: { Portfolio5 },
        github: 'https://github.com/remarshal/newcamp-site',
        site: 'https://remarshal.github.io/newcamp-site/',
    },
    {
        id: 6,
        title: 'Campsite Reservations',
        type: 'React Class Project',
        description: 'Fictional campsite converted from Bootstrap to React as a class project.',
        image: { Portfolio6 },
        github: 'https://github.com/remarshal/React-NuCamp',
        site: 'https://remarshal.github.io/React-NuCamp/',
    },
];

export default portfolioData;