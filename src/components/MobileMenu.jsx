import { navigation } from '../data';
import { marker } from '../imports';

const MobileMenu = ({ showMobileMenu }) => {
  return (
    <div className={`mobile-menu${showMobileMenu ? '' : ' hidden'}`}>
      <ul>
        {navigation.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="mobile-menu-bottom">
        <button type="button" className="btn btn-dark-outline">
          Sign in
        </button>
        <button type="button" className="btn btn-dark">
          Join now
        </button>
        <div>
          <a href="#!">
            {marker}
            <span>Find a store</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
