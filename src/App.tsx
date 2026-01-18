import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Gaming from './pages/Gaming';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Dining from './pages/Dining';
import Contact from './pages/Contact';
import VacancyPage from './pages/VacancyPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Term from './pages/term';
import Layout from './components/Layout';

function App() {
  return (
    <Router >
      <Routes >
         <Route element={<Layout />}>
      <Route path="/" element={<Hero />} />
      <Route path="/games" element={<Gaming/>} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/careers" element={<VacancyPage />} />
          <Route path="/term" element={<Term/>} />
    </Route>
         
      </Routes>
    </Router>
  );
}

export default App;