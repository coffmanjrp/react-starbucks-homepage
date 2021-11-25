import { Button } from '.';
import { logo, marker } from '../imports';
import { navigation } from '../data';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="index.html">{logo}</a>
        </div>
        <ul className="navbar-nav-left">
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
        <ul className="navbar-nav-right">
          <li>
            <a href="#!">
              {marker}
              <span>Find a store</span>
            </a>
          </li>
          <li>
            <Button text="Sign in" variant="dark-outline" />
          </li>
          <li>
            <Button text="Join now" variant="dark" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
