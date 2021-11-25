import { socialLinks } from '../data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social">
          {socialLinks.map((item) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.image}
            </a>
          ))}
        </div>
        <p>&copy; {year} Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
