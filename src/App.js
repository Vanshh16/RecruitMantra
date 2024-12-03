import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Advance from "./pages/Advance.jsx";
import Beginner from "./pages/Beginner.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import RedeemCoins from "./pages/RedeemCoins.jsx";
import Intermediate from "./pages/Intermediate.jsx";
import Profile from "./pages/Profile.jsx";
import Feedback from "./pages/Feedback.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/advance" element={<Advance />} />
          <Route exact path="/beginner" element={<Beginner />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/redeem-coins" element={<RedeemCoins />} />
          <Route exact path="/intermediate" element={<Intermediate />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
