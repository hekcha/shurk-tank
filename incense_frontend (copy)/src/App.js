import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navbar,
  Sidebar,
  Footer,
} from './shared/components/index.components.js';
import { About, Contact, Home } from './screens/index.screens.js';

import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Router>
        <Navbar toggle={toggle} />
        <Sidebar isopen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact-us" Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
