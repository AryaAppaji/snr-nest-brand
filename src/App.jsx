import { Fragment } from "react/jsx-runtime";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./components/About";
import Faq from "./components/Faq";
import Partners from "./components/Partners";
import Feedback from "./components/Feedback";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true      // animation only once
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <AboutUs />
      <Partners/>
      <Feedback />
      <Faq />
      <Footer />
    </Fragment>
  );
}

export default App
