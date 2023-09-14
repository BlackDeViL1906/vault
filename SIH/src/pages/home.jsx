import React from "react";
import "../assets/css/home.css";
import CustomNavbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <CustomNavbar />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
