
import './scss/main.scss';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutMe/>
    </div>
  );
}

export default App;
