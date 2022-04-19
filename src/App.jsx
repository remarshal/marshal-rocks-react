import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills"
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div>
            <Hero />
            <Navbar />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
