import './contact.css';
import headshot from '../assets/img/marshal-sq.jpg';

const Contact = () => {
    return (
        <div>
            <section id='contact'>
                <div className="section-title">
                    <h2>Contact</h2>
                    <h4>I'm excited to connect with you!</h4>
                    <div className='section--headshot'>
                        <img src={headshot} className="contact--headshot" alt="marshal headshot" />
                    </div>
                </div>
                <div className="container contact--container">

                </div>
            </section>
        </div>
    );
};

export default Contact;