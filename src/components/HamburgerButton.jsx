const HamburgerButton = ({ showMobileMenu, handleMobileMenu }) => {
  return (
    <button
      type="button"
      className={`hamburger${showMobileMenu ? ' open' : ''}`}
      onClick={handleMobileMenu}
    >
      <span className="hamburger-top" />
      <span className="hamburger-middle" />
      <span className="hamburger-bottom" />
    </button>
  );
};

export default HamburgerButton;
