import React, { useEffect, useRef, useState } from "react";
 import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
 

 
 
function App() {
  useEffect(() => {

  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    revealElements.forEach((element) => {
      observer.unobserve(element);
    });
  };

}, []);
  

  return (
    <div>
 <Navbar />

      
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Testimonials />
        <Contact />
    

      <Footer />
 
      
    </div>
  );
}

export default App;