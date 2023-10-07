import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Header />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
