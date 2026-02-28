import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CallForPapers from '../pages/CallForPapers';
import Schedule from '../pages/Schedule';
import Speakers from '../pages/Speakers';
import Registration from '../pages/Registration';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);

export default AppRoutes;
