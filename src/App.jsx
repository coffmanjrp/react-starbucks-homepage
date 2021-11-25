import { Navbar, Footer } from './components';
import { BoxOne, BoxTwo, BoxThree, BoxContainer } from './components/Box';
import { boxA, boxB, boxC, boxD, boxE, boxF1, boxF2 } from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BoxOne {...boxA} />
      <BoxTwo {...boxB} />
      <BoxTwo {...boxC} />
      <BoxTwo {...boxD} />
      <BoxTwo {...boxE} />
      <BoxContainer>
        <BoxThree {...boxF1} />
        <BoxThree {...boxF2} />
      </BoxContainer>
      <Footer />
    </div>
  );
}

export default App;
