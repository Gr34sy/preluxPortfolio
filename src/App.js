
import './scss/main.scss';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Gallery/>
    </div>
  );
}

export default App;
