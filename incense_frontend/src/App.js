import './App.css';
import Navbar from './shared/components/Navbar/Navbar';
import Sidebar from './shared/components/Sidebar/Sidebar';
import { color } from './shared/constants/colors';

import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isOpen} toggle={toggle} />
      <div
        className="App flex justify-center items-center h-screen bg-slate-500"
        style={{ color: color['cherry-blossom-pink'] }}
      >
        Shree Ansh Agarbatti
      </div>
    </>
  );
}

export default App;
