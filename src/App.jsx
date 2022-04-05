import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div>
            <Hero />
            <Navbar />
            <About />
            <Portfolio />
            <Footer />
        </div>
    );
};

export default App;
