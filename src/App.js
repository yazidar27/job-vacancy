import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import HeroSection from './HeroSection';
import ContentA from './ContentA';
import JobDetail from './JobDetail';
import CustomFooter from './CustomFooter';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation();
  const isJobDetailPage = location.pathname.startsWith('/job');

  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/vacancy' element={<ContentA />} />
        <Route path='/job/:id' element={<JobDetail />} />
      </Routes>
      {!isJobDetailPage && <ContentA />}
      <CustomFooter />
    </>
  );
}

export default App;