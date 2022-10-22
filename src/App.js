import { useState } from 'react';

import './App.css';

import Home from './pages/Home';
import Header from './components/shared/Header';
import SideHeader from './components/shared/SideHeader';

import { AnimatePresence } from 'framer-motion';
import SearchSection from './components/shared/SearchSection';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSidebarOnclick = () => {
    setIsSidebarOpen(prevValue => !prevValue);
  };

  const handleSearchOnclick = () => {
    setIsSearchOpen(prevValue => !prevValue);
  };

  return (
    <>
      <Header
        onClick={handleSidebarOnclick}
        searchClickHandler={handleSearchOnclick}
      />
      <AnimatePresence>
        {isSidebarOpen && <SideHeader onClick={handleSidebarOnclick} />}
        {isSearchOpen && <SearchSection onClick={handleSearchOnclick} />}
      </AnimatePresence>
      <div className='wrapper'>
        <Home />
      </div>
    </>
  );
}

export default App;
