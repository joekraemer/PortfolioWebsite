import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/mains/Home'
import Education from './components/pages/mains/Education'
import Projects from './components/pages/mains/Projects'
import Printer3D from './components/pages/subpages/projects/Printer3D';
import CryptocurrencyTracker from './components/pages/subpages/projects/CryptocurrencyTracker';
import EWB from './components/pages/subpages/projects/EWB';
import OneSecondVideos from './components/pages/subpages/projects/OneSecondVideos';
import PlayingCardShelf from './components/pages/subpages/projects/PlayingCardShelf';
import SAEMiniBaja from './components/pages/subpages/projects/SAEMiniBaja';
import ULockBikeMount from './components/pages/subpages/projects/ULockBikeMount';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/printer3d' element={< Printer3D />} />
          <Route path='/projects/cryptocurrencytracker' element={< CryptocurrencyTracker />} />
          <Route path='/projects/ewb' element={< EWB />} />
          <Route path='/projects/onesecondvideos' element={< OneSecondVideos />} />
          <Route path='/projects/playingcardshelf' element={< PlayingCardShelf />} />
          <Route path='/projects/saeminibaja' element={< SAEMiniBaja />} />
          <Route path='/projects/ulockbikemount' element={< ULockBikeMount />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
