import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Contact from './screens/Contact/Contact.jsx';
import Footer from './shared/components/footers/MiniCenteredFooter.js';

function App() {
  return (
    <React.Fragment>
      <Router>
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
