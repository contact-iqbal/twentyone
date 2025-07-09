import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebDevelopment from './pages/courses/WebDevelopment';
import DataScience from './pages/courses/DataScience';
import Design from './pages/courses/Design';
import Business from './pages/courses/Business';
import Bootcamp from './pages/programs/Bootcamp';
import Mentorship from './pages/programs/Mentorship';
import Certification from './pages/programs/Certification';
import Corporate from './pages/programs/Corporate';
import Blog from './pages/resources/Blog';
import Community from './pages/resources/Community';
import HelpCenter from './pages/resources/HelpCenter';
import CareerGuide from './pages/resources/CareerGuide';
import Individual from './pages/pricing/Individual';
import Team from './pages/pricing/Team';
import Enterprise from './pages/pricing/Enterprise';
import Student from './pages/pricing/Student';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Courses Routes */}
          <Route path="/courses/web-development" element={<WebDevelopment />} />
          <Route path="/courses/data-science" element={<DataScience />} />
          <Route path="/courses/design" element={<Design />} />
          <Route path="/courses/business" element={<Business />} />
          
          {/* Programs Routes */}
          <Route path="/programs/bootcamp" element={<Bootcamp />} />
          <Route path="/programs/mentorship" element={<Mentorship />} />
          <Route path="/programs/certification" element={<Certification />} />
          <Route path="/programs/corporate" element={<Corporate />} />
          
          {/* Resources Routes */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/community" element={<Community />} />
          <Route path="/resources/help-center" element={<HelpCenter />} />
          <Route path="/resources/career-guide" element={<CareerGuide />} />
          
          {/* Pricing Routes */}
          <Route path="/pricing/individual" element={<Individual />} />
          <Route path="/pricing/team" element={<Team />} />
          <Route path="/pricing/enterprise" element={<Enterprise />} />
          <Route path="/pricing/student" element={<Student />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;