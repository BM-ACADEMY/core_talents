// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Layout/Header";
import Homemainsection from "./Pages/main/Homesection";
import Footer from "./Pages/Layout/Footer";

import ServiceSection from "./Pages/main/Services";
import ScrollToTop from "./ScrollToTop"; // ✅ Import
import Contact from "./Pages/Contact";
import { Toaster } from "react-hot-toast"; // ✅ Import Toaster
import Careermain from "./Pages/main/Careermain";

import Whatsappfloating from "./Pages/WhatsappFloatButton";
import WhyChooseUsSection from "./Pages/main/Whychoosemain"

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop /> {/* ✅ Add here */}
      <Routes>
        <Route path="/" element={<Homemainsection />} />
        <Route path="/Services" element={<ServiceSection />} />
        <Route path="/choose" element={<WhyChooseUsSection />} />
        <Route path="/career" element={<Careermain />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Whatsappfloating />
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
};

export default App;
