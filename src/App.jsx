import { useEffect, useState } from 'react';
import { Divider, MobileMenu, Navbar, Footer } from './components';
import { BoxOne, BoxTwo, BoxThree, BoxContainer } from './components/Box';
import { boxA, boxB, boxC, boxD, boxE, boxF1, boxF2 } from './data';
import './App.css';

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showMobileMenu]);

  const handleMobileMenu = () => setShowMobileMenu((prev) => !prev);

  return (
    <div>
      <Navbar
        showMobileMenu={showMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      <BoxOne {...boxA} />
      <BoxTwo {...boxB} />
      <BoxTwo {...boxC} />
      <BoxTwo {...boxD} />
      <BoxTwo {...boxE} />
      <BoxContainer>
        <BoxThree {...boxF1} />
        <BoxThree {...boxF2} />
      </BoxContainer>
      <Divider />
      <Footer />
      <MobileMenu showMobileMenu={showMobileMenu} />
    </div>
  );
}

export default App;
