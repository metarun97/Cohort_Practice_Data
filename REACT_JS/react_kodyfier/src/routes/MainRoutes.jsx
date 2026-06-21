import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './../pages/Home';
import Product from '../pages/Product';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Service from './../pages/Service';
import Navbar from '../components/Navbar';
import PageNotFound from '../pages/PageNotFound';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Courses from '../pages/Courses';
import CourseDetail from '../pages/CourseDetail';
import Navbar2 from '../components/Navbar2';

const MainRoutes = () => {
  return (
    <div className="px-10">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
