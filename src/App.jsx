import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills"
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";
import Journey from "./Components/Journey";
import ScrollTop from "./Components/ScrollTop";

const App = () => {
    return (
        <div>
            <Hero />
            <Navbar />
            <ScrollTop />
            <About />
            <Skills />
            <Journey />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
