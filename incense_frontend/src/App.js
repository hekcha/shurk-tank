import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  Navbar,
  Sidebar,
  Footer,
} from './shared/components/index.components.js';
import { About, Contact, Gallery, Home } from './screens/index.screens.js';

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
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/gallery" Component={Gallery} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
