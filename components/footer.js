import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    // returns copyright and social media links
    return (
        <footer>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/shahryarvalizadeh/" target="_blank" rel="noopener noreferrer" className='linkedin'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/ShahV517" target="_blank" rel="noopener noreferrer" className='github'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.instagram.com/shahryar_v/" target="_blank" rel="noopener noreferrer" className='instagram'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com/realslickshah" target="_blank" rel="noopener noreferrer" className='twitter'>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Copyright Shahryar Valizadeh
            </div>
        </footer>
    );
    }
    
export default Footer;