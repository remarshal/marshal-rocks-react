import './contact.css';
import headshot from '../assets/img/marshal-sq.jpg';
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

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
                    <div className="contact--options">
                        <article className='contact--option'>
                            <MdOutlineEmail />
                            <h4>Email</h4>
                            <h5>marshalwaldendev@gmail.com</h5>
                            <a href='mailto:marshalwaldendev@gmail.com' target="_blank">Send Email</a>
                        </article>
                        <article className='contact--option'>
                            <RiMessengerLine />
                            <h4>Messenger</h4>
                            <h5>Send Message via Facebook</h5>
                            <a href='https://m.me/marshal.walden' target="_blank">Send Message</a>
                        </article>
                    </div>
                    <form action="">
                        <input type="text" name='name' placeholder='Your name' required />
                        <input type="email" name='email' placeholder='Your email' required />
                        <textarea name='message' rows="8" placeholder='Your message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;