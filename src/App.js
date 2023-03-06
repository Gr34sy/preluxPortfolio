
import './scss/main.scss';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
