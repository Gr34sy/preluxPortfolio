
import './scss/main.scss';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FirebaseTest } from './components/FirebaseTest';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <FirebaseTest/>
    </div>
  );
}

export default App;
