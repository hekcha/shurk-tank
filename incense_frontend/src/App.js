import './App.css';
import { Navbar, Sidebar, Footer } from './shared/components/index.js';
import { About } from './screens/index.js';

import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isOpen} toggle={toggle} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
