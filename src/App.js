// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Offer from './components/Offer/Offer';
import Discover from './components/Discover/Discover';
import Steps from './components/Steps/Steps';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Offer />
      <Discover />
      <Steps />   
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
