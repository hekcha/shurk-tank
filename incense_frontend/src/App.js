import './App.css';
import { Navbar, Sidebar, Footer } from './shared/components/index.js';
import {  About, Contact } from './screens/index.js';

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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
