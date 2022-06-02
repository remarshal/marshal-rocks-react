import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Journey from "./Components/Journey";
import ScrollTop from "./Components/ScrollTop";
import Testimonials from "./Components/Testimonials";

const App = () => {
    return (
        <div>
            <Hero />
            <Navbar />
            <ScrollTop />
            <About />
            <Portfolio />
            <Testimonials />
            <Skills />
            <Journey />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
